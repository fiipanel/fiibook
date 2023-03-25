import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from 'firebase/auth';
import { getFirestore, doc } from 'firebase/firestore';
import { GoogleAuthProvider, signInWithPopup, } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyDLntg4Q8GKrABciokDKDf5ngu5BsNCWD8",
    authDomain: "fiibook-e832d.firebaseapp.com",
    projectId: "fiibook-e832d",
    storageBucket: "fiibook-e832d.appspot.com",
    messagingSenderId: "823656738404",
    key:"AIzaSyAGuDri2IPYc8t3EdU0BJGdwBuZuq3pYCs",
    appId: "1:823656738404:web:f02d39a67b0cbb13ce3971",
   
    // "project_id": "fiibook", 
    // "auth_uri": "https://accounts.google.com/o/oauth2/auth", 
    // "token_uri": "https://oauth2.googleapis.com/token", 
    // "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs", 
    // "client_secret": "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",
    // "issued_at": "1416962591727",
    // "application_name": "0d3e1d41-a59f-4d74-957e-d4e3275d4781",
    // "scope": "A",
    // "status": "approved",
    // "api_product_list": "[scopecheck1-bs0cSuqS9y]",
    // "expires_in": "1799", //--in seconds
    // "developer.email": "scopecheck1-AdBmANhsag@apigee.com",
    // "organization_id": "0",
    // "token_type": "BearerToken",
    // "client_id": "eTtB7w5lvk3DnOZNGReBlvGvIAeAywun",
    // "access_token": "ODm47ris5AlEty8TDc1itwYPe5MW",
    // "organization_name": "wwitman",
    // "refresh_token_expires_in": "0", //--in seconds
    // "refresh_count": "0" 
};


class Firebase {
    constructor() {
        const app = initializeApp(config);
        this.auth = getAuth(app);
        this.db = getFirestore(app);
        this.provider = new GoogleAuthProvider();
    }   

    /**
     * Crée un nouvel utilisateur dans Firebase Authentication
     * @param {string} email - L'adresse email de l'utilisateur
     * @param {string} password - Le mot de passe de l'utilisateur
     * @returns {Object} - L'objet utilisateur Firebase
     */
    async createUserWithEmailAndPassword(email, password) {
        try {
            const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
            return userCredential.user;
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`${errorCode}: ${errorMessage}`);
        }
    }

    /**
     * Connecte l'utilisateur à l'aide de son adresse email et de son mot de passe
     * @param {string} email - L'adresse email de l'utilisateur
     * @param {string} password - Le mot de passe de l'utilisateur
     * @returns {Object} - L'objet utilisateur Firebase
     */
    async signInWithEmailAndPassword(email, password) {
        try {
            const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
            return userCredential.user;
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`${errorCode}: ${errorMessage}`);
        }
    }

    /**
     * Connecte l'utilisateur en utilisant le popup Google Auth
     * @returns {Object} - L'objet utilisateur Firebase
     */
    async signInWithGoogle() {
        try {
            const result = await signInWithPopup(this.auth, this.provider);
            const credential = GoogleAuthProvider.credential(result.credential);
            const user = result.user;
            return { user, credential };
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`${errorCode}: ${errorMessage}`);
        }
    }

    /**
     * Déconnecte l'utilisateur courant
     */
    async signOut() {
        try {
            await signOut(this.auth);
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`${errorCode}: ${errorMessage}`);
        }
    }

    /**
     * Envoie un email de réinitialisation du mot de passe pour l'adresse email fournie
     * @param {string} email - L'adresse email de l'utilisateur
     */
    async sendPasswordResetEmail(email) {
        try {
            await sendPasswordResetEmail(this.auth, email);
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`${errorCode}: ${errorMessage}`);
        }
    }

    /**
     * Retourne l'objet DocumentReference pour un utilisateur donné
     * @param {string} uid - L'identifiant utilisateur Firebase UID
     * @returns {Object} - L'objet DocumentReference pour l'utilisateur
     */
    user(uid) {
        return doc(this.db, `users/${uid}`);
    }
}

export default Firebase;

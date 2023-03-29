import { useState, useContext } from 'react';
// import { getAuth, useAuthEmulator } from "firebase/auth";

import GoogleButton from 'react-google-button'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { redirect } from "react-router-dom";
import { FirebaseContext } from '../context';

// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const loader = async () => {
//     const user = await getUser();
//     if (!user) {
//         return redirect("/login");
//     }
// };

// const auth = getAuth();
// const auth = getAuth();
const provider = new GoogleAuthProvider();
const SignIn = (props) => {
    const firebase = useContext(FirebaseContext);
    // const { googleSignIn } = UserAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // useAuthEmulator(getAuth(), "http://localhost:3000", { disableWarnings: true });

    const handleGoogleSignIn = async () => {
        firebase.signInWithGoogle();

        // signInWithPopup(auth, provider)
        //     .then((result) => {
        //         // This gives you a Google Access Token. You can use it to access the Google API.
        //         const credential = GoogleAuthProvider.credentialFromResult(result);
        //         const token = credential.accessToken;
        //         // The signed-in user info.
        //         const user = result.user;
        //         // IdP data available using getAdditionalUserInfo(result)
        //         // ...
        //     }).catch((error) => {
        //         // Handle Errors here.
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //         // The email of the user's account used.
        //         const email = error.customData.email;
        //         // The AuthCredential type that was used.
        //         const credential = GoogleAuthProvider.credentialFromError(error);
        //         // ...
        //     });
    }

    const handleSubmit = e => {
        e.preventDefault();
        firebase.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log(userCredential);
            const email = userCredential.email;
            
            console.log(email);
            props.history.push('/welcome');
            if (email) {
                // history.push("/welcome");
            }
        })
        .catch((error ) => {
            console.log(error.code);
            console.log(error.message);
        })
    }

    return (
        // <div style={{ textAlign: 'center' }}>
        //     <h1>SignIn</h1>

        // </div>
        <div className='container w-50 '>

            <main className="form-signin w-100 m-auto">
                <form onSubmit={handleSubmit}>
                    {/* <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput"  onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" onChange={(e) => setPassword(e.target.value)} />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                   
                    <button className="w-100 btn btn-lg btn-primary mb-4" type="submit">Sign in</button>
                    <button className="w-100 btn btn-lg btn-primary mb-4" onClick={handleGoogleSignIn}>Google</button>

                    {/* <GoogleButton onClick={handleGoogleSignIn}/> */}

                </form>
            </main>
        </div>

    )
}

export default SignIn;
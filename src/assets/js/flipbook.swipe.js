/* v 3.17
author http://codecanyon.net/user/creativeinteractivemedia/portfolio?ref=creativeinteractivemedia
*/

var FLIPBOOK = FLIPBOOK || {};

FLIPBOOK.BookSwipe = function(el, wrapper, main, options) {

    this.options = options
    this.main = main
    this.singlePage = options.singlePageMode
    if(this.singlePage) this.view = 1;
    this.pageWidth = this.options.pageWidth
    this.pageHeight = this.options.pageHeight
    this.slides = []
    this.pagesArr = []
    this.leftPage = 0
    this.rightPage = 0
    this.rotation = 0

    this.prevPageEnabled = false

    this.setRightIndex(options.rightToLeft ? options.pages.length : 0)
    this.currentSlide = 0
    this.flipping = false;

    this.wrapper = wrapper

    this.$wrapper = jQuery(wrapper)

    this.scroller = el
    this.$scroller = jQuery(this.scroller).removeClass('book').addClass('flipbook-carousel-scroller')

    this.iscroll = new IScroll(this.wrapper, {

        // momentum: true,
        snap: true,
        snapSpeed: 200 * this.options.pageFlipDuration,
        // snapSpeed: 500,
        // keyBindings: false,
        // hScrollbar: false
        // zoom: true,
        // mouseWheel: true,
        // wheelAction: 'zoom',

        freeScroll: true,

        scrollX: true,
        scrollY: false,

        // preventDefault: true,
        preventDefault: false,

        // disableTouch:true,
        eventPassthrough  : 'vertical'

        // HWCompositing:false,

        // mouseWheel: true,
        // wheelAction: 'zoom',
        // scrollbars: true
    });

    var self = this

    this.zoomDisabled = false

    this.iscroll.on("scrollStart", function() {

        self.zoomDisabled = true

    })

    this.iscroll.on("scrollEnd", function() {

        self.zoomDisabled = false

    })


    for (var i = 0; i < 3; i++) {

        var $slide = jQuery('<div class="flipbook-carousel-slide"><div class="slide-inner"/></div>"').appendTo(this.$scroller)
        this.slides.push($slide)

    }

    this.slides[0].iscroll = new IScroll(this.slides[0][0], {
          // scrollbars: true,
        zoom: true,
        scrollX: true,
        scrollY: true,
        freeScroll: true,
        keepInCenterV: true,
        keepInCenterH: true,
        preventDefault: false,
    })

    // this.slides[0].iscroll.refresh()

    this.slides[2].iscroll = new IScroll(this.slides[2][0], {
          // scrollbars: true,
        zoom: true,
        scrollX: true,
        scrollY: true,
        freeScroll: true,
        keepInCenterV: true,
        keepInCenterH: true,
        preventDefault: false,
    })

    // this.slides[2].iscroll.refresh()


    this.slides[1].iscroll = new IScroll(this.slides[1][0], {
        // scrollbars: true,
        zoom: true,
        scrollX: true,
        scrollY: true,
        freeScroll: true,
        keepInCenterV: true,
        keepInCenterH: true,
        // scrollbars: false,
        preventDefault: false,
        // preventDefault: true,
        // HWCompositing:false,
    })

    // this.slides[1].iscroll.refresh()

    for (var i = 0; i < 3; i++) {

        this.slides[i].iscroll.on("zoomEnd", function() {

            var scale = options.main.zoom
            this.options.eventPassthrough = scale > 1 ? '' : 'vertical'
            this.options.freeScroll = scale > 1
            this.refresh()

        })

    }


    this.resizeInnerSlides()

    var page

    var pageOptions = {
        rightToLeft: options.rightToLeft,
        numPages: options.numPages,
        pdfMode: options.pdfMode
    }

    for (var i = 0; i < options.numPages; i++) {

        page = new FLIPBOOK.PageSwipe(main, options, i, options.pages[i].src, options.pages[i].htmlContent)

        this.pagesArr.push(page)

        if (options.loadAllPages)
            page.load()
    }

    if(!options.cover){
        page = new FLIPBOOK.PageSwipe(main, options, options.numPages)
        this.pagesArr.push(page)
    }

    var self = this

    this.iscroll.on("scrollStart", function(e, a, b) {

        if(this.distX < 0){
           self.loadNextSpread()
        }else{
            self.loadPrevSpread()
        }
        return

        self.disablePan()
    })

    this.iscroll.on("scrollEnd", function() {

        var sliderPage = this.currentPage.pageX

        if(self.currentSlide == sliderPage)
            return

        if (self.singlePage) {

            if (sliderPage > self.currentSlide)

                self.setRightIndex(self.rightIndex + 1);

            else if (sliderPage < self.currentSlide)

                self.setRightIndex(self.rightIndex - 1);

        } else {

            if (sliderPage > self.currentSlide)

                self.setRightIndex(self.rightIndex + 2);

            else if (sliderPage < self.currentSlide)

                self.setRightIndex(self.rightIndex - 2);
        }

        self.currentSlide = sliderPage

        self.updateVisiblePages()

        self.flipping = false;

    })

    this.flipEnabled = true

    this.nextEnabled = true
    this.prevEnabled = true

    main.on("toolMove", function() {
        self.updateTool()
    })

    main.on("toolSelect", function() {
        self.updateTool()
    })

    main.on("updateTool", function() {
        self.updateTool()
    })

    main.on('pageLoaded', function(e){

    })

}


FLIPBOOK.BookSwipe.prototype = Object.create(FLIPBOOK.Book.prototype)

FLIPBOOK.BookSwipe.prototype.constructor = FLIPBOOK.BookSwipe

FLIPBOOK.BookSwipe.prototype.goToPage = function(value, instant) {

    if (!this.enabled)
        return

    if (!this.flipEnabled) return

    if (value > this.options.pages.length)
        value = this.options.pages.length

    if (this.singlePage || value % 2 != 0) 
        value--;

    if (isNaN(value) || value < 0)
        value = 0

    this.resetZoom()

    if (instant) {
        this.setRightIndex(value)
        this.updateVisiblePages()
        return
    }


    if (this.singlePage) {

        if (this.options.rightToLeft && !this.options.backCover && value < 1)
            value = 1

        if (value > this.rightIndex) {

            this.setSlidePages(this.currentSlide + 1, [value])
            this.setRightIndex(value - 1)
            this.nextPage(instant);

        } else if (value < this.rightIndex) {

            this.setSlidePages(this.currentSlide - 1, [value])
            this.setRightIndex(value + 1)
            this.prevPage(instant);

        }

    } else {

        if (this.options.rightToLeft && !this.options.backCover && value < 2)
            value = 2

        if (value > this.rightIndex) {

            if (value >= this.pagesArr.length) {

                this.setSlidePages(2, [value - 1, value])
                this.setRightIndex(value - 2)
                this.goToSlide(2, instant)

            } else {

                this.setSlidePages(this.currentSlide + 1, [value - 1, value])
                this.setRightIndex(value - 2)
                this.nextPage(instant);

            }

        } else if (value < this.rightIndex) {

            if (value == 0) {

                this.setRightIndex(value + 2)
                this.setSlidePages(0, [value])
                this.goToSlide(0, instant)

            } else {

                this.setRightIndex(value + 2)
                this.setSlidePages(this.currentSlide - 1, [value - 1, value])
                this.prevPage(instant);

            }

        }
    }

}

// FLIPBOOK.BookSwipe.prototype.getCurrentPageNumber = function() {
//     if(this.view == 1){
//         debugger
//         var ri
//         if(this.options.rightToLeft){
//             ri = this.options.pages.length - this.rightIndex
//         }else{
//             ri = this.rightIndex
//         }
//         return ri + 1
//     }
// }

FLIPBOOK.BookSwipe.prototype.setRightIndex = function(value) {

    this.rightIndex = value

}

FLIPBOOK.BookSwipe.prototype.nextPage = function(instant) {

   // if (!this.flipEnabled) return

    /*if (this.flipping) 
        return;*/

    if (this.currentSlide == 2)
        return

    this.flipping = true;

    this.goToSlide(this.currentSlide + 1, instant)

    this.loadNextSpread()

    /*if(this.mode == 1)
        this.rightIndex++;*/

}

FLIPBOOK.BookSwipe.prototype.prevPage = function(instant) {

  //  if (!this.flipEnabled) return

    /*if (this.flipping) 
        return;*/

    if (this.currentSlide == 0)
        return;

    this.flipping = true;

    this.goToSlide(this.currentSlide - 1, instant)

    this.loadPrevSpread()

    /*if(this.mode == 1)
        this.rightIndex--;*/

}

FLIPBOOK.BookSwipe.prototype.enablePrev = function(val) {

    this.prevEnabled = val

}

FLIPBOOK.BookSwipe.prototype.enableNext = function(val) {

    this.nextEnabled = val

}

// onPageUnloaded:function(index,size){

//     var pageIndex = index

//     if (this.options.rightToLeft)
//         pageIndex = this.options.pages.length - index - 1

//     this.pagesArr[pageIndex].unload()

// },

FLIPBOOK.BookSwipe.prototype.resetZoom = function() {

    return
    /* for (var i = 0; i < this.slides.length; i++) {
         if (this.slides[i].iscroll.scale !== 1)
             this.slides[i].iscroll.zoom(1, 0, 0, 0)
         this.slides[i].iscroll.refresh()
         // this.slides[i].iscroll.refresh()
     }*/

    if (this.slides[1].iscroll.scale !== 1)
        this.slides[1].iscroll.zoom(1, 0, 0, 0)
    this.slides[1].iscroll.refresh()
    // this.slides[i].iscroll.refresh()


    this.enableFlip()
}

FLIPBOOK.BookSwipe.prototype.setSlidePages = function(slide, pages) {

    var arr = []
    for (var i = 0; i < pages.length; i++) {
        if (pages[i]) 
            arr.push(pages[i].index)
    }

    if (this.slides[slide].pages) {

        if (arr.join("") === this.slides[slide].pages.join("")){
            // console.log(arr)
            // console.log(this.slides[slide].pages)
            return
        }

    }

    /*if(this.slides[slide].pages && (this.slides[slide].pages.join("") == pages.join(""))) 
        return;*/

    this.clearSlidePages(slide)

    var slideInner = this.slides[slide].find('.slide-inner')

    // slideInner.width(2 * this.options.pageTextureSize * this.options.pageWidth / this.options.pageHeight)

    for (var i = 0; i < pages.length; i++) {

        var pageIndex = pages[i].index

        if (this.pagesArr[pageIndex]) {

            slideInner.append(this.pagesArr[pageIndex].$wrapper)
            this.slides[slide].pages.push(pageIndex)

        }

    }

    this.resizeInnerSlides()

    if (this.slides[slide].iscroll)
        this.slides[slide].iscroll.refresh()

    // this.zoomTo(.25)
    // this.slides[slide].iscroll.refresh()

    // this.slides[slide].iscroll.zoom(.1, 0, 0, 0);

    // this.slides[slide].show()

}

FLIPBOOK.BookSwipe.prototype.updateTool = function() {

    switch (this.options.main.tool) {

        case "toolSelect":
            this.disableFlip()
            this.disablePan()
            jQuery(".flipbook-textLayer").css("pointer-events", "auto").removeClass(".flipbook-noselect")
            break;

        case "toolMove":
            this.onZoom(this.options.main.zoom)
            jQuery(".flipbook-textLayer").css("pointer-events", "none").addClass(".flipbook-noselect")
            break;
    }

}

FLIPBOOK.BookSwipe.prototype.clearSlidePages = function(slide) {

    this.slides[slide].find('.slide-inner').empty()
    this.slides[slide].pages = []

    // var test = jQuery("<p>SLIDE</p>")

    // this.slides[slide].find('.slide-inner').append(test)
    // this.slides[slide].hide()

}

FLIPBOOK.BookSwipe.prototype.setZoomPages = function(pages) {

    if (this.$zoomScroller.pages && (this.$zoomScroller.pages.join("") == pages.join("")))
        return;

    this.$zoomScroller.empty()
    this.$zoomScroller.pages = []

    for (var i = 0; i < pages.length; i++) {

        var pageIndex = pages[i]

        if (this.pagesArr[pageIndex]) {

            this.$zoomScroller.append(this.pagesArr[pageIndex].$wrapper)
            this.$zoomScroller.pages.push(pageIndex)

        }

    }
}

FLIPBOOK.BookSwipe.prototype.resizeZoomPages = function(pages, scale) {

    var h = this.$wrapper.height() * scale
    var pdfSize = parseInt(h / 500) * 500 + 500
    if (pdfSize < 500) pdfSize = 500
    if (pdfSize > 2000) pdfSize = 2000

    // this.options.pageTextureSize = pdfSize

    for (var i = 0; i < pages.length; i++) {

        var pageIndex = pages[i]

        if (this.pagesArr[pageIndex]) {
            /*this.pagesArr[pageIndex].$wrapper.height(this.zoomScroll.scrollerHeight)
            this.pagesArr[pageIndex].$wrapper.width(this.zoomScroll.scrollerWidth/2)*/
            //this.pagesArr[pageIndex].pageTextureSize = pdfSize
            this.pagesArr[pageIndex].load()

        }

    }
}

FLIPBOOK.BookSwipe.prototype.getCurrentSlidePages = function() {

    if (this.singlePage)

        return [this.rightIndex];

    else
        return [this.rightIndex - 1, this.rightIndex];


}

FLIPBOOK.BookSwipe.prototype.clearSlide = function(slide) {

    this.slides[slide].empty()

}

FLIPBOOK.BookSwipe.prototype.hasPage = function(slide, page) {


}

FLIPBOOK.BookSwipe.prototype.loadNextSpread = function() {

    var self = this
    var toLoad
    var main = this.options.main

    var index = this.rightIndex

    if(this.options.rightToLeft && !this.options.backCover) index--;

    var next = this.pagesArr[index + 1]
    if(next) next.load()
    if(!this.singlePage){
        var afterNext = this.pagesArr[index + 2]
        if(afterNext) afterNext.load()
    }

}

FLIPBOOK.BookSwipe.prototype.loadPrevSpread = function() {

    var self = this
    var toLoad
    var main = this.options.main

    var index = this.rightIndex

    if(this.options.rightToLeft && !this.options.backCover) index--;

    if(this.singlePage){
        var prev = this.pagesArr[index - 1]
        if(prev) prev.load()
    }else{
        var prev = this.pagesArr[index - 2]
        if(prev) prev.load()
        var beforePrev = this.pagesArr[index - 3]
        if(beforePrev) beforePrev.load()
    }

}

FLIPBOOK.BookSwipe.prototype.loadVisiblePages = function() {

    var self = this
    var toLoad
    var main = this.options.main

    var index = this.rightIndex

    if(this.options.rightToLeft && !this.options.backCover) index--;

    var right = this.pagesArr[index]
    var left = this.pagesArr[index - 1]
    var next = this.pagesArr[index + 1]
    var afterNext = this.pagesArr[index + 2]
    var prev = this.pagesArr[index - 2]
    var beforePrev = this.pagesArr[index - 3]

    if(this.singlePage){

        if(right){

            right.load(function() {

                main.setLoadingProgress(1)
                if (left) left.load(null, true)
                if (next) next.load(null, true)

            })

        }else if(left){
            left.load()
        }



    }else{
        if (left) {

            left.load(function() {

                if (right) {
                    right.load(function() {

                        main.setLoadingProgress(1)
                        if (prev) prev.load(null, true)
                        if (beforePrev) beforePrev.load(null, true)
                        if (next) next.load(null, true)
                        if (afterNext) afterNext.load(null, true)

                    })
                } else {

                    main.setLoadingProgress(1)
                    if (prev) prev.load(null, true)

                    if (beforePrev) beforePrev.load(null, true)
                }

            })
        } else {

            if (right) {

                right.load(function() {

                    main.setLoadingProgress(1)
                    if (next) next.load(null, true)
                    if (afterNext) afterNext.load(null, true)

                })
            }

        }
    }

}

FLIPBOOK.BookSwipe.prototype.updateVisiblePages = function() {

    if(this.visiblePagesRightIndex === this.rightIndex)
        return;

    this.visiblePagesRightIndex = this.rightIndex


    var self = this
    var toLoad
    var main = this.options.main

    var index = this.rightIndex

    if(this.options.rightToLeft && !this.options.backCover) index--;

    var right = this.pagesArr[index]
    var left = this.pagesArr[index - 1]
    var next = this.pagesArr[index + 1]
    var afterNext = this.pagesArr[index + 2]
    var prev = this.pagesArr[index - 2]
    var beforePrev = this.pagesArr[index - 3]

    if(next) next.hideHTML()
    if(afterNext) afterNext.hideHTML()
    if(prev) prev.hideHTML()
    if(beforePrev) beforePrev.hideHTML()

    if (this.singlePage) {

        right.startHTML()

       if(!left){
            //cover
            this.setSlidePages(0, [right])
  
            if(next)
                this.setSlidePages(1, [next])
            else
                this.clearSlidePages(1)
            this.goToSlide(0,true)

            this.clearSlidePages(2)

        }else{

           if(next){

                this.setSlidePages(1, [right])
                if(left) this.setSlidePages(0, [left])
                this.setSlidePages(2, [next])
                this.goToSlide(1,true)

           }else{
                if(right) this.setSlidePages(2, [right])
                if(left) this.setSlidePages(1, [left])
                this.goToSlide(2,true)

                this.clearSlidePages(0)

           }
            
        }

        if(left) left.hideHTML()


    } else {

        if(!left){

            right.startHTML()
            //cover
            this.setSlidePages(0, [right])

            if(afterNext)
                this.setSlidePages(1, [next, afterNext])
            else
                this.setSlidePages(1, [next])

            this.goToSlide(0,true)

            this.clearSlidePages(2)

        }else{

            left.startHTML()

            if(right){

                right.startHTML()

                //L R

                if(!next){

                    this.setSlidePages(2, [left, right])

                    if(beforePrev)
                        this.setSlidePages(1, [beforePrev, prev])
                    else
                        this.setSlidePages(1, [prev])

                    this.goToSlide(2,true)

                    this.clearSlidePages(0)

                }else{

                    if(prev && !(this.rightIndex == 2 && !this.options.cover)){

                        this.setSlidePages(1, [left, right])

                        if(beforePrev)
                            this.setSlidePages(0, [beforePrev, prev])
                        else
                            this.setSlidePages(0, [prev])

                        if(afterNext)
                            this.setSlidePages(2, [next, afterNext])
                    else
                        this.setSlidePages(2, [next])

                        this.goToSlide(1,true)

                    }else{
                        this.setSlidePages(0, [left, right])

                        if(afterNext)
                            this.setSlidePages(1, [next, afterNext])
                        else
                            this.setSlidePages(1, [next])

                        this.clearSlidePages(2)
                    }


                    


                }
                
            }else{
                this.setSlidePages(2, [left])

                if(beforePrev)
                    this.setSlidePages(1, [beforePrev, prev])
                else
                    this.setSlidePages(1, [prev])

                this.goToSlide(2,true)
                this.clearSlidePages(0)

            }
        }

    }

    this.loadVisiblePages()

    this.flippedleft =  (this.rightIndex + this.rightIndex % 2) / 2
    this.flippedright = this.options.pages.length / 2 - this.flippedleft

    this.options.main.turnPageComplete()

}

FLIPBOOK.BookSwipe.prototype.loadPage = function(index) {

    if (this.pagesArr[index])
        this.pagesArr[index].load()

}

FLIPBOOK.BookSwipe.prototype.hidePage = function(index) {

}

FLIPBOOK.BookSwipe.prototype.showPage = function(index) {

}

FLIPBOOK.BookSwipe.prototype.disable = function() {

    this.enabled = false

}

FLIPBOOK.BookSwipe.prototype.enable = function() {

    this.enabled = true
    this.onResize()

}

FLIPBOOK.BookSwipe.prototype.resize = function() {

}

FLIPBOOK.BookSwipe.prototype.onResize = function() {

    var w = this.$wrapper.width()
    var h = this.$wrapper.height()

    if (w == 0 || h == 0) return;

    if(this.w === w && this.h === h)
        return;

    this.w = w
    this.h = h

    var pw = this.pageWidth
    var ph = this.pageHeight

    var portrait = 2 * this.options.zoomMin * pw / ph > w / h
    var doublePage = !this.options.singlePageMode && (!this.options.responsiveView || (w > this.options.responsiveViewTreshold || !portrait || w / h >= this.options.responsiveViewRatio ))
     //console.log("doublePage:", doublePage)
    var bw = doublePage ? 2*pw : pw
    var bh = ph
    this.bw = bw
    this.bh = bh

    var scale
    if (h / w > bh / bw) {
        //fit to width
        scale = (bh / bw) * w / this.options.pageHeight
    } else {
        scale = h / this.options.pageHeight
    }

    var spaceBetweenSlides = 0

    for (var i = 0; i < this.slides.length; i++) {

        this.slides[i].width(w + spaceBetweenSlides).height(h)
        this.slides[i].css("left", Number(i * w + i * spaceBetweenSlides) + "px").height(h)

        if (this.slides[i].iscroll) {

            this.slides[i].iscroll.options.zoomMin = this.options.zoomMin * scale
            this.slides[i].iscroll.options.zoomMax = this.options.zoomMax * scale
            this.slides[i].iscroll.refresh()
        }

    }

    this.$scroller.width(this.$scroller.children().length * (w+spaceBetweenSlides))
    this.iscroll.refresh()

    //var portrait = bw / bh > w / h && w < this.options.responsiveViewTreshold && this.options.responsiveView
    // var portrait = 2 * this.options.zoomMin * this.pageWidth / this.pageHeight > w / h
    // var pw, ph

    // if (portrait) {
    //     pw = w
    //     ph = parseInt(w * this.pageHeight / this.pageWidth)
    // } else {
    //     ph = h
    //     pw = parseInt(h * this.pageWidth / this.pageHeight)
    // }

    if ((!doublePage || this.options.singlePageMode) && !this.singlePage) {

        // console.log("single page mode")

        if (this.rightIndex % 2 == 0 && this.rightIndex > 0)
            this.setRightIndex(this.rightIndex - 1);

        this.singlePage = true
        this.view = 1

        this.resizeInnerSlides()

    } else if (doublePage && !this.options.singlePageMode && this.singlePage) {

        // console.log("double page mode")


        if (this.rightIndex % 2 != 0)
            this.setRightIndex(this.rightIndex + 1);

        this.singlePage = false
        this.view = 2

        this.resizeInnerSlides()

    }

    this.updateVisiblePages()


}

FLIPBOOK.BookSwipe.prototype.isFocusedRight = function(){
    return this.rightIndex % 2 == 0
}

FLIPBOOK.BookSwipe.prototype.isFocusedLeft = function(){
    return this.rightIndex % 2 == 1
}

FLIPBOOK.BookSwipe.prototype.resizeInnerSlides = function() {
    var pw = this.options.pageHeight * this.pageWidth / this.pageHeight

    if(this.rotation == 90 || this.rotation == 270)
        pw = this.options.pageHeight * this.pageHeight / this.pageWidth

    var sw = this.singlePage ? pw : 2 * pw

    // debugger
    for (var i = 0; i < 3; i++) {
        sw = this.slides[i].pages && this.slides[i].pages.length == 1 ? pw : 2 * pw
        this.slides[i].find(".slide-inner").width(sw)
    }
}

FLIPBOOK.BookSwipe.prototype.resizeInnerSlide = function(slide) {

    var pw = this.options.pageHeight * this.pageWidth / this.pageHeight

    if (this.slides[slide].pages.length == 1)
        this.slides[slide].find(".slide-inner").width(pw)
    else
        this.slides[slide].find(".slide-inner").width(pw)

}


FLIPBOOK.BookSwipe.prototype.goToSlide = function(slideIndex, instant) {

    if(this.iscroll.currentPage.pageX == slideIndex)
        return;

    this.onResize()

    var time = instant ? 0 : 300 * this.options.pageFlipDuration
    var slide = this.slides[slideIndex]

    if(slide.pages && slide.pages[0])
        this.pagesArr[slide.pages[0]].updateHtmlContent()

    if (this.iscroll.pages.length > 0)
        this.iscroll.goToPage(slideIndex, 0, time)

    if (instant)
        this.currentSlide = slideIndex

    this.zoomTo(this.options.zoomMin)

}

FLIPBOOK.BookSwipe.prototype.getCurrentSlide = function() {

    return this.currentSlide

}

FLIPBOOK.BookSwipe.prototype.zoomIn = function(value, time, e) {

    if (e && e.type === 'mousewheel')
        return
    this.zoomTo(value)

}

FLIPBOOK.BookSwipe.prototype.zoomTo = function(zoom, time, x, y) {

    if (!this.enabled || this.zoomDisabled)
        return

    var x = x || 0
    var y = y || 0
    var time = time || 0

    if (zoom > 1) {
        this.disableFlip()
    }

    if (w == 0 || h == 0) return;


    var m = this.main,
        w = m.wrapperW,
        h = m.wrapperH,
        bw = m.bookW,
        bh = m.bookH,
        pw = m.pageW,
        ph = m.pageH,
        r1 = w / h,
        r2 = pw / ph

    

    var self = this

    function fitToHeight() {
        // console.log('fit to height')

        self.ratio = h / bh;
        fit();

    }

    function fitToWidth() {
        // console.log('fit to width')

        self.ratio = self.view == 1 ? w / pw : w / bw;
        fit();

    }

    function fit() {


        for (var i = 0; i < 3; i++) {

        if (self.slides[i].iscroll){

                self.slides[i].iscroll.options.zoomMin = self.ratio * self.options.zoomMin;
                self.slides[i].iscroll.options.zoomMax = self.ratio * self.options.zoomMax;
                
                self.slides[i].iscroll.zoom(self.ratio * zoom, x, y, 0);

            }

        }

    }

    var s = Math.min(this.zoom, 1)

    var zoomMin = Number(this.options.zoomMin)

    // var sp = 1

    if (!this.options.singlePageMode && this.options.responsiveView && w <= this.options.responsiveViewTreshold && r1 < 2 * r2 && r1 < this.options.responsiveViewRatio) {

        this.view = 1

        if (w / h > pw / ph)
            fitToHeight();
        else
            fitToWidth();


    } else {

        this.view = 2

        if (w / h >= bw / bh)
            fitToHeight();
        else
            fitToWidth();


    }

    this.zoom = zoom

    this.onZoom(zoom)

    // this.loadVisiblePages()

    // if (this.slides[this.currentSlide].iscroll)
    //     this.slides[this.currentSlide].iscroll.zoom(zoom, x, y, time);


}

FLIPBOOK.BookSwipe.prototype.zoomOut = function(value) {

    this.zoomTo(value)

}

FLIPBOOK.BookSwipe.prototype.move = function(direction) {

    if(this.zoom <= 1) return;
    
    for (var i = 0; i < 3; i++) {

        var iscroll = this.slides[i].iscroll
        var offset2 = 0

        if (iscroll){

            var posX = iscroll.x, posY = iscroll.y;
            var offset = 20 * this.zoom
            switch(direction){
                case 'left': posX += offset; break;
                case 'right': posX -= offset; break;
                case 'up': posY += offset; break;
                case 'down': posY -= offset; break;
            }

            if(posX > 0) posX = offset2;
            if(posX < iscroll.maxScrollX) posX = iscroll.maxScrollX - offset2;
            if(posY > 0) posY = offset2;
            if(posY < iscroll.maxScrollY) posY = iscroll.maxScrollY - offset2;

            iscroll.scrollTo(posX, posY, 0)
        }

    }

}

FLIPBOOK.BookSwipe.prototype.onZoom = function(zoom) {

    if(this.options.main.tool == "toolSelect"){
        this.disableFlip()
        this.disablePan()
    } else if (zoom > 1) {
        this.disableFlip()
        this.enablePan()
    } else {
        this.enableFlip()
        // this.disablePan()
    }

    this.options.main.onZoom(zoom)

}

FLIPBOOK.BookSwipe.prototype.rotateLeft =function(){

    this.rotation = (this.rotation + 360 - 90)%360

    for (var i = 0; i < this.pagesArr.length; i++) {
        var page = this.pagesArr[i]
        page.setRotation(this.rotation)
    }

    this.resizeInnerSlides()
    this.onResize()

}

FLIPBOOK.BookSwipe.prototype.rotateRight = function(){

    this.rotation = (this.rotation + 360 + 90)%360

    for (var i = 0; i < this.pagesArr.length; i++) {
        var page = this.pagesArr[i]
        page.setRotation(this.rotation)
    }

    this.resizeInnerSlides()
    this.onResize()

}

FLIPBOOK.BookSwipe.prototype.enableAutoplay = function(val) {

    // this.main.enableAutoplay(val)

}

FLIPBOOK.BookSwipe.prototype.updateCurrentPage = function(val) {


}

FLIPBOOK.BookSwipe.prototype.enable = function() {
    this.enabled = true
}

FLIPBOOK.BookSwipe.prototype.disable = function() {
    this.enabled = false
}

FLIPBOOK.BookSwipe.prototype.onSwipe = function(event, phase, direction, distance, duration, fingerCount, fingerData) {
    // console.log(fingerCount, fingerData)
    /*if(e.type == 'touchend' && !direction)
        this.main.toggleMenu()*/

    if (phase == 'start')
        return;
    if (direction == 'up' || direction == 'down')
        return


    // if(fingerCount > 1){
    //     this.disablePan()
    // }
}

FLIPBOOK.BookSwipe.prototype.onPageUnloaded = function(i, size) {

    var index = this.options.rightToLeft ? this.options.numPages - i - 1 : i;

    // this.pagesArr[index].onPageUnloaded(size)
    this.pagesArr[index].unload()
}

FLIPBOOK.BookSwipe.prototype.disableFlip = function() {
    
    this.flipEnabled = false
    this.iscroll.disable()
}

FLIPBOOK.BookSwipe.prototype.enableFlip = function() {

    if(this.options.numPages == 1){
        this.disableFlip()
        return
    }
        
    this.flipEnabled = true
    this.iscroll.enable()
}

FLIPBOOK.BookSwipe.prototype.enablePan = function() {
    
    if (this.slides[0].iscroll)
        this.slides[0].iscroll.enable()
    if (this.slides[1].iscroll)
        this.slides[1].iscroll.enable()
    if (this.slides[2].iscroll)
        this.slides[2].iscroll.enable()
}

FLIPBOOK.BookSwipe.prototype.disablePan = function() {
    
    if (this.slides[0].iscroll)
        this.slides[0].iscroll.disable()
    if (this.slides[1].iscroll)
        this.slides[1].iscroll.disable()
    if (this.slides[2].iscroll)
        this.slides[2].iscroll.disable()
}


FLIPBOOK.PageSwipe = function(main, options, index, texture, html) {

    this.rotation = 0
    this.index = index
    this.options = options
    this.texture = texture
    this.html = html
    this.index = index
    this.$wrapper = jQuery('<div>').addClass('flipbook-carousel-page')
    this.wrapper = this.$wrapper[0]
    this.main = main

    this.$inner = jQuery('<div>').appendTo(this.$wrapper).addClass('flipbook-carousel-page-inner')
    this.$bg = jQuery('<div>').appendTo(this.$inner).addClass('flipbook-carousel-page-bg')
    this.$html = jQuery('<div>').appendTo(this.$inner).addClass('flipbook-page3-html')
    this.$html[0].style.width = (1000 * this.options.pageWidth / this.options.pageHeight) + 'px'

    this.$html[0].style.transform = 'scale(' + (this.options.pageHeight / 1000) + ') translateZ(0)'

    if (this.options.doublePage) {

        if (this.index % 2 == 0 && this.index > 0)
            this.$html[0].style.left = '-100%'
        else
            this.$html[0].style.left = '0'

    }

    if(options.pagePreloader)
        this.$preloader = jQuery('<img src="' + options.pagePreloader + '" class="flipbook-page-preloader-image">').appendTo(this.$inner)
    else
        this.$preloader = jQuery('<img src="' + options.assets.spinner + '" class="flipbook-page-preloader">').appendTo(this.$inner)

    this.setSize(this.pw, this.ph)

}

FLIPBOOK.PageSwipe.prototype = {

    load: function(callback, thumb) {

        // var size = thumb ? this.options.thumbTextureSize : this.options.pageTextureSize
        var size = this.options.pageTextureSize

        if (this.size >= size) {
            if(!thumb) this.loadHTML()
            if (callback) callback.call(this)
            return
        }

        this.size = size;
        
        var self = this

        var index = this.options.rightToLeft ? this.options.numPages - this.index - 1 : this.index

        this.options.main.loadPage(index, size, function(page) {

            page = page || {}

            if(page && page.image){
                // var img = document.createElement('img')
                // img.src = page.image.src
                var img = page.image[size] || page.image
                img.classList.add('page-carousel-img')
                // self.$img = jQuery(img).addClass("page-carousel-img")

                // var imgW = img.naturalHeight
                // var imgH = img.naturalHeight
                // var pw = self.options.pageWidth
                // var ph = self.options.pageHeight
                // var scaleY = ph / imgH
                // var translateX = 0

                if(self.index % 2 == 0 && (self.options.pages[index].side == 'left' || self.options.pages[index].side == 'right')){
                    img = img.clone                    
                }

                self.$bg[0].appendChild(img)

                if (self.options.doublePage && self.index > 0 && self.index % 2 == 0) {

                    img.style.left = '-100%'

                }

                if (self.options.doublePage) {

                    if (self.index == 0 || (self.index == (self.options.pages.length - 1) && self.options.backCover))
                        img.style.width = '100%'
                    else
                        img.style.width = '200%'

                } else
                    img.style.width = '100%'

                self.$preloader.remove()

            }

            self.setRotation()

            if(!thumb){

                self.loadHTML()

            }

            if (callback) callback.call(self)

        })
    },

    loadHTML: function(){

        var self = this

        var index = this.options.rightToLeft ? this.options.numPages - this.index - 1 : this.index

        if(this.htmlContent) 
            this.updateHtmlContent()
        else
            this.options.main.loadPageHTML(index, function(html) {
                self.htmlContent = html
                self.updateHtmlContent()
            })

    },

    hideHTML: function(){
        if(this.htmlContentVisible){
            this.$html.empty()
            this.wrapper.querySelectorAll(".flipbook-page-item").forEach(function(item){
                // if(item.nodeName == 'VIDEO' || item.nodeName == 'AUDIO')
                //     item.pause()
            })
            this.htmlContentVisible = false

            this.main.trigger('hidepagehtml', {page:this})
        }
        
    },

    startHTML: function(){

        this.wrapper.querySelectorAll(".flipbook-page-item").forEach(function(item){
            if((item.nodeName == 'VIDEO' || item.nodeName == 'AUDIO') && item.autoplay){
                if(item.readyState < 4)
                    item.oncanplay = function(){this.play()}
                else
                    item.play()
            }
        })

    },

    unload: function() {

        this.pageSize = 0
        this.size = 0

        this.$preloader.appendTo(this.$inner)
        
    },

    dispose: function() {

        if (this.pageSize) {

            this.pageSize = null
            this.$bg.empty()

        }

    },

    setSize: function() {

        var w = this.options.pageWidth
        var h = this.options.pageHeight

        if(this.rotation == 0 || this.rotation == 180){
            this.$wrapper.width(w).height(h)
            this.pw = w
            this.ph = h
        }
        else{
            this.$wrapper.width(h).height(w)
            this.pw = h
            this.ph = w
        }
        
        this.updateHtmlContent()

    },

    setRotation: function(val) {

        this.setSize()

        if(this.options.doublePage)
            return

        if(typeof val != 'undefined')
            this.rotation = val
        if(this.$img){

              this.$img.css('transform', 'rotate('+ this.rotation + 'deg) translateZ(0)')
        if(this.rotation == 90 || this.rotation == 270)
            this.$img.width(this.$wrapper.height()).height(this.$wrapper.width())
        else
            this.$img.width(this.$wrapper.width()).height(this.$wrapper.height())
   

        }
       },

    updateHtmlContent: function() {

        var scale = this.ph / 1000
        var c = this.htmlContent

        if (c && !this.htmlContentVisible) {

            this.htmlContentVisible = true

            if(!this.$htmlContent) this.$htmlContent = jQuery(this.htmlContent)

            this.$html.empty().append(this.$htmlContent)

            this.main.trigger('updateTool')

            this.main.trigger('showpagehtml', {page:this})

        }

    }

}
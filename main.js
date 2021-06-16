$(document).ready(function () {
    var itemsMainDiv = ('.MultiCarousel');
    var itemsDiv = ('.MultiCarousel-inner');
    var itemWidth = "";

    $('.leftLst, .rightLst').click(function () {
        var condition = $(this).hasClass("leftLst");
        if (condition)
            click(0, this);
        else
            click(1, this)
    });

    ResCarouselSize();




    $(window).resize(function () {
        ResCarouselSize();
    });

    // this function define the size of the items
    function ResCarouselSize() {
        var incno = 0;
        var dataItems = ("data-items");
        var itemClass = ('.item');
        var id = 0;
        var btnParentSb = '';
        var itemsSplit = '';
        var sampwidth = $(itemsMainDiv).width();
        var bodyWidth = $('body').width();
        $(itemsDiv).each(function () {
            id = id + 1;
            var itemNumbers = $(this).find(itemClass).length;
            btnParentSb = $(this).parent().attr(dataItems);
            itemsSplit = btnParentSb.split(',');
            $(this).parent().attr("id", "MultiCarousel" + id);


            if (bodyWidth >= 0) {
                incno = itemsSplit[3];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 992) {
                incno = itemsSplit[2];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 768) {
                incno = itemsSplit[1];
                itemWidth = sampwidth / incno;
            }
            else {
                incno = itemsSplit[0];
                itemWidth = sampwidth / incno;
            }
            $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
            $(this).find(itemClass).each(function () {
                $(this).outerWidth(itemWidth);
            });

            $(".leftLst").addClass("over");
            $(".rightLst").removeClass("over");

        });
    }


    //this function used to move the items
    function ResCarousel(e, el, s) {
        var leftBtn = ('.leftLst');
        var rightBtn = ('.rightLst');
        var translateXval = '';
        var divStyle = $(el + ' ' + itemsDiv).css('transform');
        var values = divStyle.match(/-?[\d\.]+/g);
        var xds = Math.abs(values[4]);
        if (e == 0) {
            translateXval = parseInt(xds) - parseInt(itemWidth * s);
            $(el + ' ' + rightBtn).removeClass("over");

            if (translateXval <= itemWidth / 2) {
                translateXval = 0;
                $(el + ' ' + leftBtn).addClass("over");
            }
        }
        else if (e == 1) {
            var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
            translateXval = parseInt(xds) + parseInt(itemWidth * s);
            $(el + ' ' + leftBtn).removeClass("over");

            if (translateXval >= itemsCondition - itemWidth / 2) {
                translateXval = itemsCondition;
                $(el + ' ' + rightBtn).addClass("over");
            }
        }
        $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
    }

    //It is used to get some elements from btn
    function click(ell, ee) {
        var Parent = "#" + $(ee).parent().attr("id");
        var slide = $(Parent).attr("data-slide");
        ResCarousel(ell, Parent, slide);
    }

});





let div = document.querySelector("services-item")
let title1 = document.getElementById("title1")
let title2 = document.getElementById("title2")
let title3 = document.getElementById("title3")
let title4 = document.getElementById("title4")
// let image = document.getElementById("image")

function changeImage() {
    if (title1.innerText == "Place your order") {
        image.src = "./images/blog1.services1.png";
        div.classList.add("myclass")

    }
    if (title2.innerHTML == "Make your payment") {
        image.src = "./images/services2.png";
    }
    if (title3.innerText == "Get your order written") {
        image.src = "./images/blog1.jpeg";
    }
    if (title4.innerText == "Review and Download your complete order") {
        image.src = "./images/blog.jpeg";
    }
    image.src = ""
}

const image = document.getElementById('image')

function imageOne() {
    image.src = "./images/blog1.services1.png";
    // document.getElementById('message') 
    // .innerHTML="Hii! GeeksforGeeks people"; 
}

function imageTwo() {
    image.src = "./images/blog1.services2.png";
    // document.getElementById('message') 
    // .innerHTML="Hii! GeeksforGeeks people"; 
}

function imageTwo() {
    image.src = "./images/blog1.services3.png";
    // document.getElementById('message') 
    // .innerHTML="Hii! GeeksforGeeks people"; 
}

function imageThree() {
    image.src = "./images/blog1.services4.png";
    // document.getElementById('message') 
    // .innerHTML="Hii! GeeksforGeeks people"; 
}



// const form = () => {
//     let price = document.getElementById('fire')
//     let btns = document.querySelectorAll('.writting-cart');
//     btns.forEach(
//         btn => {

//         }
//     )
// }


// Navbar
(function () {
    const header = document.querySelector('.header');
    const icon = document.querySelector('.icon-container');
    icon.onclick = function () {
        header.classList.toggle('menu-open');
    }
}());
//   navbar


function handleClick() {
    this.value = (this.value == '+' ? '-' : '+');
    console.log('working');
}
document.getElementById('collapsible').onclick = handleClick;


$(function () {
    $('.left-sidebar').StickySidebar({
        // Settings
        additionalMarginTop: 40
    });
});
//  fixed sidebar



//end of fixed sidebar

//mobilenave


function myFun() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
// Video

let video = document.getElementById("html5_video_ota5fwbtmgn");

let stopButton = document.getElementById("html5-video-stop");

function stopVideo() {
    video.pause();
    video.currentTime = 0;
}

stopButton.addEventListener('click', stopVideo);

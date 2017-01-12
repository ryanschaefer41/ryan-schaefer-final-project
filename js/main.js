//linked test
var cavaliers = "LeBron James"
console.log(cavaliers);

// define function
function parallax() {
    initialImage("#pb0");
    initialImage("#pb1");
    initialImage("#pb2", 4);
    initialImage("#pb3");
    initialImage("#pb4");
    initialImage("#pb5")
}

function initialImage(image, factor) {
    // if factor is 0, null, or undefined, return 2
    factor = factor || 2;

    //get current position relative to document
    var offset = $(image).offset();
    // console.log(offset);
    var w = $(window);
    // console.log(w);

    //initialImage scrolls at half speed of boxes
    var positionX = (offset.left - w.scrollLeft()) / factor;
    var positionY = (offset.top - w.scrollTop()) / factor;
    // console.log(positionY);

    //parallax scrolling only vertically (add/change to positionX for horizantal)
    $(image).css('background-position', '50% ' + positionY + 'px');
    //$(element).css('background-position', posx + 'px '+posy + 'px');
}

$(document).ready(function () {
    parallax();
})

// unstick images on scroll
.scroll(function () {
    parallax();
});

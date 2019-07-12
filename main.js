setInterval(slide, 4000);
var links = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg','images/4.jpg','images/5.jpg','images/6.jpg','images/7.jpg','images/8.jpg','images/9.jpg','images/10.jpg','images/11.jpg','images/12.jpg'];
var index = 0;


function slide() {
    document.getElementById('slider').src = links[index];
    index = (index + 1) % links.length;
}

function change_slide(x) {
    index = index + x;
    if (index == -1)
        index = links.length - 1;
    if (index == links.length)
        index = 0;
    document.getElementById('slider').src = links[index];
}



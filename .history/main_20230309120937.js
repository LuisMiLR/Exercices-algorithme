let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc ==='images.firefox-icon.png') {
        myImage.setAttribute('src','image/firefox2.png');
    } else {
        myImage.setAttribute('src, image/firefox-icon.png');
    }
});
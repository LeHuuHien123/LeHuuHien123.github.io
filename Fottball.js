function changeChannel(url) {
    const iframe = document.getElementById('video-frame');
    const defaultImage = document.getElementById('default-image');

    iframe.src = url + "?autoplay=1&mute=0";
    defaultImage.style.display = "none";
    iframe.style.display = "block";
}
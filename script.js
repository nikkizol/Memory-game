const images = document.getElementsByClassName("front-image");

function loader() {
    document.addEventListener('DOMContentLoaded', function () {
        for (let i = 0; i < images.length; i++) {
            images[i].src = 'card-back.jpeg';
        }
    }, false);
}

loader();

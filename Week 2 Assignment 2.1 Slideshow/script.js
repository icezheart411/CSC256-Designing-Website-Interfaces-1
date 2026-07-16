// setting main JavaScript
// listing an array of images to set up for slideshow
let arrImages = [
    "./images/desktopMatrix.jpg",
    "./images/femaleMatrix.jpg",
    "./images/matrixCode.jpg",
    "./images/neoMatrix.jpg",
];
// setting the array index count value
let currImageIndex = 0;
// setting up function to show image slides
function showImage(index){
    let imgSlide = document.getElementById("imgSlide");
    imgSlide.src = arrImages[index];
}
// setting up function to show images by the previousImage(RED button)
function previousImage(){
    currImageIndex--;
    if (currImageIndex < 0){
        currImageIndex = arrImages.length - 1;
    }
    showImage(currImageIndex);
}
// setting up function to show images by the nextImage(BLUE button)
function nextImage(){
    currImageIndex++;
    if (currImageIndex == arrImages.length){
        currImageIndex = 0;
    }
    showImage(currImageIndex);
}
showImage(currImageIndex);
// setting up matrix and magicMatrix video values for the rabit hole
let button = document.getElementById("matrix");
let video = document.getElementById("magicMatrix");
// setup button function for surprise magicMatrix button - its magic
matrix.addEventListener("click", function () {

    magicMatrix.style.display = "block";
    magicMatrix.style.position = "fixed";
    magicMatrix.style.top = "0";
    magicMatrix.style.left = "0";
    magicMatrix.style.width = "100vw";
    magicMatrix.style.height = "100vh";
    magicMatrix.style.objectFit = "cover";
    magicMatrix.style.zIndex = "9999";

    magicMatrix.currentTime = 0;

    magicMatrix.play();

    setTimeout(function () {
        magicMatrix.pause();
        magicMatrix.currentTime = 0;
        magicMatrix.style.display = "none";
    }, 3000);

});



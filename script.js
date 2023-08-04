const imageContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");
const resetBtnEl = document.querySelector(".resetBtn");


// LOADS IMAGES ON PAGE LOAD
btnEl.addEventListener("click", () => {
    // console.log("clicked"); // test
    imageNum = 10;
    addNewImages();
});

// RESETS IMAGES ON PAGE LOAD
resetBtnEl.addEventListener("click", () => {
    // console.log("clicked"); // test
    imageContainerEl.innerHTML = "";
});

function addNewImages(){
    for(let i = 0; i < imageNum; i++){
        const newImageEl = document.createElement("img");
        newImageEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
        imageContainerEl.appendChild(newImageEl);
    }

}
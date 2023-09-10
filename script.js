const displayImage = document.querySelector('.display-image');

const apiURL = `https://api.slingacademy.com/v1/sample-data/photos`;

async function fetchData() {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    const imagesArr = data.photos;
    console.log(imagesArr)
    renderImages(imagesArr);
}

fetchData();

function renderImages(imagesArr) {
    const container = document.querySelector(".container");
    imagesArr.map((image) => {
        container.innerHTML +=
            `<div class="cards">
                <div class="card-img">
                    <img src=${image.url} alt="" onclick="show(event)">
                </div>
                <div class="card-caption">
                    <p>${image.title}</p>
                </div>
            </div>`
        // console.log(image);
    })

}
const closeImg = document.getElementById('closeImage');
const displayImg = document.getElementById('display');
closeImg.addEventListener("click", ()=>{
    // alert('cl')
    displayImage.style.display="none";
})

function show(e) {
    // alert('click')
    const {src} = e.target;
    console.dir(src)
    displayImage.style.display="block";
    // displayImage.setAttribute("display", "block");
    display.setAttribute("src", `${src}`);
}

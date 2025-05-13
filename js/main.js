const headerImageSources= [
    "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBhaXNhamV8ZW58MHx8MHx8fDA%3D",
    "https://img.freepik.com/foto-gratis/hermoso-camino-madera-que-impresionantes-arboles-coloridos-bosque_181624-5840.jpg?semt=ais_hybrid&w=740"
]
const galleryElements = [
    {
        src : "",
        alt : "",
        descripttion : ""
    }
]
const fragment = new DocumentFragment();
//Utility

const getRandomNumber = max => Math.floor(Math.random() * max);

const start = () => {
    const headerImg = document.querySelector("#headerImg");
    
    headerImg.setAttribute("src", headerImageSources[getRandomNumber(headerImageSources.length)]);
    console.log(headerImg);
    
    const gallery = document.querySelector("#gallery");
    console.log(gallery)
    galleryElements.forEach(element => {
        const container = document.createElement("div");
        container.classList.add("card");
        const image = document.createElement("img");
        container.append(image);
        fragment.append(container);
    })
    
    gallery.append(fragment);
}

start();

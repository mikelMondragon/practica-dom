const headerImageSources= [
    "../assets/images/banner/1.jpg",
    "../assets/images/banner/2.jpg",
    "../assets/images/banner/3.jpg",
    "../assets/images/banner/4.jpg",
    "../assets/images/banner/5.jpg",
    "../assets/images/banner/6.jpg",
    "../assets/images/banner/7.jpg",
    "../assets/images/banner/8.jpg"
]
const galleryElements = [
    {
        src :  "../assets/images/viajes/viajes-1.jpg",
        alt : "Viaje 1",
        description : "Destino increible a un sitio paradisiaco con un clima q buff"
    },
    {
        src :  "../assets/images/viajes/viajes-2.jpg",
        alt : "Viaje 2",
        description : "Destino increible a un sitio paradisiaco con un clima q buff"
    },
    {
        src :  "../assets/images/viajes/viajes-3.jpg",
        alt : "Viaje 3",
        description : "Destino increible a un sitio paradisiaco con un clima q buff"
    },
    {
        src :  "../assets/images/viajes/viajes-4.jpg",
        alt : "Viaje 4",
        description : "Destino increible a un sitio paradisiaco con un clima q buff"
    },
    {
        src :  "../assets/images/viajes/viajes-5.jpg",
        alt : "Viaje 5",
        description : "Destino increible a un sitio paradisiaco con un clima q buff"
    },
    {
        src :  "../assets/images/viajes/viajes-6.jpg",
        alt : "Viaje 6",
        description : "Destino increible a un sitio paradisiaco con un clima q buff"
    },
    {
        src :  "../assets/images/viajes/viajes-7.jpg",
        alt : "Viaje 7",
        description : "Destino increible a un sitio paradisiaco con un clima q buff"
    }
]
const cities = [
"Madrid",
"Barcelona",
"Valencia",
"Seville",
"Bilbao",
"Granada",
"Malaga",
"Palma de Mallorca",
"Alicante",
"Zaragoza"
];
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
        image.setAttribute("src", element.src);
        image.setAttribute("alt", element.alt);
        const title = document.createElement("h2");
        title.textContent = element.alt;
        const description = document.createElement("p");
        description.textContent = element.description;
        container.append(image, title, description);
        fragment.append(container);
    })
    gallery.append(fragment);

    const citySelector = document.querySelector("#citySelector");
    cities.forEach(element => {
        const option = document.createElement("option");
        option.value = element;
        option.textContent = element;
        fragment.append(option);
    })
    citySelector.append(fragment);

    
}

start();

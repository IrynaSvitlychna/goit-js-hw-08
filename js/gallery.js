const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];


const list = document.querySelector(".gallery");
list.classList.add("set");

const gallery = images.map((image) => {
  

    const liG = document.createElement("li");
    liG.classList.add("set-item");
    liG.classList.add("gallery-item");

  
    const aG = document.createElement("a");
    aG.classList.add("gallery-link");
    aG.href = images.original; 


    const imageG = document.createElement("img");
    imageG.classList.add("gallery-image");
    imageG.src = image.preview;
    imageG.alt = image.description;
    imageG.dataset.source = image.original;
    imageG.width = "360";
    imageG.height = "200";

    return list.appendChild(liG.appendChild(aG.appendChild(imageG)));
  }).join("");
  
  const ulGallery = document.querySelector("ul.gallery");
 
       ulGallery.addEventListener("click", (event) => {
        event.preventDefault();
        const imageLink = event.target.dataset;
        console.log(imageLink);

        if (event.target.nodeName !== "IMG") return;

          const window = basicLightbox.create(`
            <img width="1440" height="696" src="${imageLink}"  alt="${description}">`, {
              className: 'modal',
              onShow: () => {
                document.addEventListener("keydown", keyDwn)
              },
              onClose: () => {
                document.removeEventListener("keydown", keyDwn)
              }
            });
            window.show()
        });
        
        function keyDwn (event) {
if (event.key === "Escape") {
  window.close()
}
        }
     

   


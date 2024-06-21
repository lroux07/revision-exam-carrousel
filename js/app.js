const imagesCarrousel = document.querySelector('#imagesCarrousel');
const description = document.querySelector('#description');
const author = document.querySelector('#author');
const role = document.querySelector('#role');
const prev = document.querySelector('#prev'); 
const next = document.querySelector('#next');
let counter = 0;

const data = [
    {
        url: "/images/image-tanya.jpg",
        alt: "Tanya Sinclar - UX Engineer",
        description: "“La programmation m'intéressait depuis un certain temps mais je n’avais jamais sauté le pas. Ce cours a été une révélation pour moi. Il m’a permis d’obtenir le job de mes rêves.”",
        author: "Tanya Sinclar",
        role: "UX Engineer",
    },
    {
        url: "/images/image-john.jpg",
        alt: "Tanya Sinclar - UX Engineer",
        description: "“La programmation m'intéressait depuis un certain temps mais je n’avais jamais sauté le pas. Ce cours a été une révélation pour moi. Il m’a permis d’obtenir le job de mes rêves.”",
        author: "Tanya Sinclar",
        role: "UX Engineer",
    },
    {
        url: "https://www.programme-tv.net/imgre/fit/~1~tel~2022~05~04~69155d3e-e1fe-4eed-b6b2-69ef8439cfcc.jpeg/720x405/crop-from/top/quality/80/poulpe-dans-hot-ones-pourquoi-il-ne-pourrait-pas-tout-plaquer.jpg",
        alt: "Monsieur Poulpe - Developpeur Web",
        description: "“Wesh”",
        author: "Monsieur Poulpe",
        role: "Developpeur Web",
    },
    {
        url: "https://m.media-amazon.com/images/I/619vWUxIw9L._AC_UF1000,1000_QL80_.jpg",
        alt: "Michelle - Web Designe",
        description: "“La programmation m'intéressait depuis un certain temps mais je n’avais jamais sauté le pas. Ce cours a été une révélation pour moi. Il m’a permis d’obtenir le job de mes rêves.”",
        author: "Michelle",
        role: "Web Designe",
    }
];

function carrousel(e) {
    imagesCarrousel.src = `${data[e].url}`;

    description.textContent = `${data[e].description}`;
    author.textContent = `${data[e].author}`;
    role.textContent = `${data[e].role}`;
    
    next.addEventListener('click', () => {
        ++counter;
        
        if(counter === data[i].length) {
          counter = 0;
        }
      
        carrousel(counter);
    });
      
    prev.addEventListener('click', () => {
        if(counter === 0) {
          counter = data[i].length - 1;
        } else {
          --counter;
        }
      
        carrousel(counter);
    });
}
carrousel(counter);
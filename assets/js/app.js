const posts = [{
        title: "PDX Women in tech scholarships go all virtual",
        image: "zrEkb4ILymM",
        imageAlt: "Woman in holding a laptop with stickers",
        category: "React",
        cta: "Explore more",
        url: "https://google.com"
    },
    {
        title: "Women in tech face the challenge of not being taken seriously",
        image: "fch6vkbouCc",
        imageAlt: "Woman typing on a laptop with multiple screen",
        category: "Javascript",
        cta: "Find out more",
        url: "https://github.com"
    }
];

// query the DOM and create variables
const photo = document.querySelector(".card__image");
const category = document.querySelector(".card__category");
const title = document.querySelector(".card__title");
const cta = document.querySelector(".card__cta-link");
const dots = document.querySelector("#dots-list");

// when DOM is done loading
document.addEventListener("DOMContentLoaded", () => {

    // load the first item
    let index = 0;

    // call the setData function and pass index as a param
    setData(index);

    // create the dots
    createDots();

});

// FUNCTIONS
function setData(index) {
    // get the post with index 'index'
    const post = posts[index];

    // set the image url prefix and size
    const imgPrefix = "https://source.unsplash.com";
    const imgSize = "720x576";

    photo.style.background = `url(${imgPrefix}/${post.image}/${imgSize}) no-repeat center center`;
    category.innerText = post.category;
    title.innerText = post.title;
    cta.innerText = post.cta;
    cta.href = post.url;
}

// create the dots indicators
function createDots() {
    for (let i = 0; i < posts.length; i++) {
        const li = document.createElement("li");
        li.classList.add("dot");
        // add the active class to the first element
        if (i == 0) {
            li.classList.add("active");
        }
        li.setAttribute("data-index", i);
        dots.appendChild(li);
    }
}
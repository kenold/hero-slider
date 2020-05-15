const data = [{
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
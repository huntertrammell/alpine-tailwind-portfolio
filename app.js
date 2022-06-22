// Wait for alpine to be instantiated before processing
document.addEventListener("alpine:init", () => {
  Alpine.data("portfolio", () => ({
    title: "Hunter Trammell",
    projects: [
      {
        id: 1,
        img: "./assets/spense.png",
        imgAlt: "spense",
        title: "Spense.com",
        body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint facilis vero ipsum, officia doloremque reiciendis quia provident Tenetur dolorem nisi aut iste minima non error cum quod! Totam, quisquam molestiae?",
      },
      {
        id: 2,
        img: "./assets/yelp-camp.png",
        imgAlt: "yelp-camp",
        title: "YelpCamp.com",
        body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint facilis vero ipsum, officia doloremque reiciendis quia provident Tenetur dolorem nisi aut iste minima non error cum quod! Totam, quisquam molestiae?",
      },
    ],
    logos: [
      {
        id: 1,
        src: "./assets/logos/walmart.svg",
        alt: "walmart",
      },
      {
        id: 2,
        src: "./assets/logos/jp-morgan.svg",
        alt: "jp-morgan",
      },
      {
        id: 3,
        src: "./assets/logos/visa.svg",
        alt: "visa",
      },
      {
        id: 4,
        src: "./assets/logos/tinder.svg",
        alt: "tinder",
      },
      {
        id: 5,
        src: "./assets/logos/samsung.svg",
        alt: "samsung",
      },
      {
        id: 6,
        src: "./assets/logos/verizon.svg",
        alt: "verizon",
      },
    ],
    showNav: false,
    init() {
      console.log("hello world");
    },
    handleNav() {
      this.showNav = !this.showNav;
    },
  }));
});

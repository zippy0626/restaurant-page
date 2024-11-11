import heroBgImg from "/assets/pexels-pixabay-260922.jpg";

function hero() {
    const section = document.createElement("section");
    section.id = "hero";

    const image = document.createElement("img");
        image.src = heroBgImg;
        image.classList = "bg-img";
        image.draggable = false;
        image.alt = "background-image";

    const heroBox = document.createElement("div");
        heroBox.classList.add("hero-box");
        const headingText = document.createElement("p");
        headingText.classList.add("heading-text");
        headingText.textContent = "Welcome";
    const mainText = document.createElement("p");
    mainText.classList.add("main-text");
    mainText.textContent =
        "Step into a world of refined taste and sophistication. Our menu offers an exceptional selection of culinary masterpieces. Whether celebrating a special occasion or simply indulging in the finest, each visit promises a dining experience to remember.";
    const reserveBtn = document.createElement("button");
    reserveBtn.classList.add("book-reservation");
    reserveBtn.textContent = "Book Reservation";

    heroBox.append(headingText, mainText, reserveBtn);
    section.append(image, heroBox);

    return section;
}

export default hero;
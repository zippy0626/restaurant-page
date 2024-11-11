import aboutUsBgImg from "/assets/pexels-william-sutherland-3122031-11838971.jpg";

function aboutUs() {
    const section = document.createElement("section");
    section.id = "about-us";

    const img = document.createElement("img");
        img.src = aboutUsBgImg;
        img.alt = "background-img";
        img.classList.add("bg-img");
        img.draggable = false;

    const aboutUsBox = document.createElement("div");
        aboutUsBox.classList.add("about-us-box");

    const headingText = document.createElement("div");
        headingText.classList.add("heading-text");
        headingText.textContent = "About Us";

    aboutUsBox.appendChild(headingText);

    function createMainText(content) {
        const mainText = document.createElement("div");
        mainText.classList.add("main-text");
        mainText.textContent = content;
        return mainText;
    }

    const sampleText =
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore placeat magni, ducimus dolorem minus doloremque iste corrupti? Beatae omnis tempora optio porro corrupti corporis, eos iure voluptate nulla animi inventore.";

    for (let i = 0; i < 4; i++) {
        aboutUsBox.appendChild(createMainText(sampleText));
    }

    section.appendChild(img);
    section.appendChild(aboutUsBox);

    return section;
}

export default aboutUs;
import ourMenuBgImg from "/assets/pexels-william-sutherland-3122031-11838971.jpg";

let allMenuItems = {
    Appetizers: [
        { name: 'Oysters Rockefeller', price: 26 },
        { name: 'Ahi Tuna Tartare', price: 32 },
        { name: 'Truffle Mushroom Risotto', price: 28 },
        { name: 'Foie Gras with Fig Jam', price: 36 },
        { name: 'Burrata & Heirloom Tomatoes', price: 24 },
    ],
    Salads: [
        { name: 'Caesar Salad with Parmesan Crisp', price: 18 },
        { name: 'Lobster Cobb Salad', price: 38 },
        { name: 'Roasted Beet & Goat Cheese Salad', price: 22 },
    ],
    Entrees: [
        { name: 'Wagyu Beef Tenderloin', price: 85 },
        { name: 'Herb-Crusted Rack of Lamb', price: 76 },
        { name: 'Pan-Seared Sea Bass with Lemon Beurre Blanc', price: 68 },
        { name: 'Maine Lobster Linguine', price: 64 },
        { name: 'Roasted Duck Breast with Orange Reduction', price: 70 },
    ],
    Sides: [
        { name: 'Truffle Mashed Potatoes', price: 16 },
        { name: 'Grilled Asparagus with Parmesan', price: 14 },
        { name: 'Wild Mushroom Medley', price: 18 },
        { name: 'Creamed Spinach', price: 16 },
    ],
    Desserts: [
        { name: 'Vanilla Bean Crème Brûlée', price: 16 },
        { name: 'Chocolate Soufflé with Raspberry Coulis', price: 18 },
        { name: 'New York Cheesecake with Berry Compote', price: 14 },
        { name: 'Seasonal Fruit Tart', price: 15 },
    ],
    Cocktails: [
        { name: 'Manhattan Royale', price: 24 },
        { name: 'Old Fashioned with Aged Bourbon', price: 22 },
        { name: 'French 75 with Champagne', price: 26 },
        { name: 'Cucumber Martini', price: 20 },
    ],
}

function makeMenuList(menuCategory) {//an allMenuItem Property
    const menuList = document.createElement('ul');
        menuList.classList.add('menu-list');
    const menuHeading = document.createElement('h2');
        menuHeading.textContent = `${menuCategory}`;
    menuList.appendChild(menuHeading);

    for (const item of allMenuItems[menuCategory]) {
        const menuLine = document.createElement('li');
            menuLine.classList.add('menu-line');
            const menuItem = document.createElement('div');
                menuItem.classList.add('menu-item');
            const menuPrice = document.createElement('div');
                menuPrice.classList.add('menu-price');

        menuItem.textContent = item.name;
        menuPrice.textContent = item.price;

        menuLine.append(menuItem, menuPrice);
        menuList.appendChild(menuLine)
    }
    return menuList;
}

function ourMenu() {
    const section = document.createElement('section');
        section.id = "our-menu"
    const bgImg = document.createElement('img');
        bgImg.src = ourMenuBgImg;
        bgImg.alt="background-img";
        bgImg.classList.add("bg-img");
        bgImg.draggable= false;
    section.appendChild(bgImg);

    const ourMenuBoxDiv = document.createElement('div');
        ourMenuBoxDiv.classList.add('our-menu-box');//wrapper
    
    const headingText = document.createElement('div');
        headingText.classList.add("heading-text")
        headingText.textContent = "Our Menu";
    const menuSection = document.createElement('div');
        menuSection.classList.add("menu-section");

    ourMenuBoxDiv.append(headingText);

    //Cards
    for (let i = 0; i < 3; i++) {
        const menuCard = document.createElement('div');
            menuCard.classList.add('menu-card');
        const menuList1 = makeMenuList(Object.keys(allMenuItems)[i])
        const menuList2 = makeMenuList(Object.keys(allMenuItems)[i+1])

        menuCard.append(menuList1, menuList2);
        menuSection.appendChild(menuCard);
    };

    ourMenuBoxDiv.appendChild(menuSection)
    section.appendChild(ourMenuBoxDiv);

    return section;
}

export default ourMenu;
export { allMenuItems, makeMenuList };
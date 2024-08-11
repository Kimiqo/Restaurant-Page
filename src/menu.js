const homepageDiv = document.getElementById("content");

function menu_item(variable, imageLink, name, description, price) {
    variable.classList.add("card");

    let cardImg = document.createElement("div");
    cardImg.classList.add("card-img");
    cardImg.style.backgroundImage = `url(${imageLink})`;
    cardImg.style.backgroundSize = "cover";
    cardImg.style.backgroundPosition = "center";

    let cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");

    let item_name = document.createElement("p");
    item_name.classList.add("text-title");
    item_name.innerHTML = name;

    let item_desc = document.createElement("p");
    item_desc.classList.add("text-body");
    item_desc.innerHTML = description;

    cardInfo.appendChild(item_name);
    cardInfo.appendChild(item_desc);

    let cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");

    let priceElement = document.createElement("span");
    priceElement.classList.add("text-title");
    priceElement.innerHTML = `$${price}`; // Display the price

    cardFooter.appendChild(priceElement);

    variable.appendChild(cardImg);
    variable.appendChild(cardInfo);
    variable.appendChild(cardFooter);
}

function menu() {
    // Clear previous content
    homepageDiv.innerHTML = '';
    homepageDiv.style.display = "grid";
    homepageDiv.style.gridTemplate = "auto/1fr 1fr";
    homepageDiv.style.gap = "5px";
    
    // Menu item 1
    const item1 = document.createElement("div");
    const imageLink1 = "https://www.tasteandtellblog.com/wp-content/uploads/2023/07/Margherita-Pizza-1.jpg";
    const desc1 = "Classic simplicity at its finest with fresh mozzarella, ripe tomatoes, and a hint of basil.";
    menu_item(item1, imageLink1, "Margherita Pizza", desc1, 12.99);
    homepageDiv.appendChild(item1);

    // Menu item 2
    const item2 = document.createElement("div");
    const imageLink2 = "https://www.foodrepublic.com/img/gallery/how-to-buy-and-slice-pepperoni-for-perfect-crispy-cups/l-intro-1685460285.jpg";
    const desc2 = "A crowd favorite, loaded with crispy pepperoni slices and gooey mozzarella cheese.";
    menu_item(item2, imageLink2, "Pepperoni Explosion", desc2, 14.99);
    homepageDiv.appendChild(item2);

    // Menu item 3
    const item3 = document.createElement("div");
    const imageLink3 = "https://breadboozebacon.com/wp-content/uploads/2023/05/BBQ-Chicken-Pizza-IC-6-800x1200.jpg";
    const desc3 = "Tangy BBQ sauce topped with grilled chicken, red onions, and a blend of cheddar and mozzarella.";
    menu_item(item3, imageLink3, "BBQ Chicken Pizza", desc3, 13.99);
    homepageDiv.appendChild(item3);

    // Menu item 4: Vegetarian Delight
    const item4 = document.createElement("div");
    const imageLink4 = "https://www.acouplecooks.com/wp-content/uploads/2021/06/Best-Vegetarian-Pizza-003.jpg";
    const desc4 = "A colorful mix of bell peppers, olives, mushrooms, onions, and spinach on a bed of tomato sauce.";
    menu_item(item4, imageLink4, "Vegetarian Delight", desc4, 11.99);
    homepageDiv.appendChild(item4);

    // Menu item 5: Meat Lovers Pizza
    const item5 = document.createElement("div");
    const imageLink5 = "https://www.simplyrecipes.com/thmb/XuM1G9qj1IrTkRBa3F8U7dIhW-k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Meat-Lovers-Pizza-LEAD-08-b9e7edb92d2c4dd0b2c67b0a209decc1.jpg";
    const desc5 = "A hearty combination of pepperoni, sausage, bacon, and ham, piled high with mozzarella.";
    menu_item(item5, imageLink5, "Meat Lovers Pizza", desc5, 15.99);
    homepageDiv.appendChild(item5);

    // Menu item 6: Hawaiian Pizza
    const item6 = document.createElement("div");
    const imageLink6 = "https://www.cookingclassy.com/wp-content/uploads/2019/02/hawaiian-pizza-20.jpg";
    const desc6 = "Sweet and savory with juicy pineapple, ham, and a sprinkle of mozzarella on a tomato base.";
    menu_item(item6, imageLink6, "Hawaiian Pizza", desc6, 12.49);
    homepageDiv.appendChild(item6);

    // Menu item 7: Spicy Buffalo Chicken
    const item7 = document.createElement("div");
    const imageLink7 = "https://www.spendwithpennies.com/wp-content/uploads/2022/03/Spicy-Buffalo-Chicken-Pizza-SpendWithPennies-12.jpg";
    const desc7 = "Buffalo sauce, grilled chicken, red onions, and a drizzle of ranch dressing, topped with mozzarella.";
    menu_item(item7, imageLink7, "Spicy Buffalo Chicken", desc7, 13.49);
    homepageDiv.appendChild(item7);

    // Menu item 8: Four Cheese Pizza
    const item8 = document.createElement("div");
    const imageLink8 = "https://www.sugarandsoul.co/wp-content/uploads/2017/09/white-four-cheese-pizza-recipe-4.jpg";
    const desc8 = "A rich blend of mozzarella, cheddar, parmesan, and gorgonzola, perfect for cheese lovers.";
    menu_item(item8, imageLink8, "Four Cheese Pizza", desc8, 14.49);
    homepageDiv.appendChild(item8);
}

export default menu;

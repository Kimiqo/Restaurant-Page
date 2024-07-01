const homepageDiv = document.getElementById("content");

function menu_item(variable, imageLink, name, description){
    variable.classList.add("item");
    
    let image = document.createElement("img");
    image.src = `${imageLink}`;
    image.classList.add("menu-image");

    let item_name = document.createElement("h2");
    item_name.innerHTML = name;

    let item_desc = document.createElement("p");
    item_desc.innerHTML = description;

    variable.appendChild(image);
    variable.appendChild(item_name);
    variable.appendChild(item_desc);

}

function menu() {
    // Clear previous content
    homepageDiv.innerHTML = '';

    //menu items = 1
    const item1 = document.createElement("div");
    const imageLink1 = "https://www.allrecipes.com/thmb/UsNtGp9OgIsKw6cPqGQ-CxLmnTE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-72657-best-hamburger-ever-ddmfs-4x3-hero-878e801ab30445988d007461782b3c25.jpg";
    const desc1 = "Two buns with a delicious meat patty";
    menu_item(item1,imageLink1,"Hamburger",desc1);
    homepageDiv.appendChild(item1);

    //menu items = 2
    const item2 = document.createElement("div");
    const imageLink2 = "https://www.wholesomeyum.com/wp-content/uploads/2023/12/wholesomeyum-Grilled-Lobster-Tail.jpg";
    const desc2 = "Cracked salty lobster with lemon addi";
    menu_item(item2,imageLink2,"Lobster",desc2);
    homepageDiv.appendChild(item2);

    //menu items = 2
    const item3 = document.createElement("div");
    const imageLink3 = "https://www.kitchensanctuary.com/wp-content/uploads/2020/10/Lasagne-square-FS-79.jpg";
    const desc3 = "Homemade Lasagne";
    menu_item(item3,imageLink3,"Lasagne",desc3);
    homepageDiv.appendChild(item3);


}

export default menu;



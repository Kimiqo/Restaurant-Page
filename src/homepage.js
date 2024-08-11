function homepage() {
    const homepageDiv = document.getElementById("content");

    // Clear previous content
    homepageDiv.innerHTML = '';

    const picDiv = document.createElement("div");
    const headDiv = document.createElement("div");
    const restName = document.createElement("h1");
    const headline = document.createElement("h3");
    const textDiv = document.createElement("div");
    const restDetails = document.createElement("p");
    const hours = document.createElement("p");
    const location = document.createElement("p");


    // Add image
    const image = document.createElement("img");
    image.src = "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg";
    picDiv.appendChild(image);
    picDiv.classList.add("homepic");

    restName.innerHTML = 'Slices Of Heaven';
    headline.innerHTML = 'Where Every Bite is a Slice of Perfection!';
    headDiv.appendChild(restName);
    headDiv.appendChild(headline);

    //restaurant details
    restDetails.innerHTML = "<center><b>Description</b></center> At Slice of Heaven, we believe pizza is more than just food—it's a passion. Our handcrafted pizzas are made with love, using the freshest ingredients and a perfect blend of flavors that will transport your taste buds straight to Italy. Whether you’re in the mood for a classic Margherita or a gourmet creation, each slice promises a heavenly experience. Join us for a taste that will leave you craving more!";
    textDiv.appendChild(restDetails);

    //hours
    hours.innerHTML = `<b>Opening Hours</b> <br>
    Monday to Thursday: 11:00 AM - 10:00 PM <br>
    Friday & Saturday: 11:00 AM - 11:00 PM <br>
    Sunday: 12:00 PM - 9:00 PM`;
    textDiv.appendChild(hours);

    //location
    location.innerHTML = `<b>Contact Details</b> <br>
    Phone: (555) 123-4567 <br>
    Email: info@sliceofheavenpizza.com <br>
    Address: 123 Pizza Lane, Foodie Town, FL 12345`;
    textDiv.appendChild(location);
    textDiv.classList.add("details");

    homepageDiv.appendChild(picDiv);
    homepageDiv.appendChild(headDiv);
    homepageDiv.appendChild(textDiv);
}

export default homepage;

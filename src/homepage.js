function homepage() {
    const homepageDiv = document.getElementById("content");

    // Clear previous content
    homepageDiv.innerHTML = '';

    const picDiv = document.createElement("div");
    const headDiv = document.createElement("div");
    const textDiv = document.createElement("div");
    const details = document.createElement("p");
    const headline = document.createElement("h2");

    // Add image
    const image = document.createElement("img");
    image.src = "https://www.bestdesignprojects.com/wp-content/uploads/2018/12/Ina-Damyanova-Is-the-Interior-Designer-Of-The-Club-Horizont-capa-715x400.jpg";
    picDiv.appendChild(image);
    picDiv.classList.add("homepic");

    headline.innerHTML = 'Exquisite Food made affordable';
    headDiv.appendChild(headline);

    details.innerHTML = 'Lorem ipsum afhjashf dfjhjs jh ajfahjs asjhdf sd fjah wo fw o owew ro wfo pbiwoa aii wf i aifi';
    textDiv.appendChild(details);

    homepageDiv.appendChild(picDiv);
    homepageDiv.appendChild(headDiv);
    homepageDiv.appendChild(textDiv);
}

export default homepage;

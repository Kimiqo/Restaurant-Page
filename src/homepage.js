function homepage() {
    console.log("home button clicked");
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
    image.src = "https://preview.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=640&crop=smart&auto=webp&s=22ed6cc79cba3013b84967f32726d087e539b699";
    picDiv.appendChild(image);

    headline.innerHTML = 'Exquisite Food made affordable';
    headDiv.appendChild(headline);

    details.innerHTML = 'Lorem ipsum afhjashf dfjhjs jh ajfahjs asjhdf sd fjah wo fw o owew ro wfo pbiwoa aii wf i aifi';
    textDiv.appendChild(details);

    homepageDiv.appendChild(picDiv);
    homepageDiv.appendChild(headDiv);
    homepageDiv.appendChild(textDiv);
}

export default homepage;

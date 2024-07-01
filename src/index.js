console.log("We begin");

function component(){
    const homepageDiv = document.getElementById("content");
    const picDiv = document.createElement("div");
    const headDiv = document.createElement("div");
    const textDiv = document.createElement("div");
    const details = document.createElement("p");
    const headline = document.createElement("h2");

    //add image
    const image = document.createElement("img");
    image.src = "https://preview.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=640&crop=smart&auto=webp&s=22ed6cc79cba3013b84967f32726d087e539b699";
    picDiv.appendChild(image);

    
    headline.innerHTML = 'Exquisite Food made affordable';
    headDiv.appendChild(headline);

    details.innerHTML = 'Lorem ipsum afhjashf dfjhjs jh ajfahjs asjhdf sd fjah wo fw o owew ro wfo pbiwoa  aii wf i aifi';
    textDiv.appendChild(details);

    homepageDiv.appendChild(picDiv);
    homepageDiv.appendChild(headDiv);
    homepageDiv.appendChild(textDiv);

}

document.body.appendChild(component());


{/* <div id="pic">
<img src="https://preview.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=640&crop=smart&auto=webp&s=22ed6cc79cba3013b84967f32726d087e539b699" alt="random picture">
</div>
<div id="headline">
<h2>Exquisite Food made affordable</h2>
</div>
<div id="details">
<p>Lorem ipsum afhjashf dfjhjs jh ajfahjs asjhdf sd fjah wo fw o owew ro wfo pbiwoa  aii wf i aifi</p>
</div> */}

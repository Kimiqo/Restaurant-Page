const homepageDiv = document.getElementById("content");

export default function about() {
    homepageDiv.innerHTML = "";
    homepageDiv.style.display = "block";


    homepageDiv.innerHTML = `
    <h1>About Us</h1>
<h3><b>Welcome to Slices of Heaven!</b></h3>
<p>At Slices of Heaven, we believe that pizza is more than just a meal—it's a slice of happiness. Nestled in the heart of [Your City], our pizzeria has been the go-to spot for pizza lovers since [Year of Establishment]. Whether you're here for a quick slice or a full pizza experience, we treat every guest like family.</p>

<h3><b>Our Story</b></h3>
<p>Our story began with a simple dream: to bring the authentic flavors of Italy to our community. With a passion for quality and a dedication to tradition, our founders opened Slices of Heaven to share their love of pizza. Every pizza we create is a tribute to the artistry of Italian cooking, made with the freshest ingredients and a lot of love.</p>

<h3><b>Our Ingredients</b></h3>
<p>Quality is the cornerstone of everything we do at Slices of Heaven. We handpick the finest ingredients, from sun-ripened tomatoes to creamy mozzarella and fresh basil. Our dough is prepared fresh daily, hand-stretched to perfection, and baked in our traditional stone oven to achieve that perfect crispy crust. We believe that great ingredients make great pizza, and we never compromise on quality.</p>

<h3><b>Our Commitment</b></h3>
<p>At Slices of Heaven, we're committed to providing a warm and welcoming atmosphere where everyone can enjoy a slice of their favorite pizza. From classic Margherita to our signature creations, we have something to satisfy every craving. We also offer a variety of vegetarian and gluten-free options, ensuring that everyone can find their perfect slice.</p>

<h3><b>Join Us</b></h3>
<p>Whether you're dining in, taking out, or ordering delivery, Slices of Heaven is here to serve you. Come in and experience the taste of true pizza perfection. We can't wait to welcome you to our table!</p>
`;


}


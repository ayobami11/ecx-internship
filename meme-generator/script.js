let form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

// Gets random meme images from an API
const getData = async () => {
    let memeImage = document.getElementById('meme-image');

    const response = await fetch('https://api.imgflip.com/get_memes');
    const jsonResponse = await response.json();
    const { memes } = jsonResponse.data;

    const randomIndex = Math.floor(Math.random() * memes.length);
    const randomMemeImg = memes[randomIndex].url;
    memeImage.src = randomMemeImg;
    
    const topText = document.getElementById('top-text');
    const bottomText = document.getElementById('bottom-text');
    const figTop = document.getElementById('fig-top');
    const figBottom = document.getElementById('fig-bottom');

    figTop.innerText = topText.value;
    figBottom.innerText = bottomText.value;
}

// Event handler function
function handleSubmit(event) {
    event.preventDefault();
    getData();
}
const myImage = document.querySelector('#banner'); // locates the html element with id banner
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms)); // Establishes timer functionality
const birdImage = document.querySelector('#stickyBird'); // locates the html element with id stickyBird

myImage.src = "images/descendantsImg.png"; // Starting images
birdImage.src = "images/descendantsImg.png";

async function processOrder1() { // Looping function cycling through 4 images with a 5 second delay between each, changing img elements src property
  
    await delay(5000); 
  
    myImage.src = "images/cycle1.png";

    await delay(5000); 
  
    myImage.src = "images/cycle2.png";

    await delay(5000); 
  
    myImage.src = "images/cycle3.png";

    await delay(5000); 

    myImage.src = "images/descendantsImg.png";

    processOrder1();


}

processOrder1();

async function processOrder2() { // Looping function cycling through 6 animation frames with only a 0.05 second delay between each, changing img elements src property

    await delay(50); 
  
    birdImage.src = "images/straightDiveframe0001.png";

    await delay(50); 
  
    birdImage.src = "images/straightDiveframe0002.png";
  
    await delay(50); 
  
    birdImage.src = "images/straightDiveframe0003.png";

    await delay(50); 
  
    birdImage.src = "images/straightDiveframe0004.png";

    await delay(50); 
  
    birdImage.src = "images/straightDiveframe0005.png";

    await delay(50); 

    birdImage.src = "images/straightDiveframe0000.png";

    processOrder2();


}

processOrder2();

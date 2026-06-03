const myImage = document.querySelector('#banner');
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const birdImage = document.querySelector('#stickyBird');

myImage.src = "images/descendantsImg.png";
birdImage.src = "images/descendantsImg.png";

async function processOrder1() {
  
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

async function processOrder2() {

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

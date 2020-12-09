const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const paragraph = document.getElementById('paragraph');

let canChange = false;

const firstClickHandler = () => {
  canChange = true; 
}

const secondClickHandler = () => {
  if (canChange) {
    paragraph.hidden = paragraph.hidden === false ? true : false;
  }
  canChange = false;
}

button1.addEventListener('click', firstClickHandler);
button2.addEventListener('click', secondClickHandler)
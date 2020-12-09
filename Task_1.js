const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const paragraph = document.getElementById('paragraph');

const firstClickHandler = () => {
  const secondClickHandler = () => {
    paragraph.hidden = paragraph.hidden === false ? true : false;
    button2.removeEventListener('click', secondClickHandler);
  }
  
  button2.addEventListener('click', secondClickHandler);
}



button1.addEventListener('click', firstClickHandler)
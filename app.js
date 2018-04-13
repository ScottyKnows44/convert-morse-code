`use-strict`

const button = document.getElementById('button');
const input = document.getElementById('input');

button.addEventListener("click", submitEvent);

function submitEvent(event) {
  event.preventDefault();
  answer = document.getElementById('answer');
  let message = input.value
  let messageDecoded = [];
  let  message1 = message.split('');

  for (A = 0; A<message1.length; A++){
    if(message1[A] === 'a'){
      message1[A] = ".-";
    } else if (message1[A] === 'b') {
      message1[A] = "-..."; 
      messageDecoded.push(message1[A]);
    } else if (message1[A] === 'c') {
      message1[A] = "-.-."; 
      messageDecoded.push(message1[A]);
    } else if (message1[A] === 'd') {
      message1[A] = "-.."; 
      messageDecoded.push(message1[A]);
    } else if (message1[A] === 'e') {
      message1[A] = "."; 
      messageDecoded.push(message1[A]);
    } else if (message1[A] === 'f') {
      message1[A] = "..-."; 
      messageDecoded.push(message1[A]);
    } else if (message1[A] === 'g') {
      message1[A] = "--."; 
      messageDecoded.push(message1[A]);
    } else if (message1[A] === 'h') {
      message1[A] = "...."; 
      messageDecoded.push(message1[A]);
    } else if (message1[A] === 'i') {
      message1[A] = ".."; 
      messageDecoded.push(message1[A]);
    } else if (message1[A] === 'j') {
      message1[A] = ".---"; 
      messageDecoded.push(message1[A]);
    } else if (message1[A] === 'k') {
      message1[A] = "-.-"; 
      messageDecoded.push(message1[A]);
    } else if (message1[A] === 'l') {
      message1[A] = ".-.."; 
      messageDecoded.push(message1[A]);
    } else if (message1[A] === 'm') {
      message1[A] = "--"; 
      messageDecoded.push(message1[A]);
    } else if (message1[A] === 'n') {
      message1[A] = "-."; 
      messageDecoded.push(message1[A]);
    } else if (message1[A] === 'o') {
      message1[A] = "---"; 
      messageDecoded.push(message1[A]);
    } else if (message1[A] === 'p') {
      message1[A] = ".--."; 
      messageDecoded.push(message1[A]);
    } else if (message1[A] === 'q') {
      message1[A] = "--.-"; 
      messageDecoded.push(message1[A]);
    } else if (message1[A] === 'r') {
      message1[A] = ".-."; 
      messageDecoded.push(message1[A]);
    } else if (message1[A] === 's') {
      message1[A] = "..."; 
      messageDecoded.push(message1[A]);
    } else if (message1[A] === 't') {
      message1[A] = "-"; 
      messageDecoded.push(message1[A]);
    } else if (message1[A] === 'u') {
      message1[A] = "..-"; 
      messageDecoded.push(message1[A]);
    } else if (message1[A] === 'v') {
      message1[A] = "...-"; 
      messageDecoded.push(message1[A]);
    } else if (message1[A] === 'w') {
      message1[A] = ".--"; 
      messageDecoded.push(message1[A]);
    } else if (message1[A] === 'x') {
      message1[A] = "-..-"; 
      messageDecoded.push(message1[A]);
    } else if (message1[A] === 'y') {
      message1[A] = "-.--"; 
      messageDecoded.push(message1[A]);
    } else if (message1[A] === 'z') {
      message1[A] = "--.."; 
      messageDecoded.push(message1[A]);
    } else {console.log('ERR')}
  }

  answer.textContent = messageDecoded.join('');
  console.log(input.value);  
};
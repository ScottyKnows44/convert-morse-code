`use-strict`;

let form = document.getElementById('form');
let calc = document.getElementById('calc');
let rows = document.getElementsByClassName('row');
let divide = document.getElementById('/');
let multuply = document.getElementById('*');
let subtract = document.getElementById('-');
let seven = document.getElementById('7');
let eight = document.getElementById('8');
let nine = document.getElementById('9');
let four = document.getElementById('4');
let five = document.getElementById('5');
let six = document.getElementById('6');
let one = document.getElementById('1');
let two = document.getElementById('2');
let three = document.getElementById('3');
let plus = document.getElementById('+');
let enter = document.getElementById('enter');

let problem = [];

calc.addEventListener("click", clickEvent);

function clickEvent(event) {

  console.log(event.target)
  if(event.target === one) {
    problem.push(1);
  }

  if(event.target === two) {
    problem.push(2);
  }

  if(event.target === three) {
    problem.push(3);
  }

  if(event.target === four) {
    problem.push(4);
  }

  if(event.target === five) {
    problem.push(5);
  }

  if(event.target === six) {
    problem.push(6);
  }

  if(event.target === seven) {
    problem.push(7);
  }

  if(event.target === eight) {
    problem.push(8);
  }

  if(event.target === nine) {
    problem.push(9);
  }

  if(event.target === divide) {
    problem.push('/');
  }

  if(event.target === multuply) {
    problem.push('*');
  }

  if(event.target === subtract) {
    problem.push('-');
  }

  if(event.target === plus) {
    problem.push('+');
  }

  form.textContent = problem.join(''); 

  if(event.target === enter) {

  }
};
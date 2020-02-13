const chars = 'ABCDEFGHIJK01234656789';
const btn = document.querySelector('button');
const section = document.querySelector('section');
const codesNumber = 200;
const charsNumber = 12;

const codesGeneretor = () => {
 for (let i = 0; i < codesNumber; i++) {
  let code = "";
  for (let i = 0; i < charsNumber; i++) {
   const index = Math.floor(Math.random() * 20)
   code += chars[index];
  }
  const div = document.createElement('div');
  div.textContent = code;
  section.appendChild(div)
 }
}

btn.addEventListener('click', codesGeneretor)
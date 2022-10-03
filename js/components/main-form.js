const inputNome = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputMsg = document.querySelector('#message');

inputNome.addEventListener('invalid', () => {
    inputNome.setCustomValidity('Preencha o campo NOME corretamente');
}, false);

inputNome.addEventListener('change', () => {
    inputNome.setCustomValidity('');
}, false);

inputEmail.addEventListener('invalid', () => {
    inputEmail.setCustomValidity('Preencha o campo EMAIL corretamente');
}, false);

inputEmail.addEventListener('change', () => {
    inputEmail.setCustomValidity('');
}, false);


inputMsg.addEventListener('invalid', () => {
    inputMsg.setCustomValidity('Preencha o campo MENSAGEM');
}, false);

inputMsg.addEventListener('change', () => {
    inputMsg.setCustomValidity('');
}, false);

// document.querySelector(".main-form")
// .addEventListener("submit", event => {
//     console.log("enviar o formulário")
//     event.preventDefault()
// })

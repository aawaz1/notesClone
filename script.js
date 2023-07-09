const addButton = document.querySelector('#add');
const addNewNote = (text = '') => {
    const note= document.createElement('div');
    note.classList.add('note');
    const htmlData = ` <div class="operation">
    <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
    <button class="delete"><i class="fa-solid fa-trash"></i></button>

</div>
 <div class="main ${text ? "hidden" : ""}"></div>
 <textarea class="${text ? "hidden" : ""}"></textarea>`
 note.insertAdjacentHTML('afterbegin',htmlData)
 console.log(note);

const editButton = note.querySelector('.edit')
const delButton = note.querySelector('.delete')
const mainButton = note.querySelector('.main')
const textarea = note.querySelector('textarea')

delButton.addEventListener('click', () =>{ 
    note.remove();
})
textarea.value = text;
mainButton.innerHTML =text;

editButton.addEventListener('click', () => {
   mainButton.classList.toggle('hidden')
   textarea.classList.toggle('hidden')
})
 textarea.addEventListener('change',(event) => {
    const value = event.target.value;
    // console.log(value)
    mainButton.innerHTML = value;
    
 })


 document.body.appendChild(note);

}
 
addButton.addEventListener('click', () => addNewNote())
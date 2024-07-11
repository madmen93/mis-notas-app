//Datos iniciales:
const notes = [
    {content: "Mi primera nota"},
    {content: "Esta es una nota larga que ocupa más de una línea"},
    {content: "Otra nota de ejemplo"},
    {content: "Última nota de ejemplo"},
];

//Crear notas:
function createNotes(){
    let text = document.querySelector("textarea").value;
    notesLenght = notes.length;
    console.log(notesLenght);
    notes.push({content: `${text}`});
    printNote(text, notesLenght);
    document.querySelector("textarea").value = "";
};

function printNote(text, nlenght){
    const div = document.createElement('div');
    div.classList.add("note");
    const p = document.createElement('p');
    p.textContent = text;
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add("delete");
    deleteBtn.textContent = "Borrar";
    div.appendChild(p);
    div.appendChild(deleteBtn);
    const notesContainer = document.querySelector('div.notesContainer');
    let row;
    if(nlenght % 2 === 0){
        row = document.createElement('div');
        row.classList.add("row");
        notesContainer.appendChild(row);
        // row.appendChild(div);
    }else{
        row = document.querySelector('div.row:last-child');
    }
    row.appendChild(div);
}

//Botones:
createBtn.addEventListener("click", createNotes);

//Form:
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
})
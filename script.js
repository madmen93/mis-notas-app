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
    notesLength = notes.length;
    notes.push({content: `${text}`});
    printNote(text, notesLength);
    document.querySelector("textarea").value = "";
};

function printNote(text, nlength){
    const div = document.createElement('div');
    div.classList.add("note");
    const p = document.createElement('p');
    p.textContent = text;
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add("delete");
    deleteBtn.textContent = "Borrar";
    div.appendChild(p);
    div.appendChild(deleteBtn);
    let row;
    if(nlength % 2 === 0){
        row = document.createElement('div');
        row.classList.add("row");
        notesContainer.appendChild(row);
    }else{
        row = document.querySelector('div.row:last-child');
    }
    row.appendChild(div);
}

function printNotes(){
    let text;
    let row;
    for(let i = 0; i < notes.length; i ++){
        text = notes[i].content;
        const p = document.createElement("p");
        p.textContent = text;
        const div = document.createElement("div");
        div.classList.add("note");
        const button = document.createElement("button");
        button.classList.add("delete");
        button.textContent = "Borrar";
        div.appendChild(p);
        div.appendChild(button);
        if(i % 2 === 0){
            row = document.createElement("div");
            row.classList.add("row");
            notesContainer.appendChild(row);
        }else{
            row = document.querySelector("div.row:last-child");
        }
        row.appendChild(div);
    }
}

//Eliminar notas:
function deleteNote(){

}

//Botones y otros elementos en el dom:
const notesContainer = document.querySelector('div.notesContainer');
createBtn.addEventListener("click", createNotes);
const deleteBtn = document.querySelectorAll("button.delete");
for(let i = 0; i < deleteBtn.length; i++){
    deleteBtn[i].addEventListener("click", deleteNote);
}

//Form:
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
})

//Programa:
printNotes();
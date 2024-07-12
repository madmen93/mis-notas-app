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

//Imprimir nota nueva:
function printNote(text, nlength){
    const div = document.createElement('div');
    div.classList.add("note");
    const p = document.createElement('p');
    p.textContent = text;
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add("delete");
    deleteBtn.setAttribute("Id", nlength);
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

//Imprimir notas:
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
        button.setAttribute("Id", i);
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
function deleteNote(id){
    notes.splice(id, 1);
    clear();
    printNotes();
}

function clear(){
    const notesDiv = document.querySelectorAll('div.note');
    for(let i = 0; i < notesDiv.length; i++){
        notesDiv[i].remove();
    }
    const rowsDiv = document.querySelectorAll('div.row');
    for(let i = 0; i < rowsDiv.length; i++){
        rowsDiv[i].remove();
    }
}

//Botones y otros elementos en el dom:
const notesContainer = document.querySelector('div.notesContainer');
createBtn.addEventListener("click", createNotes);

//Form:
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
})

//Programa:
printNotes();
const doc = document.querySelector('div.notesContainer');
doc.addEventListener("click", (event) => {
    if(event.target.className === "delete"){
        const id = event.target.id;
        deleteNote(id);
    }
})
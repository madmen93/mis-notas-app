// Datos iniciales:
const notes = [
    // {content: "Mi primera nota"},
    // {content: "Esta es una nota larga que ocupa más de una línea"},
    // {content: "Otra nota de ejemplo"},
    // {content: "Última nota de ejemplo"},
];

//Crear notas:
function createNotes(){
    let text = document.querySelector("textarea").value;
    let txt = text.trim();
    let notesLength;
    let userData = storedData();
    const nota = {content: txt, fecha: new Date()}
    if(txt !== ""){
        notesLength = userData.length;
        userData.push(nota);
        saveNotes(userData);
        printNote(nota, notesLength);
        document.querySelector("textarea").value = "";
    }
};

//Imprimir nota nueva:
function printNote(nota, nlength){
    const div = document.createElement('div');
    div.classList.add("note");
    const p = document.createElement('p');
    p.textContent = nota.content;
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add("delete");
    deleteBtn.setAttribute("Id", nlength);
    deleteBtn.textContent = "Borrar";
    const date = document.createElement('p');
    date.textContent = nota.fecha;
    div.append(p, date, deleteBtn)
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
    let userData = storedData();
    for(let i = 0; i < userData.length; i ++){
        let nota = userData[i]
        printNote(nota, i);
    }
}

//Eliminar notas:
function deleteNote(id){
    let userData = storedData();
    userData.splice(id, 1);
    saveNotes(userData);
    clear();
    printNotes();
}

function clear(){
    const rowsDiv = document.querySelectorAll('div.row');
    for(let i = 0; i < rowsDiv.length; i++){
        rowsDiv[i].remove();
    }
}

//Guardar notas:
function saveNotes(arr){
    localStorage.setItem("sesion", JSON.stringify(arr));
}

function storedData(){
    const storedDataUser = localStorage.getItem("sesion");
    return storedDataUser ? JSON.parse(storedDataUser) : notes;
}

//Manejadores de eventos:
const notesContainer = document.querySelector('div.notesContainer');
createBtn.addEventListener("click", createNotes);
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
})
const doc = document.querySelector('div.notesContainer');
doc.addEventListener("click", (event) => {
    if(event.target.className === "delete"){
        const id = event.target.id;
        deleteNote(id);
    }
})

//Programa:
printNotes();
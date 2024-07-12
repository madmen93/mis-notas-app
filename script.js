// Datos iniciales:
const notes = [
    {content: "Mi primera nota"},
    {content: "Esta es una nota larga que ocupa más de una línea"},
    {content: "Otra nota de ejemplo"},
    {content: "Última nota de ejemplo"},
];

//Crear notas:
function createNotes(){
    let text = document.querySelector("textarea").value;
    let notesLength;
    let userData = storedData();
    if(userData){
        notesLength = userData.length;
        userData.push({content: `${text}`});
        saveNotes(userData);
    }else{
        notesLength = notes.length;
        notes.push({content: `${text}`});
        saveNotes(notes);
    }
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
    let userData = storedData();
    if(userData){
        for(let i = 0; i < userData.length; i ++){
            let text = userData[i].content;
            printNote(text, i);
        }
    }else{
        for(let i = 0; i < notes.length; i ++){
            let text = notes[i].content;
            printNote(text, i);
        }
    }
}

//Crear elementos:
function newElements(txt, lngth){
    const div = document.createElement('div');
    div.classList.add("note");
    const p = document.createElement('p');
    p.textContent = txt;
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add("delete");
    deleteBtn.setAttribute("Id", lngth);
    deleteBtn.textContent = "Borrar";
    div.appendChild(p);
    div.appendChild(deleteBtn);
    let row;
    if(lngth % 2 === 0){
        row = document.createElement('div');
        row.classList.add("row");
        notesContainer.appendChild(row);
    }else{
        row = document.querySelector('div.row:last-child');
    }
    row.appendChild(div);
}

//Eliminar notas:
function deleteNote(id){
    let userData = storedData();
    if(userData){
        userData.splice(id, 1);
        saveNotes(userData);
    }else{
        notes.splice(id, 1);
        saveNotes(notes);
    }
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

//Guardar notas:
function saveNotes(arr){
    localStorage.setItem("sesion", JSON.stringify(arr));
}

function storedData(){
    const storedDataUser = localStorage.getItem("sesion");
    return storedDataUser ? JSON.parse(storedDataUser) : null;
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
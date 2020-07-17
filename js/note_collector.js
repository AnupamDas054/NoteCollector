//show note after clicking showbutton

let showNote = document.getElementById("showNote");
showNote.addEventListener("click", function () {
    shownotes();
});

//Adding notes and show it
let addbtn = document.getElementById("addButton");
addbtn.addEventListener("click", function (e) {
    let addtext = document.getElementById("textArea");
    let valueTest = addtext.value;
    console.log(valueTest);

    if (valueTest.match(/\S/)) {
        let notes = localStorage.getItem("notes");
        if(notes == null){
            notesObj = [];
        }
        else 
        {
            notesObj = JSON.parse(notes);
        }
        notesObj.push(addtext.value);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        addtext.value = " ";

        shownotes();
    }
})
//function to show item

function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = " ";
    notesObj.forEach(function (element, index) {

        html += `
        <div class="notecard my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">NOTES ${index+1}</h5>
            <p class="card-text">${element}</p>
            <button id ="${index}" onclick="deleteNote(this.id)"class="btn btn-primary">Delete Note</button>
        </div>
        </div>
             `;

    });
    let notesElm = document.getElementById("notes");
    if (notes.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Sorry , NO Note Is Available`;
    }
}



//function to delete node

function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = []
    } else {
        notesObj = JSON.parse(notes);
    }


    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    shownotes();


}


//function to search text

let search=document.getElementById('searchTxt');
search.addEventListener("input",function()
{
     let searchval=search.value;
     //console.log("I have get ",searchval)
     let noteCard=document.getElementsByClassName("notecard");
     Array.from(noteCard).forEach(function(element){
         let cardTxt=element.getElementsByTagName("p")[0].innerHTML;
         //console.log(cardTxt);
         if(cardTxt.includes(searchval))
         {
             element.style.display="block";
         }
         else 
         {
             element.style.display="none";
         }

     })

})
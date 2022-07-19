console.log("skating", "coding","singing")

// add an element
const newParagraph=document.createElement("p");
newParagraph.textContent="Juliet likes dancing";
document.querySelector("body").appendChild(newParagraph)

const notes = [
    {
        title : "my next trip",
        body : "awesome spain it is",
    },
    {
        title : " attend book session",
        body : "london arts",
    },
    {
        title : "book i am reading",
        body : "fifty shades",
    },
    {
        title : "javascript conference",
        body : "amsterdam center, netherlands",
    },
    {
        title : "formula1",
        body : "qatar rally",
    }
]


notes.forEach(function(note){
    const p = document.createElement("p");
    p.textContent=`${note.title} -- ${note.body}`;
    document.querySelector("body").appendChild(p);
});

document.querySelector("button").addEventListener
("click",function(event){
    console.log(event);
})
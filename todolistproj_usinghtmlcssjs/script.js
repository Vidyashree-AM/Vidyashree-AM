
const input=document.getElementById("input");
const submit=document.getElementById("addItem");

input.addEventListener("keydown",function(event){
    if(event.key === "Enter"){
        addItem(input.value);
    }
});

submit.addEventListener("click",function(){
    addItem(input.value);
});


addItem = input =>{
const item=document.createElement("div");
const div=document.createElement("div");
const checkIcon=document.createElement("i");
const trashIcon=document.createElement("i");
const text=document.createElement("p");

item.className="item";
text.textContent=input;

checkIcon.className = "fas fa-check-square";
checkIcon.style.color= "lightgrey";
checkIcon.addEventListener("click",function(){
   checkIcon.style.color="limegreen";

});

div.appendChild(checkIcon);

trashIcon.className="fas fa-trash";
trashIcon.style.color="lightgrey"
trashIcon.addEventListener("click",function() {
   item.remove();
});

div.appendChild(trashIcon);

item.appendChild(text);
item.appendChild(div);


document.querySelector("#todolist").appendChild(item);
document.querySelector("#input").value="";


}
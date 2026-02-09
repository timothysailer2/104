function changeTitle(){
    //test
   // alert("connected");
   var title = document.getElementById("title");
   //change text
   title.innerHTML = "Change";
   //get ALL element with class text and store in var
   var paragraphs = document.getElementsByClassName("text");
   paragraphs[0].style.color = "blue";
   paragraphs[1].style.color  = "red";
}

function addElement(){
    let inputValue = document.getElementById("itemInput").value;
    let list = document.getElementById("list");
    let li = document.createElement("li");
    li.innerHTML = inputValue;
    list.appendChild(li);
}
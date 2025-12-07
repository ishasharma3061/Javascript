let taskinput=document.getElementById("taskinput")
let taskForm=document.getElementById("task-form")
let tasklist=document.getElementById("tasklist")


taskForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const taskTitle=taskinput.value;
    console.log(taskTitle);
    const listItem=document.createElement("li");
    listItem.innerHTML=taskTitle;
    tasklist.append(listItem);

    // cross wala button laane ke liye ye hai ab ye 2 lines
    // let span=document.createElement("span");
    // span.innerHTML='&times;'
    // listItem.appendChild(span);

    // create delete button instead of ×
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    // append delete button to list item
    listItem.appendChild(deleteBtn);
    tasklist.append(listItem);
    

    taskinput.value=" ";
});

// tasklist.addEventListener("click",(e)=>{
//     if(e.target.tagName == "li"){
//         e.target.classList.toggle("checked");
//     }

//     if(e.target.tagName=="span"){
//         const li=e.target.parentElement;
//         li.remove();
//     }
// });
// click events (for checking + deleting)
tasklist.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }

    if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove(); // removes that <li>
    }
});

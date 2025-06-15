const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if(inputBox.value === ''){
        alert("You must write something!");
        return;
    } else {
        // Create a new list item
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        listContainer.appendChild(li);


        // Create a span element for the delete button
        let span = document.createElement("span");
        span.innerHTML = "\u00D7"; // Unicode for multiplication sign (×)
        li.appendChild(span);


        // Clear the input box after adding the task
        inputBox.value = "";
        saveData();
    
    }
    
    
}

// Add event listener to the add button
listContainer.addEventListener("click",function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } 
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
    
    
}, false);


function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
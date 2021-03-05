document.querySelectorAll(".value").forEach((cell)=>{cell.addEventListener("click",calculation)});
function calculation(event){
    let clickedCell = event.target;
    document.getElementById("input").value = document.getElementById("input").value + clickedCell.innerHTML;
}
  
function showResult(){
    let result = document.getElementById("input").value;
    if(result !== "")
    document.getElementById("input").value = eval(result);
}

function clearAll(){
    document.getElementById("input").value = "";
}
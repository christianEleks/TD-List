const input = document.querySelector("input");
const mee = document.querySelector(".mee")
const hat = document.querySelector(".hat")


mee.addEventListener("click", () => {
    if(input.value === ''){
        alert("Add an activity")
    }
    else{
        const content = input.value
        let li = document.createElement("li")
        li.innerHTML = content
        hat.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)
        
       
        input.value = ''

        saveData();
    
    }
 })
 hat.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
     e.target.classList.toggle("checked")
     saveData();
    }
    else if(e.target.tagName === "SPAN"){
     e.target.parentElement.remove()
     saveData();
    }
  }, false);

  function saveData(){
    localStorage.setItem("data", hat.innerHTML)
  }
  
  function showList(){
    hat.innerHTML = localStorage.getItem("data")
  }
 
  showList();
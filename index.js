const input = document.querySelector("input");
const mee = document.querySelector(".mee")
const hat = document.querySelector(".hat")
container = document.querySelector(".container")


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
        myFun()
    
    }
 })
function myFun(){
  const countItem = hat.querySelectorAll("li")
    if(countItem.length > 4){
        container.style.height = "100%"
    }
    else{
        container.style.height = ""
    }
}

 hat.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
     e.target.classList.toggle("checked")
     saveData();
     myFun()
    }
    else if(e.target.tagName === "SPAN"){
     e.target.parentElement.remove()
     saveData();
     myFun()
    }
  }, false);

  function saveData(){
    localStorage.setItem("data", hat.innerHTML)
  }
  
  function showList(){
    hat.innerHTML = localStorage.getItem("data")
    myFun()
  }
 
  showList();

const myNumber = document.getElementById("number")

const addNew = document.getElementById("add")
const subNew = document.getElementById("sub")

addNew.addEventListener("click",function add(){
    myNumber.innerHTML=parseInt(myNumber.innerText) + 1
})

subNew.addEventListener("click",function sub(){
    myNumber.innerHTML=parseInt(myNumber.innerText) - 1
})
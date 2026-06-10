console.log("Hello")
const str = "nithin";
console.log(str)
const fruits = ["Apple", "Banana", "Grapes"]
console.log(fruits[0])
fruits[1] = "orange"
console.log(fruits[1])
const arr = [1, "name", false, 2.4] 
console.log(arr)
for(let i=0; i<arr.length; i++){
    console.log(arr[i])
}
const website = document.getElementById("ptag")
website.innerHTML = "this is my website"
function NewFunction(){
    console.log("i am writing something");
}
const input = document.getElementById("eventListener")
const output = document.getElementById("Ptag")
input.addEventListener("input", ()=>{
    output.textContent = input.value
})
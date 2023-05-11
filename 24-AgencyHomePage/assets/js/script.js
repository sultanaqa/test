const bar=document.querySelector(".bar")
const resp=document.querySelector(".resp")
const header=document.querySelector("header")
bar.addEventListener("click",function () {
    resp.classList.toggle("responsive")
    header.classList.toggle("header_bg")
})

// const category1 = document.querySelector(".category1")
// const triangle = document.querySelector(".triangle")

// triangle.addEventListener("click", function(){
//     category1.classList.toggle("category2")
// })


const formap = document.getElementById("formap");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const mesage = document.getElementById("mesage");
const btn = document.getElementById("btn");


// console.log(JSON.parse(localStorage.getItem("arr")));
// let arr = []
// if (JSON.parse(localStorage.getItem("arr")) !== null){
//     arr = JSON.parse(localStorage.getItem("arr")) ;
// }

// formap.addEventListener("submit", function(e) {
//     let obj = {
//         email: "",
//         subject: "",
//         message: "",
        
//     }
//     obj.email = email.value
//     obj.subject = subject.value
//     obj.message = mesage.value
    
//     console.log(obj);
//     arr.push(obj);
//     console.log(arr);
// e.preventDefault()
// })




let arr = []
formap.addEventListener("submit",function (e){
    let obj = {
        email: "",
        subject: "",
        message: "",
            } 
            obj.email = email.value
    obj.subject = subject.value
    obj.message = mesage.value
    
    console.log(obj);
    arr.push(obj);
    console.log(arr);
    localStorage.setItem("arr", JSON.stringify(arr));
    console.log(JSON.parse(localStorage.getItem("arr")));
    e.preventDefault();
})
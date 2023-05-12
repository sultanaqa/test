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




// fetch("")
// .then(response=>response.json())
// .then(data=> {
//     for(let i=0; i<data.lenght; i++){
//         for(let index = 0; index <adlar; index++){
//             if(i==index) {
//                 adlar[i].innerText=data[index].name.common;
//             }
//         }
//     }
// });

function cardInformation(data) {
    const topone = document.createElement("div");
    const ptop = document.createElement("p");
    // const ptop1 = document.createElement("p");
    // const ptop2 = document.createElement("p");
    // const img=document.createElement("img");
    topone.classList.add('box')
    // img.classList.add( 'grahimg')
    ptop.classList.add('text');
    // ptop1.classList.add('martip');
    // ptop2.classList.add('metap');
    ptop.innerText =  `${data.name}` 
    // ptop1.innerText = `${data.species}`
    // ptop2.innerText = `${data.species}`
    topone.appendChild(ptop);
    // topone.appendChild(ptop1);
    // topone.appendChild(ptop2);
    leftestnewone1.appendChild(topone);
    };
  
  
  const leftestnewone1 = document.getElementById("leftestnewone1");
  fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .then(data => {
      
      cardInformation(data.results[0]);
      cardInformation(data.results[1]);
      cardInformation(data.results[2]);
  
    })
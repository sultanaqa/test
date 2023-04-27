   const fullname = document.getElementById("fullname")
   const btn1 = document.getElementById("btn1")
   const email = document.getElementById("email")
   const password1 = document.getElementById("password1")
   const password2 = document.getElementById("password2")
   const form = document.getElementById("form")
   
   
   btn1.addEventListener("click",function (e)  {
    e.preventDefault();
   console.log(fullname.value);
   console.log(email.value);
   console.log(password2.value);
   

   })
   password1.addEventListener("keyup",function (e)  {
  
   password2.value = password1.value
   
   e.preventDefault();
   

   })

   let obj = []
   form.addEventListener("submit",function(e){
    let obj = {
        name: "",
        email: "",
        
      };
      e.preventDefault();
   })
   obj.name = fullname.value;
  obj.surname = email.value;
  console.log(obj);







//   const formCst = document.querySelector(".formCst");

// const addBtn = document.querySelector(".addBtn");
// let arr = [];
// form.addEventListener("submit", function (e) {
//   let obj = {
//     name: "",
//     surname: "",
//     age: 5,
//   };

//   obj.name = inputCst.value;
//   obj.surname = inputSurname.value;
//   console.log(obj);

//   arr.push(obj);
//   console.log(arr);

//   localStorage.setItem("arr", JSON.stringify(arr));

//   console.log(JSON.parse(localStorage.getItem("arr")));

//   let testData = JSON.parse(localStorage.getItem("arr"));
//   console.log(typeof testData[0].age);

//   e.preventDefault();
// });
   
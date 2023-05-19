// function myFunction() {
//   var input, filter, ul, li, a, i, txtValue;
//   input = document.getElementById("myInput");
//   filter = input.value.toUpperCase();
//   ul = document.getElementById("myUL");
//   li = ul.getElementsByTagName("li");
//   for (i = 0; i < li.length; i++) {
//     a = li[i].getElementsByTagName("a")[0];
//     txtValue = a.textContent || a.innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       li[i].style.display = "";
//     } else {
//       li[i].style.display = "none";
//     }
//   }
// }

const btn = document.getElementById("btn");

const container = document.getElementById("container");
function addCard(data) {
  // console.log(data)
  const kart = document.createElement("ul");
  const text = document.createElement("li");
  const link = document.createElement("a");

  link.innerHTML = data;
  text.append(link);
  kart.append(text);
  container.append(kart);
  container.style.cssText = `
    display:flex;
    flex-direction:column;
   
`;
  kart.style.cssText = `
    
    width:166px;
   
    border:1px solid black;
    `;
}

fetch("https://northwind.vercel.app/api/customers")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((kart) => {
      addCard(kart.id);

      btn.addEventListener("click", function () {
        // // console.log(myInput.value);
        // if(myInput.value===data);
        // console.log(myInput.value);
        const result = data.filter(checkAdult);
        function checkAdult(data) {
          return data[0] === myInput.value[0];
        }
        console.log(checkAdult);
      });
    });
  });

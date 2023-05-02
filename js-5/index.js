// const btn = document.getElementById("btn");
// const watch = document.getElementById("watch");
// const start = document.getElementById("start");
// let now = new Date().getTime();
// let num =0;
// let saygac;

// start.onclick = () => clearInterval(saygac);


// btn.onclick = () => {
//     saygac = setInterval(()=>{
//         num++;
//         watch.innerText=num

//     },1000);
// };

// .then(data=>console.log(data[0].name.common))
// .then(data=>console.log(data[0].name.nativeName))
// .catch(err=>console.log(err))
// .finally(data=>console.log(("")))


const card = document.getElementById("card")

fetch("https://restcountries.com/v3.1/name/turkey")
.then(res=>res.json())
.then(data=> {
    data.forEach (obj => {
        console.log(obj.name.common);
        console.log(obj.capital[0]);
        console.log(obj.capital);
        console.log(obj.cca3);
        console.log(obj.maps.googleMaps);
        console.log(obj.borders);
    })
    
})



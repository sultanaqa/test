let inpt = document.getElementById("inpt");
let btn1 = document.getElementById("btn1")

btn1.addEventListener("click", function() {
    fetch("https://restcountries.com/v3.1/name/"+ inpt.value)
    .then((response) => response.json())
    .then((data) => {
      console.log("olkenin adi", data[0].name.common);
      console.log("olkenin paytaxt", data[0].capital[0]);
      console.log("olkenin qonsu", data[0].borders);
      data[0].borders.forEach((element) => {
        console.log(element);
      });
      
  
      const kart = document.getElementById("info");
      kart.innerHTML = `
      <div class="card">
          <div class="p_">
              <p >Card of Country</p>
          </div>
          <div class="img_"><img style="width: 200px;" src="https://flagcdn.com/w320/tr.png" alt=""></div>
          <div class="h2_">
              <h2>Turkey</h2>
          </div>
          <div class="bottom">
              <div id="info">
            <div style="display:flex; justify-content:space-between" >
                  <div>Continent</div>
                  <div class="info_1">${data[0].region}</div>
              </div>
              <div style="display:flex; justify-content:space-between" >
                  <div>Name</div>
                  <div class="info_1">${data[0].name.common}</div>
              </div>
              <div style="display:flex; justify-content:space-between">
              <div>Currencies</div>
              
          </div>
  
              <div style="display:flex; justify-content:space-between" >
                  <div>Car series</div>
                  <div class="info_1">${data[0].car.signs}</div>
              </div>
              <div style="display:flex; justify-content:space-between" >
                  <div>Population</div>
                  <div class="info_1">${data[0].population}</div>
              </div>
              <div style="display:flex; justify-content:space-between">
                  <div>Capital</div>
                  <div class="info_1">${data[0].capital}</div>
              </div>
              <div style="display:flex; justify-content:space-between" >
                  <div>Phone number header</div>
                  <div class="info_1">${data[0].idd.root}${data[0].idd.suffixes}</div>
              </div>
              </div>
          </div>
      </div>
  
      
            
     
  
      
  
    `;
    });
  console.log();
})



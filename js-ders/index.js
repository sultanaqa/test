// for (let index = 0; index < 11; index++) {
//   if (index === 2) {
//     continue;
//   }
//   if (index === 4) {
//     continue;
//   }
//   if (index === 9) {
//     continue;
//   }
//   console.log(index);
// }
// let eded = 1;
// while (eded <= 100000) {
//   eded = eded * 10;
//   if (eded === 10) {
//     continue;
//   }
//   if (eded === 10000) {
//     continue;
//   }
//   console.log(eded);
// }

// 3 EDED VERILIB, UCBUCAGIN TEREFLERI OLUB OLMADIGI
// let a = 1;
// let b = 2;
// let c = 3;
// if (a+b>c && a>b-c) {
//   console.log("ucbucaqdir");
// } else {
//   console.log("ucbucaq deyil");
// }

//beraberterefli

// let a = 1;
// let b = 2;
// let c = 3;
// if (a===b && b===c) {
//        console.log("beraber terefli ucbucaqdir");
//      } else {
//        console.log("beraber terefli ucbucaq deyil");
//      }

// 3'e bolunen cut ededleri capa veren proqram tertib edin
// for (let i = 0; i < 100; i = i + 6) {
//   console.log(i);
// }


//4
// for (let i = 14; i < 100; i =i+10) {
//     console.log(i);
//   }


//5

// for (let i = 11; i < 100; i =i+11) {
//     console.log(i);
//   }

//6

// for (let i = 10; i < 100; i =i+1) {
    
//     if (i%11===0) {
//         continue
        
//     }
//     console.log(i);
//   }

//7 
// for (let index = 1; index <10; index++) {

//     for (let i = 2; i <10; i++) {
//         console.log(`${index}*${i}=`,index*i);
        
//     }
    
// }

//8
// i a'dan kicik olmalidi
// let a = 5
// let s=1
// for (let i = 1; i<=a; i++) {
//     s=i*s;
    
    
// }
// console.log(s);
// let x=0;
// let y=1;
// for (let i = 0; i < 12; i++) {
//     console.log(x);
//     let cem=y;
//     y+=x;
//     x=cem;
    
// }


// let ad_Soyad = ["Sultanaqa","Rehimli"]
// console.log(ad_Soyad);
// console.log(ad_Soyad.length);
// console.log(ad_Soyad.lastIndexOf); 
// console.log(ad_Soyad[ad_Soyad.length - 1]);


// let arr = ["as","ta","ra","cennet","yurdum"]
// for (let i = 0; i < arr.length; i++) {
    
//     console.log(arr[i]);
    
// }
// let eded=0;
// let arr = ["as","ta","ra","cennet","yurdum"];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]===arr[4]) {
// eded=i;
// break
        
//     }

    
    
// }
// console.log(arr[4],eded);


// const arr=[]
// for (let i = 0; i <21; i=i+2) {
//     arr.push(i)
    
// }
// console.log(arr);


// verilmis ededi reqemlerine ayiran proqram tertib edin// .split
// let result = "";
// let eded = 7675

// let eded2 =eded.toString();

// for (let i = 0; i<eded2.length; i++) {
//     result= result+eded2[i]+ "-";
    
    
    
// }
// console.log(result);


//verilmis ededin reqemlerinden en boyuyunu tapan proqram


// let arr = (945);
// arr = arr.toString();
// let max = arr[0]
// for (let i = 0; i <arr.length; i++) {

    
    
// }

// object

// const obj = {
//     name : "sultanaqa",
//     surname: "rehimli",
//     age:19,
// };
// console.log(obj);
// console.log(obj.age);
// console.log(obj.name);
// console.log(obj.surname);
// console.log(obj['age']);
// console.log(obj['name']);
// console.log(obj['surname']);
// obj.salary = 3000;
// console.log(obj);
// delete obj.name;
// delete obj.salary;
// console.log(obj);







//big data start
// Deyeri (unitPrice 20 den boyuk olanlari ekrana cixarin )



// const arr = [
//     {
//       id: 4,
//       supplierId: 2,
//       categoryId: 3,
//       quantityPerUnit: "48 - 6 oz jars",
//       unitPrice: 22,
//       unitsInStock: 53,
//       unitsOnOrder: 0,
//       reorderLevel: 0,
//       discontinued: true,
//       name: "Chef Anton's Cajun Seasoning",
//       supplier: {},
//       category: {
//         id: 3,
//         description: "Desserts candies and sweet breads",
//         name: "Confections",
//       },
//     },
//     {
//       id: 5,
//       supplierId: 2,
//       categoryId: 2,
//       quantityPerUnit: "36 boxes",
//       unitPrice: 21.35,
//       unitsInStock: 0,
//       unitsOnOrder: 0,
//       reorderLevel: 0,
//       discontinued: true,
//       name: "Chef Anton's Gumbo Mix",
//     },
//     {
//       id: 6,
//       supplierId: 3,
//       categoryId: 2,
//       quantityPerUnit: "12 - 8 oz jars",
//       unitPrice: 25,
//       unitsInStock: 120,
//       unitsOnOrder: 0,
//       reorderLevel: 25,
//       discontinued: false,
//       name: "Grandma's Boysenberry Spread",
//     },
//     {
//       id: 7,
//       supplierId: 3,
//       categoryId: 7,
//       quantityPerUnit: "12 - 1 lb pkgs.",
//       unitPrice: 30,
//       unitsInStock: 15,
//       unitsOnOrder: 0,
//       reorderLevel: 10,
//       discontinued: false,
//       name: "Uncle Bob's Organic Dried Pears",
//     },
//     {
//       id: 8,
//       supplierId: 3,
//       categoryId: 2,
//       quantityPerUnit: "12 - 12 oz jars",
//       unitPrice: 40,
//       unitsInStock: 6,
//       unitsOnOrder: 0,
//       reorderLevel: 0,
//       discontinued: false,
//       name: "Northwoods Cranberry Sauce",
//     },
//     {
//       id: 9,
//       supplierId: 4,
//       categoryId: 6,
//       quantityPerUnit: "18 - 500 g pkgs.",
//       unitPrice: 97,
//       unitsInStock: 29,
//       unitsOnOrder: 0,
//       reorderLevel: 0,
//       discontinued: true,
//       name: "Mishi Kobe Niku",
//     },
//     {
//       id: 10,
//       supplierId: 4,
//       categoryId: 8,
//       quantityPerUnit: "12 - 200 ml jars",
//       unitPrice: 31,
//       unitsInStock: 31,
//       unitsOnOrder: 0,
//       reorderLevel: 0,
//       discontinued: false,
//       name: "Ikura",
//     },
//     {
//       id: 2,
//       supplierId: 1,
//       categoryId: 1,
//       quantityPerUnit: "24 - 12 oz bottles",
//       unitPrice: 19,
//       unitsInStock: 17,
//       unitsOnOrder: 40,
//       reorderLevel: 25,
//       discontinued: false,
//       name: "Chang",
//     },
//     {
//       id: 3,
//       supplierId: 1,
//       categoryId: 2,
//       quantityPerUnit: "12 - 550 ml bottles",
//       unitPrice: 10,
//       unitsInStock: 13,
//       unitsOnOrder: 70,
//       reorderLevel: 25,
//       discontinued: false,
//       name: "Aniseed Syrup",
//     },
//     {
//       id: 11,
//       supplierId: 5,
//       categoryId: 2,
//       quantityPerUnit: "1 kg pkg.",
//       unitPrice: 21,
//       unitsInStock: 22,
//       unitsOnOrder: 30,
//       reorderLevel: 30,
//       discontinued: false,
//       name: "Queso Cabrales 2",
//       supplier: {
//         id: 5,
//         companyName: "Cooperativa de Quesos 'Las Cabras'",
//         contactName: "Antonio del Valle Saavedra",
//         contactTitle: "Export Administrator",
//         address: {
//           street: "Calle del Rosal 4",
//           city: "Oviedo",
//           region: "Asturias",
//           postalCode: 33007,
//           country: "Spain",
//           phone: "(98) 598 76 54",
//         },
//       },
//       category: {
//         id: 4,
//         description: "Cheeses",
//         name: "Dairy Products",
//       },
//     },
//     {
//       id: 12,
//       supplierId: 5,
//       categoryId: 4,
//       quantityPerUnit: "10 - 500 g pkgs.",
//       unitPrice: 38,
//       unitsInStock: 86,
//       unitsOnOrder: 0,
//       reorderLevel: 0,
//       discontinued: false,
//       name: "Queso Manchego La Pastora",
//     },
//     {
//       id: 13,
//       supplierId: 6,
//       categoryId: 8,
//       quantityPerUnit: "2 kg box",
//       unitPrice: 6,
//       unitsInStock: 24,
//       unitsOnOrder: 0,
//       reorderLevel: 5,
//       discontinued: false,
//       name: "Konbu",
//     },
//     {
//       id: 14,
//       supplierId: 6,
//       categoryId: 7,
//       quantityPerUnit: "40 - 100 g pkgs.",
//       unitPrice: 23.25,
//       unitsInStock: 35,
//       unitsOnOrder: 0,
//       reorderLevel: 0,
//       discontinued: false,
//       name: "Tofu",
//     },
//     {
//       id: 15,
//       supplierId: 6,
//       categoryId: 2,
//       quantityPerUnit: "24 - 250 ml bottles",
//       unitPrice: 15.5,
//       unitsInStock: 39,
//       unitsOnOrder: 0,
//       reorderLevel: 5,
//       discontinued: false,
//       name: "Genen Shouyu",
//     },
//   ];
//big data end

  // Deyeri (unitPrice 20 den boyuk olanlari ekrana cixarin )
//   for (let i = 0; i <arr.length; i++) {
//     if (arr[i].unitPrice>19) {
//         console.log(arr[i]);
//     }
    
    
//   }
// let new_name=prompt("herf daxil ele")
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].name[0].toLocaleLowerCase()==new_name.toLocaleLowerCase()) {
//         console.log(arr[i]);
        
//     }
    
// }

// arr=[2,9,6,11,-5,-3,8,6,"Azerbaycan",true,12,346,"LANKARAN","limon",2,9,182]
// //arrayin tek elementlerinin indeksini capa vveren proqram 
// for (let i = 0; i < arr.length; i++) {
//     if ( typeof (arr[i]) =='number' && arr[i]%2!==0) {
//         console.log(arr[i],i);
        
//     }
    
// }

// arr=[2,9,6,11,-5,-3,8,6,"Azerbaycan",true,12,346,"LANKARAN","limon",2,9,182]
// //arrayin cut elementlerinin indeksini capa vveren proqram 
// for (let i = 0; i < arr.length; i++) {
//     if ( typeof (arr[i]) =='number' && arr[i]%2==0) {
//         console.log(arr[i]);
        
//     }
    
// }

//en boyuk elementini ekrana cixaran proqram

// let eded = 0;
// arr=[2,9,6,11,-5,-3,8,6,"Azerbaycan",true,12,346,"LANKARAN","limon",2,9,182]

// for (let i = 0; i < arr.length; i++) {
//     if ( typeof (arr[i]) =='number') {
//         if (eded<arr[i]) {
//             eded=arr[i]
//         }
        
//     }
    

// }
// console.log(eded);

// let eded = 0;
// arr=[2,9,6,11,-5,-3,8,6,"Azerbaycan",true,12,346,"LANKARAN","limon",2,9,182]

// for (let i = 0; i < arr.length; i++  && arr[i]%2==0) {
//     if ( typeof (arr[i]) =='number') {
//         if (eded<arr[i]) {
//             eded=arr[i]
//         }
        
//     }
    

// }
// console.log(eded);

//bool tipinde olan elementin qonsu elementlerini ekrana cixaran proqram



//  arr=[2,9,6,11,-5,-3,8,6,"Azerbaycan",true,12,346,"LANKARAN","limon",2,9,182]

//  for (let i = 0; i < arr.length; i++) {
//      if ( typeof (arr[i]) =='boolean') {
         
//        console.log(arr[i],arr[i-1],arr[i+1]); 
//      }

//     }

// en uzun sozu ekrana cixaran proqram yazin

// let max = ""
// arr=[2,9,6,11,-5,-3,8,6,"Azerbaycan",true,12,346,"LANKARAN","limon",2,9,182]

// for (let i = 0; i < arr.length; i++) {
//     if ( typeof (arr[i]) =='string') {
//         if (max.length<arr[i].length) {
//             max=arr[i];

            
//         }
        

//     }

//    }
//    console.log(max);


//butun herfleri boyuk olan sozun indeksini ekrana cixaran proqram yazin

// arr=[2,9,6,11,-5,-3,8,6,"AzerBayCan",true,12,346,"LANKARAN","LimOn",2,9,182]

// for (let i = 0; i < arr.length; i++) {
//     if ( typeof (arr[i]) =='string' && arr[i]===arr[i].toUpperCase()) {
//         console.log(arr[i]);
      
//     }

//    }

// 2 den artiq boyuk herfi olan sozleri ekrana cixarin


// arr=[2,9,6,11,-5,-3,8,6,"AzerBayCan",true,12,346,"LANKARAN","LimOn",2,9,182]

// for (let i = 0; i < arr.length; i++) {
//     if ( typeof (arr[i]) =='string' && arr[i]===arr[i].toUpperCase()) {
//         console.log(arr[i]);
      
//     }

//    }

// function sayHello(name, surname,age)  {
//   console.log("hi "+name+" "+surname+ " "+age);
// }

// sayHello("yazi","yazilar",23)
// sayHello("yvbni","daha cox random",234234)






// funksiya


// function calc(a,b ){
//   return a+b
// }
// let result = calc(4,5)
// console.log(result);



// let calc2 = function (a,b) {
//   return a+b

  
// }



// let calc3 = (a,b)=> a+b


// console.log(calc2(34,5));
// console.log(calc3(4,5));




  //toplama cixma ...
//  function calc(a,b ){
//   return a+b
 
// }
// let result = calc(4,5)
// console.log(result);


// function calc2(a,b ){
//   return a-b
// }
// let result2 = calc2(4,5)
// console.log(result2);

// function calc3(a,b ){
//   return a/b
// }
// let result3 = calc3(4,5)
// console.log(result3);

// function calc4(a,b ){
//   return a*b
// }
// let result4 = calc4(4,5)
// console.log(result4);



//iki ededi muqaise

// function calc4(a,b ){
//   if (a>b) {
//     return "yazi"
    
//   }
// }
// let result4 = calc4(6,5)
// console.log(result4);

//daxil edilen ad soyadi obyekt kimi retun eden funksiya yazin
// objectt ={}

// function sayHello(name, surname,age)  {

//   objectt.name =name;
//   objectt.surname=surname;
// return objectt
  
// }

// console.log(sayHello("Ad","Soyad"));


//daxil edilen 4 ededi array kimi return eden funksiya yazin

// arr =[]

// function sayHello(a,b,c,d)  {

//   arr.push(a,b,c,d)
//   return arr
  
// }

// console.log(sayHello(3,4,5,6));



//daxil edilen arrayi elementleri arasinda * olan string ceviren funksiya yazin

// arr =[]

// function sayHello(a,b,c,d)  {

//   arr.push(a, "*" , b , "*", c , "*", d)
//   return arr.toString()
  
// }

// console.log(sayHello(3,4,5,6));

// let array = [1,2,3,4]
// function name1(arr) {
//   let ifade = "";
//   for (let i = 0; i < arr.length; i++) {
//     ifade += arr[i] + "*";
    
//   }
  
//   console.log(ifade);
  
// }
// name1(array);







//
// let word=" Men bu gun Bakiya gedirem ki, yaxsi dincelim. Gelende kime ne alim? Kiminse ureyi ne ise istese gedib ozu alar... "
// console.log(word.length);
// console.log(word.slice(4,6));
// console.log(word.substring(0,10));
// console.log(word.replace("a","z"));
// console.log(word.replaceAll("a","w"));
// console.log(word.toLocaleUpperCase());
// console.log(word.toLowerCase());
// let word1="astara"
// let word2="cennet yurdum "
// console.log(word2.concat(word1));
// console.log(word.trim());
// console.log(word.trimStart());
// console.log(word.trimEnd());
// console.log(word.padStart(2, '0'));
// console.log(word.padEnd());/
// console.log(word.charAt());
// console.log(word.split(","));

// let word=" Men bu gun Bakiya gedirem ki, yaxsi dincelim. Gelende kime ne alim? Kiminse ureyi ne ise istese gedib ozu alar... "
// // 2-ci sozu capa veren funksiya yazin
// function name(yazi) {
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
//   }
  
// }
// let arr = ["apple","samsung","xioami"]
// // arr.forEach(x=>console.log(x))
// console.log(arr.includes("sdfsdf")); 
// console.log(arr.fill("huawei"));
// console.log(arr.indexOf("apple"));
// console.log(Array.isArray(arr));
// console.log(arr.join("-"));
// console.log(arr.keys());
// console.log(arr.lastIndexOf());
// console.log(arr.map("cennet yurdum astara"));
// console.log(arr.reverse());
// console.log(arr.sort());
// console.log(arr.slice(0, 2));


// const ages = [3, 10, 18, 20];
// document.getElementById("demo").innerHTML = ages.some(checkAdult);

// function checkAdult(age) {
//   return age > 18;
// }

// arrayin 1-ci elementini silen funksiya yazin
// let arr=["lankaran","baki","masalli","lerik","astara"]
// function astara(arr1) {
  
//   arr1.shift();
//   return arr1

  
// }
// console.log(astara(arr));


//2 arrayi tersine ceviren funksiya yazin

// function astara(arr1) {
  
//   arr1.reverse();
//   return arr1

  
// }
// console.log(astara(arr));



//3 arrayin tek indeksinde olan elementlerin sonuna AZE elave eden funksiya yazin


// function astara(arr1) {
  
// for (let i = 0; i < arr1.length; i++) {
//      if (i%2!==0) {

//       arr1[i]= arr1[i]+ "AZE"
      
//      }
     
  
// }
// return arr1
// }

// console.log(astara(arr));

// const arr = [32, 33, 16, 40];
// function astara(arr1) {
//   return arr1 >= 18
  
// }
// console.log(arr.filter(astara));

// const arr = [32, 33, 16, 40];
// function astara(arr1) {
//   return arr1 >= 18
  
// }
// console.log(arr.find(astara));
// const arr = [32, 33, 99, 40];
// function astara(arr1) {
//   return arr1 > 18;
  
// }
// console.log(arr.every(astara));


// const arr = [32, 33, 99, 40];
// function astara(arr1) {
//   return arr1 > 18;
  
// }
// console.log(arr.join("-"));


// const arr = [32, 33, 99, 40,"astara","astaralilar","astarada","mandarain","limon"];
//  function astara(arr1) {
    
  
//  }
//  console.log(arr.sort());
 


// let arr = [
//   {
//   id: 2,
//   description: "Sweet and savory sauces relishes spreads and seasonings",
//   name: "Condiments"
//   },
//   {
//   id: 1,
//   description: "Soft drinks coffees teas beers and ales",
//   name: "Beverages"
//   },
//   {
//   id: 3,
//   description: "Desserts candies and sweet breads",
//   name: "Confections"
//   },
//   {
//   id: 4,
//   description: "Cheeses",
//   name: "Dairy Products"
//   },
//   {
//   id: 5,
//   description: "Breads crackers pasta and cereal",
//   name: "Grains/Cereals"
//   },
//   {
//   id: 6,
//   description: "Prepared meats",
//   name: "Meat/Poultry"
//   },
//   {
//   id: 7,
//   description: "Dried fruit and bean curd",
//   name: "Produce"
//   },
//   {
//   id: 8,
//   description: "Seaweed and fish",
//   name: "Seafood"
//   }
//   ]

// console.table(arr);
// console.table(arr.sort((a,b)=>a.description>b.description ? 1 : -1));
// let arr = [
//   {
//     ad: "Senuber",
//     soyad: "Besirzade",
//     yas: "23",
//     kesir: false,
//     hobbies: ["gitara", "resm", "mahni"],
//   },
//   {
//     ad: "Zeyneb",
//     soyad: "Xanizade",
//     yas: "20",
//     kesir: false,
//     hobbies: ["musiqi", "gezmek"],
//   },
//   {
//     ad: "Yusif",
//     soyad: "Memmedov",
//     yas: "28",
//     kesir: false,
//     hobbies: ["xarici dil", "alqoritm"],
//   },
//   {
//     ad: "Cavid",
//     soyad: "Zeynalov",
//     yas: "22",
//     kesir: false,
//     hobbies: ["seir yazmaq", "xarici olkeler"],
//   },
//   {
//     ad: "Yusif",
//     soyad: "Tagiyev",
//     yas: "23",
//     kesir: false,
//     hobbies: ["oyun", "futbol", "voleybol"],
//   },
//   {
//     ad: "Adil",
//     soyad: "Sefizade",
//     yas: "21",
//     kesir: false,
//     hobbies: ["futbol", "voleybol", "at capmaq", "tarixi faklarla maraqlanmaq"],
//   },
//   {
//     ad: "Adil",
//     soyad: "Mediyev",
//     yas: "28",
//     kesir: false,
//     hobbies: ["kofe duzeltmek", "jazz"],
//   },
//   {
//     ad: "Vasif",
//     soyad: "Ejderov",
//     yas: "20",
//     kesir: true,
//     hobbies: ["futbol oynamaq", "masin surmek"],
//   },
// ];

//1) butun telebeleri capa veren funksiya yazin obyekt

// function astara(arr1) {
//   for (let elem of arr) {
    
//     console.log(elem.ad);
//   }
  
// }

// astara(arr)


// ad soyad capa versin: <Ad Soyad>

// function astara(arr1) {
//   for (let elem of arr) {
    
//     console.log(`<${elem.ad} ${elem.soyad}>`);
//   }
  
// }

// astara(arr)

//yasi 24-den yuxari olan telebelerin adini soyadini  ve yasini : < Ad Soyad x yas>

// function astara(arr1) {
//   for (let elem of arr) {
    
//     if (elem.yas>24) {
//       console.log(`<${elem.ad} ${elem.soyad} ${elem.yas}>`);
      
//     }
//   }
  
// }

// astara(arr)


//kesri olan telebenin adini ve hobbilerini capa veren : Qurban > Hobbies : video, sekil

// function astara(arr1) {
//   for (let elem of arr) {
    
//     if (elem.kesir===true) {
//       console.log(`<${elem.ad} ${elem.soyad} ${elem.yas}>`);
      
//     }
//   }
  
// }

// astara(arr)

// tekrarlanan adlari olan telebelerin ad ve soyadalrini capa f yazin

// function astara(arr) {
//   for (let elem of arr) {
    
//     if (elem.ad) {

//       console.log(`<${elem.ad} ${elem.soyad}>`);
      
//     }
//   }
  
// }

// astara(arr)


///////////////////////////
///////////////////////////
// const ast = document.getElementById("ast")
// ast.style.backgroundColor = "hotpink"
// ast.style.color ="white"
// ast.style.width = "1000px"
// ast.style.height = "1000px"
// console.log(ast.innerText);
// const lnk = document.getElementById
// // ast.onclick = function() {
// //    ast.style.backgroundColor = "red"
// //    alert("ok'a aidiyyati yoxdu, cennet cennet astaraaaa")
// // }

// ast.addEventListener("click",function name() {
//     alert("cennet yoxsa cehennem?? dhdhdh cennet cennet")
//     ast.style.backgroundColor = "green"
//     const newElement = document.createElement("h2")
//     let deyer = prompt("deyer")
//     newElement.innerText =deyer
    
    
// })
document.body.style.backgroundColor = "hotpink";
const btn = document.getElementById("btn")
const tsk1 = document.getElementById("tsk1")
const tsk2 = document.getElementById("tsk2")
const tsk3 = document.getElementById("tsk3")
btn.style.backgroundColor = ("pink")
btn.style.width = "200px";
btn.style.height = "30px";
btn.style.fontSize = "20px";
tsk1.style.color = "blue"
tsk1.style.backgroundColor = "purple"
tsk2.style.color = "lightblue"
tsk2.style.backgroundColor = "blue"
tsk3.style.color = "red"
tsk3.style.backgroundColor = "yellow"


tsk1.innerText = tsk1.innerText + " task 1"
tsk2.innerText = tsk2.innerText + " task 2"
tsk3.innerText = tsk3.innerText + " task 3"


console.log(tsk1.innerText);
console.log(tsk2.innerText);
console.log(tsk3.innerText);
console.log(btn.parentElement);
const altElemnet1 = document.createElement("button")
altElemnet1.innerText = "Yazi1"
const altElemnet2 = document.createElement("button")
altElemnet2.innerText = "Yazi2"
const altElemnet3 = document.createElement("button")
altElemnet3.innerText = "Yazi3"
tsk1.appendChild(altElemnet1)
tsk2.appendChild(altElemnet2)
tsk3.appendChild(altElemnet3)


const altElemnet4 = document.createElement("button")
altElemnet4.innerText = "Yazi4"
const altElemnet5 = document.createElement("button")
altElemnet5.innerText = "Yazi5"
const altElemnet6 = document.createElement("button")
altElemnet6.innerText = "Yazi6"
tsk1.appendChild(altElemnet4)
tsk2.appendChild(altElemnet5)
tsk3.appendChild(altElemnet6)


altElemnet1.innerText = altElemnet1.innerText + " delete, edit"
altElemnet2.innerText = altElemnet2.innerText + " delete, edit"
altElemnet3.innerText = altElemnet3.innerText + " delete, edit"
altElemnet4.innerText = altElemnet4.innerText + " delete, edit"
altElemnet5.innerText = altElemnet5.innerText + " delete, edit"
altElemnet6.innerText = altElemnet6.innerText + " delete, edit"




























































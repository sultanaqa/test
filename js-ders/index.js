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


arr=[2,9,6,11,-5,-3,8,6,"AzerBayCan",true,12,346,"LANKARAN","LimOn",2,9,182]

for (let i = 0; i < arr.length; i++) {
    if ( typeof (arr[i]) =='string' && arr[i]===arr[i].toUpperCase()) {
        console.log(arr[i]);
      
    }

   }








  
 
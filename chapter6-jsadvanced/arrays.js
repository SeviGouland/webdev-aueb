//CRUD - Create Read Update Delete βασικες πραξεις επι των πινακων

//Populate & Insert
let products = ['milk', 'egg'];
products[ products.length-1 ] = 'honey';
// alert(products.join());
products.push('honey'); 
products.unshift('honey');
// products.splice(1, 0, 'orange');
// alert(products.join());

// // Delete
let product = products.pop();
let shiftedProduct = products.shift();
// let deletedProducts = products.splice(1, 1);
// alert(products.join());

// // Search
let milkPosition = products.indexOf('milk');
//alert(milkPosition);
// alert(products.join());

// //Update
products[0] = 'oranges';
 //alert(products.join());
products[2] = "WELCOME";
products[2] = "HAHAHA"; 

// //Traverse
for (let i = 0; i  < products.length; i = i + 2) {
     document.write(products[i] + ' ');
 }
              //ή

// for (let product of products) {
//     document.write(product + '--');
// }

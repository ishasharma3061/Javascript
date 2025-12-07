// FESTIVAL DISCOUNT SYSTEM
// let products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Mouse", price: 800 },
//   { name: "Keyboard", price: 1200 }
// ];
// let discountedprice=products.map(function(product){
//     let discountprice=product.price-(product.price*0.10);
//     return{
//         name:product.name,
//         price:discountprice

//     }

// });
// discountedprice.forEach(function(item){
//     console.log(discountedprice);
// })

// ---------------------------------------

// total bill:::
// let orders = [
//   { item: "Book", quantity: 2, price: 200 },
//   { item: "Pen", quantity: 5, price: 20 },
//   { item: "Notebook", quantity: 3, price: 100 }
// ];
// let totalBill=0;
// orders.forEach(function(order){
//     totalBill=totalBill+(order.quantity*order.price);
// });
// console.log("total bill amount: ",totalBill);
// ------------------------------

// task:102 wala employee find krna hai
// let employees = [
//   { id: 101, name: "Aarav", salary: 50000 },
//   { id: 102, name: "Isha", salary: 60000 },
//   { id: 103, name: "Kabir", salary: 45000 }
// ];
// let result=employees.find(function(emp){
//     return emp.id===102;
// });
// console.log("employee found with id 102:",result.name);
// loop khtm hue vo find wali toh result me id hai hmari toh esiliye 
// result.name kiya
// ---------------------------------------
// task: rating ≥ 8.0 wali movies show karo
// let movies = [
//   { title: "Avengers", rating: 8.5 },
//   { title: "Joker", rating: 9.0 },
//   { title: "Race 3", rating: 2.5 },
//   { title: "Interstellar", rating: 8.6 }
// ];
// let rate=movies.filter(function(movie){
//     return movie.rating >= 8.0;
// });
// rate.forEach(function(movie){
//     console.log(movie.title);
// });
// -----------------------------
// let salary = [
//     {
//         name: "John",
//         payable: {
//             base: 20000,
//             hra: 5000,
//             da: 3000
//         },
//         deduction: {
//             pf: 1500,
//             tds: 800
//         }
//     },
//     {
//         name: "Alice",
//         payable: {
//             base: 25000,
//             hra: 6000,
//             da: 4000
//         },
//         deduction: {
//             pf: 2000,
//             tds: 1000
//         }
//     },
//     {
//         name: "Raj",
//         payable: {
//             base: 18000,
//             hra: 4000,
//             da: 2500
//         },
//         deduction: {
//             pf: 1200,
//             tds: 600
//         }
//     }
// ];

// function calculateSalary(salary){
//     let result=[];
//     for(let i=0;i<salary.length;i++){
    
//        let emp=salary[i];
//        let totalpayable=emp.payable.base+emp.payable.hra+emp.payable.da;
//     let totaldeduction=emp.deduction.pf+emp.deduction.tds;
//     let total=totalpayable-totaldeduction;
//     result.push(`salary of ${emp.name} is ${total}`);

//     }
//     return result;
// };
// console.log(calculateSalary(salary));  
// console.log("Nitheesh");
// // console.log("javascript")
// setTimeout(function (){
//     console.log("javascript")
// },5000)
// console.log("prabhu");

// // function (){
// //     console.log("javascript")
// // }

// suppose we  are building a e-commerce website

// const cart =["shoes", "pants", "kurta"];

// api.createOrder();
// api.proceedToPayment();

// here first we have create an order before we have to proceed to payment 
// (there is a dependencies btw them so we have to handle )
//it is an async operation so here call back came into picture.
const cart =["shoes", "pants", "kurta"];

api.createOrder(cart,function(){

    api.proceedToPayment(function(){

        api.showOrderSummary(function(){

             api.updateWallet();
        })
    })
});
//This is called call Back hell it is also called structure of DOM.








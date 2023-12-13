// inversion control is nothing but we loose the control of the code when we use call back.
// example here is  we  pass the call back function  into anthore  function so that we  have 
// given the control to the other function so we dont know wether it will execute or not.

const cart =["shoes", "pants", "kurta"];

api.createOrder(cart,function(){

    api.proceedToPayment()

});
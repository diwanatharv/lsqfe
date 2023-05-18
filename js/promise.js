const cart =["shoes","pants","kurta"]
const promise= createOrder(cart)
promise.then( function (){
    proceedtopayment(orderID)
})
function createOrder(cart){
const pr==new Promise(function (resolve, reject){
//createorder
//validatecart
//orderid
        if(!validatecart(cart)){
            const err= new Error("Cart is not valid")
            reject("")
        }
        const ordrid="1234"
        if(orderid){
            resolve(ordrid)
        }
    });


    return pr
}
//then is for the success
//catch is for the error takes an argumebt error.message
//catch should be called wherever needed
//no matter .then wll be called if there are not match
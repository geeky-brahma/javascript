const myNums = [1,2,3]

// const newNums = myNums.reduce( function (acc, currval) {
//     console.log(`Accumulator: ${acc} and currval: ${currval}`);
//     return acc+currval
// },0);

const newNums = myNums.reduce( (acc,currval) => acc+currval, 0 )
// console.log(newNums);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart
    .reduce( (acc, item) => acc + item.price, 0 )
console.log(priceToPay);
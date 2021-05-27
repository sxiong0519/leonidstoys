const toys = [
{
    id: 1,
    name: "train",
    price: 5,
    maker: "Fisher Price"   
},

{
    id: 2,
    name: "pony",
    price: 7,
    maker: "My Little Pony"
},

{
    id: 3,
    name: "barbie",
    price: 14,
    maker: "Mattel, Inc"
}
]


const drums = {
    id: 4,
    name: "drums",
    price: 20,
    maker: "Fisher Price"
}

const basketball = {
    id: 5,
    name: "basketball",
    price: 12,
    maker: "Spalding"
}

toys.push(drums)

toys.push(basketball)

console.log(toys)

for (const toy of toys) {
    console.log(`${toy.maker}'s ${toy.name} is ${toy.price} dollars.`)
}

for(const toy of toys){
    toy.price=toy.price + 3
}

for (const toy of toys) {
    console.log(`${toy.maker}'s ${toy.name} is now ${toy.price} dollars.`)
}

const findToy = 2
for (const toy of toys) {
    if (toy.id === findToy) {
        toy.price = toy.price + 3,
        console.log(`${toy.maker}'s ${toy.name} is now ${toy.price} dollars.`)
    }
}
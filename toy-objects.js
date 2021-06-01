// const toys = [
// {
//     id: 1,
//     name: "train",
//     price: 5,
//     maker: "Fisher Price"   
// },

// {
//     id: 2,
//     name: "pony",
//     price: 7,
//     maker: "My Little Pony"
// },

// {
//     id: 3,
//     name: "barbie",
//     price: 14,
//     maker: "Mattel, Inc"
// }
// ]


// const drums = {
//     id: 4,
//     name: "drums",
//     price: 20,
//     maker: "Fisher Price"
// }

// const basketball = {
//     id: 5,
//     name: "basketball",
//     price: 12,
//     maker: "Spalding"
// }

// toys.push(drums)

// toys.push(basketball)

// // console.log(toys)

// // for (const toy of toys) {
// //     console.log(`${toy.maker}'s ${toy.name} is ${toy.price} dollars.`)
// // }

// // for(const toy of toys){
// //     toy.price=toy.price + 3
// // }

// // for (const toy of toys) {
// //     console.log(`${toy.maker}'s ${toy.name} is now ${toy.price} dollars.`)
// // }

// // const findToy = 2
// // for (const toy of toys) {
// //     if (toy.id === findToy) {
// //         toy.price = toy.price + 3,
// //         console.log(`${toy.maker}'s ${toy.name} is now ${toy.price} dollars.`)
// //     }
// // }

// const addNewItem = toyObject => {
//     const lastIndex = toys.length - 1
//     const currentLastToy = toys[lastIndex]
//     const maxId = currentLastToy.id
//     const idNewItem = maxId + 1

// toyObject.id = idNewItem
// toys.push(toyObject)
// }

// const jumpropes = {
//     name: "jumprope",
//     price: 4,
//     maker: "Spalding"
// }

// addNewItem(jumpropes)

// for (const toy of toys) {
//     console.log(`${toy.maker}'s ${toy.name} is now ${toy.price} dollars.`)
// }

// console.log(toys)


// testing code 6.2.21

const toys = [
    {
    id: 1,
    name: "basketball",
    price: 5,
    color: "orange", 
    manufacturer: "Spalding",
    inventory: 0
},
{
    id: 2,
    name: "barbie",
    price: 8,
    color: "pink",
    manufacturer: "Mattel, Inc", 
    inventory: 12
},
{
    id: 3,
    name: "watch",
    price: 12,
    color: "red",
    manufacturer: "Fisher Price",
    inventory: 3
},
{
    id: 4,
    name: "hot wheels truck",
    price: 1,
    color: "blue",
    manufacturer: "Mattel, Inc",
    inventory: 30
}
]

const trains = {
    id: 5,
    name: "thomas train",
    price: 4,
    color: "blue",
    manufacturer: "Ertl Co",
    inventory: 5
}

toys.push(trains)

const iPad = {
    name: "toy iPad",
    price: 22,
    color: "white",
    manufacturer: "Fisher Price",
    inventory: 4
}

const tea = {
    name: "tea set",
    price: 14,
    color: "porcelain",
    manufacturer: "Mattel Inc",
    inventory: 28
}

const volleyball = {
    name: "volleyball",
    price: 10,
    color: "red",
    manufacturer: "Spalding",
    inventory: 15
}

const addNewId = toyObjects => {
    const lastIndexId = toys.length - 1
    const currentLastToy = toys[lastIndexId]
    const maxId = currentLastToy.id
    const idForNewToy = maxId + 1

    toyObjects.id = idForNewToy
    toys.push(toyObjects)
}

addNewId(iPad)
addNewId(tea)
addNewId(volleyball)

const toyObjectId = 4
for (const toy of toys) {
    if (toyObjectId === toy.id && toy.inventory > 10) {
        console.log(`The price for ${toy.name} is ${toy.price} dollars.`);
    }
    else {
        console.log('We are currently out of the item.');
    }
}


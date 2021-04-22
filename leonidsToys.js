// an array of objects. The objects are nested inside an array, asigned to the variable leonidsToys

const leonidsToys = [
  {
    id: 1,
    name: "Master Blaster",
    color: "Red and Green",
    price: 15.0,
    inStock: true,
  },
  {
    id: 2,
    name: "boopity",
    color: "Yurple",
    price: 4.20
  },
  {
    id: 3,
    name: "Prince Can't-find-his-shoes",
    color: ["Red", "Yellow", "Blue"],
    price: 5.0,
    inStock: true,
  },
];

const newToy1 = {
  id: 4,
  name: "Minecraff Warrior",
  color: "Purple",
  price: 5.0,
  inStock: true,
};

leonidsToys.push(newToy1);

const newToy2 = {
  name: "Minecraff Creepy Boi",
  color: "Green",
  price: 5.0,
  inStock: true,
};

// leonidsToys.push(newToy2);

const newToyToInventory = (toyObject) => {
    const lastIndex = leonidsToys.length - 1
    const currentLastToy = leonidsToys[lastIndex]
    const maxId = currentLastToy.id

    const idForNewToy = maxId + 1

    toyObject.id = 5

    leonidsToys.push(toyObject)
}

// const catalog = `The ${leonidsToys.name} is ${leonidsToys.price} dollars.`;

// const toyToFind = 2

// for (const toy of leonidsToys) {

    // if (toy.id === toyToFind) {
        // toy.price += toy.price * 0.05
        // console.log(`The ${toy.name} costs ${toy.price} dollars.`)
    // }
// }

newToyToInventory(newToy2)

//  console.log(leonidsToys)

for (const toy of leonidsToys) {
    console.log( `The ${toy.name} costs ${toy.price} dollars. It's color is ${toy.color}.` )
}

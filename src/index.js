const foods = [
    {
        name: "Flatburger",
        image: "./assets/food/flatburger.jpeg",
        description: "Our signature Flatburger which is a super delicious cheeseburger that'll leave you wanting another Flatburger! It's too good to be true!"
    },
    {
        name: "Maple Bacon Burger",
        image: "./assets/food/maple-bacon-burger.jpeg",
        description: "A great option for a breakfast burger or a great option for brunch if you're hungry enough to eat 2 of these burgers!"
    },
    {
        name: "Mushroom Burger",
        image: "./assets/food/mushroom-burger.webp",
        description: "A mushroom burger with our exclusive Flatburger melted cheese!"
    },
    {
        name: "Avocado Bun Burger",
        image: "./assets/food/avocado-bun-burger.jpeg",
        description: "A healthier take on our signature Flatburger but with avocado buns!"
    },
    {
        name: "Ramen Burger",
        image: "./assets/food/ramen-burger.jpeg",
        description: "If you love ramen and burgers, what are you waiting for? Order our exclusive ramen burger now!"
    },
    {
        name: "French Fries",
        image: "./assets/food/french-fries.jpeg",
        description: "The good old french fries made in Flatburger style!"
    },
    {
        name: "Burrito",
        image: "./assets/food/burrito.webp",
        description: "A Flatburger style burrito with our exclusive Flatburger melted cheese and any meat of your choosing in addition to your choice of additional ingredients!"
    },
    {
        name: "Taco",
        image: "./assets/food/taco.jpeg",
        description: "The Flatburger exclusive Taco! Get it while supplies last!"
    },
    {
        name: "Hot Dog",
        image: "./assets/food/hot-dog.jpeg",
        description: "The Flatburger exclusive Hot Dog! Get it while supplies last!"
    },
    {
        name: "Onion Rings",
        image: "./assets/food/onion-rings.jpeg",
        description: "The Flatburger exclusive Onion Rings! Get them while supplies last!"
    }
]

const restaurantMenu = document.getElementById('restaurant-menu')

foods.forEach(food => {
    addFoodImageToRestaurantMenu(food)
})



function displayFoodDetails(food){
    const foodDetailImage = document.querySelector('.detail-image')
    foodDetailImage.src = food.image

    const foodName = document.querySelector('.name')
    foodName.textContent = food.name
    
    const foodDescriptionDisplay = document.getElementById('description-display')
    foodDescriptionDisplay.textContent = food.description
}

displayFoodDetails(foods[0])


function addFoodImageToRestaurantMenu(food){
    const foodImage = document.createElement('img')
    foodImage.src = food.image
    restaurantMenu.appendChild(foodImage)

    // Deliverable 1
    foodImage.addEventListener('click', () => {
        displayFoodDetails(food)
     })
}


// const foodDetailImage = document.querySelector('.detail-image')
// foodDetailImage.src = foods[0].image

// const foodName = document.querySelector('.name') 
// foodName.textContent = foods[0].name

// const foodDescriptionDisplay = document.querySelector('#description-display')
// foodDescriptionDisplay.textContent = foods[0].description



// // Click Event , Alert, Adding to Page after Event

// const button = document.createElement("button")
// button.textContent = "click me"
// document.body.append(button)
// button.addEventListener('click', () => {
//   alert('You clicked the button')
//   createAndAppend()
// })

// function createAndAppend(){
//     const h1 = document.createElement('h1')
//     h1.textContent = "Welcome"
//     document.body.append(h1)
// }


// // Submit Event

// const newFoodForm = document.getElementById('new-food')
// newFoodForm.addEventListener('submit', (e) => {
//     e.preventDefault()
//     console.log("You've submitted")
// })



// Deliverable 2 

const newFoodForm = document.getElementById('new-food')
newFoodForm.addEventListener('submit', (e) => {

    e.preventDefault()

    const newNameInputELement = document.getElementById('new-name')
    const newImageInputElement = document.getElementById('new-image')
    const newTextAreaElement = document.getElementById('new-description')

    const newFood = {
        name: newNameInputELement.value,
        image: newImageInputElement.value,
        description: newTextAreaElement.value
    }

    addFoodImageToRestaurantMenu(newFood)

    newFoodForm.reset()

    // const foodImageElement = document.createElement('img')
    // foodImageElement.src = newImageInputElement.value 
    // restaurantMenu.append(foodImageElement)

    // foodImageElement.addEventListener('click', () => {
    //     displayFoodDetails(newFood)
    // })

    // displayFoodDetails(newFood)

})





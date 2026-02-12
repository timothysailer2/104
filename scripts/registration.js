// Pet object literals
let pet1 = {
    name: "Walter",
    age: 3,
    gender: "Male",
    service: "Grooming",
    breed: "Golden Retriever"
};

let pet2 = {
    name: "Nova",
    age: 2,
    gender: "Female",
    service: "Vaccination",
    breed: "Siberian Husky"
};

let pet3 = {
    name: "Max",
    age: 5,
    gender: "Male",
    service: "Checkup",
    breed: "Bulldog"
};
// Constructor for pets
function Pet(name, age, breed, gender, service) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.gender = gender;
    this.service = service;
}
// Array to store pets
let petsList = [pet1, pet2, pet3];
// Creating 3 new pets
let pet4 = new Pet("Buddy", 3, "Golden Retriever", "Male", "Grooming");
let pet5 = new Pet("Luna", 2, "Siamese Cat", "Female", "Vaccination");
let pet6 = new Pet("Rocky", 5, "Bulldog", "Male", "Nail Trim");

// Function to display pet names
function displayPets() {
    let list = document.getElementById("petsList");
    list.innerHTML = "";

    for (let i = 0; i < petsList.length; i++) {
        let li = document.createElement("li");
        li.textContent = petsList[i].name;
        list.appendChild(li);
    }
}











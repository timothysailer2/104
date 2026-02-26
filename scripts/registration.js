// Existing Pet Object Literals
let pet1 = {
    name: "Buddy",
    age: 3,
    gender: "Male",
    service: "Grooming",
    breed: "Golden Retriever"
};

let pet2 = {
    name: "Luna",
    age: 2,
    gender: "Female",
    service: "Bath",
    breed: "Husky"
};

let pet3 = {
    name: "Max",
    age: 5,
    gender: "Male",
    service: "Nail Trim",
    breed: "Bulldog"
};


// ✅ Constructor
function Pet(name, age, breed, gender, service){
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.gender = gender;
    this.service = service;
}


// ✅ Pets created using constructor
let pet4 = new Pet("Rocky", 4, "Boxer", "Male", "Bath");
let pet5 = new Pet("Bella", 1, "Poodle", "Female", "Grooming");
let pet6 = new Pet("Charlie", 6, "Labrador", "Male", "Vet Check");


// ✅ Array
let petsList = [pet1, pet2, pet3, pet4, pet5, pet6];


// Display Pets Function
function displayPets(){

    let list = document.getElementById("petsNames");
    list.innerHTML = "";

    for(let i = 0; i < petsList.length; i++){
        list.innerHTML += `<li>${petsList[i].name}</li>`;
    }
}

window.onload = displayPets;
// Function to display ONE pet row
function displayRow(pet, index){

    let table = document.getElementById("petsTableBody");

    table.innerHTML += `
        <tr>
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.breed}</td>
            <td>${pet.gender}</td>
            <td>${pet.service}</td>
            <td>
                <button class="btn btn-danger btn-sm"
                    onclick="deletePet(${index})">
                    Delete
                </button>
            </td>
        </tr>
    `;
}
function displayPets(){

    let table = document.getElementById("petsTableBody");
    table.innerHTML = "";

    for(let i = 0; i < petsList.length; i++){
        displayRow(petsList[i], i);
    }
}
function registerPet(){

    // Get values from form
    let name = document.getElementById("petName").value;
    let age = document.getElementById("petAge").value;
    let breed = document.getElementById("petBreed").value;
    let gender = document.getElementById("petGender").value;
    let service = document.getElementById("petService").value;

    // Create new pet using constructor
    let newPet = new Pet(name, age, breed, gender, service);

    // Add pet to array
    petsList.push(newPet);

    // Display new row in table
    displayRow(newPet);

    // Reset form
    document.querySelector("form").reset();
    petsList.push(newPet);

// redraw table
displayPets();

// reset form
document.querySelector("form").reset();
}
function deletePet(index){

    // remove pet from array
    petsList.splice(index, 1);

    // redraw table
    displayPets();
}

window.onload = displayPets;
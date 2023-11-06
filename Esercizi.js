//Esercizio 1
class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  compareAge(user) {
    if (this.age > user.age) {
      return `${this.firstName} is older than ${user.firstName}`;
    } else if (this.age < user.age) {
      return `${this.firstName} is younger than ${user.firstName}`;
    } else {
      return `${this.firstName} and ${user.firstName} are the same age`;
    }
  }
}

let user1 = new User("Homer", "Simpson", 50, "Sprinfield");
let user2 = new User("Marge", "Simpson", 45, "Shelbyville");

console.log(user1.compareAge(user2));

//Esercizio 2

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  compareOwner(pet) {
    if (this.ownerName === pet.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}

let pet1 = new Pet("Link", "Federico", "Cane", "Meticcio");
let pet2 = new Pet("Peter", "Emilio", "Cane", "Labrador");
let pet3 = new Pet("Bunny", "Federico", "Coniglio", "Nano");

console.log(pet1.compareOwner(pet2));
console.log(pet1.compareOwner(pet3));

// JavaScript Form

let petArray = [];
document.getElementById("petForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let petName = document.getElementById("petName").value;
  let ownerName = document.getElementById("ownerName").value;
  let species = document.getElementById("species").value;
  let breed = document.getElementById("breed").value;

  let pet = new Pet(petName, ownerName, species, breed);
  petArray.push(pet);

  displayPetList(petArray);

  function displayPetList(petArray) {
    let listHtml = '<ul class="petList">';

    petArray.forEach(function (pet) {
      listHtml +=
        "<li>" +
        pet.petName +
        " (" +
        pet.species +
        " " +
        pet.breed +
        ") appartiene a " +
        pet.ownerName +
        "</li>";
    });

    listHtml += "</ul>";

    document.getElementById("petListContainer").innerHTML = listHtml;
  }
});

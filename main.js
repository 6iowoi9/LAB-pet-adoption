const pets = [
  {
    id: 1,
    name: "Dusty",
    color: "Green",
    specialSkill: "Gives sincere apologies.",
    type: "cat",
    imageUrl:
      "https://loremflickr.com/cache/resized/6090_6084671948_8e0fba3f76_320_240_nofilter.jpg",
  },
  {
    id: 2,
    name: "Trouble",
    color: "Brown",
    specialSkill:
      "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
    type: "dino",
    imageUrl:
      "https://shop.nms.ac.uk/cdn/shop/products/Tyrannosaurus_brown_3.jpg?v=1437666777",
  },
  {
    id: 3,
    name: "Whiskers",
    color: "Yellow",
    specialSkill: "Can prove he is a real man by drinking whiskey.",
    type: "dino",
    imageUrl:
      "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg",
  },
  {
    id: 4,
    name: "Coco",
    color: "Black",
    specialSkill: "Burps minimally.",
    type: "dog",
    imageUrl:
      "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg",
  },
  {
    id: 5,
    name: "Spooky",
    color: "Brown",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "cat",
    imageUrl:
      "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
  },
  {
    id: 6,
    name: "Tiger",
    color: "Black",
    specialSkill: "Can read (but cannot understand) Hebrew.",
    type: "dog",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg",
  },
  {
    id: 7,
    name: "Oreo",
    color: "Yellow",
    specialSkill: "Able to stop chewing ice or whistling on request.",
    type: "cat",
    imageUrl:
      "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg",
  },
  {
    id: 8,
    name: "Ginger",
    color: "Grey",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "dino",
    imageUrl:
      "https://static.wikia.nocookie.net/dinosaur-protection-group/images/e/ef/Jurassic_world_indominus_rex_v2_by_sonichedgehog2-d9j1f9q.png/revision/latest?cb=20180925170817",
  },
  {
    id: 9,
    name: "Sassy",
    color: "Brown",
    specialSkill: "Adept at talking self and others out of fights.",
    type: "cat",
    imageUrl:
      "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg",
  },
  {
    id: 10,
    name: "Sammy",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "cat",
    imageUrl:
      "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg",
  },
  {
    id: 11,
    name: "Coco",
    color: "Orange",
    specialSkill: "Can be around food without staring creepily at it.",
    type: "dino",
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/09/25/19/52/bear-8275920_1280.jpg",
  },
  {
    id: 12,
    name: "Buster",
    color: "Green",
    specialSkill: "Does not use excessive acronyms.",
    type: "dog",
    imageUrl:
      "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg",
  },
  {
    id: 13,
    name: "Chester",
    color: "Red",
    specialSkill:
      "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
    type: "dog",
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/10/06/07/48/duck-8297668_1280.jpg",
  },
  {
    id: 14,
    name: "Samantha",
    color: "Brown",
    specialSkill: "Always up for dessert.",
    type: "cat",
    imageUrl:
      "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg",
  },
  {
    id: 15,
    name: "Coco",
    color: "Red",
    specialSkill: "Burps minimally.",
    type: "cat",
    imageUrl:
      "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg",
  },
  {
    id: 16,
    name: "Smokey",
    color: "Brown",
    specialSkill: "Drives at a safe rate of speed in snow or rain.",
    type: "dino",
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/09/03/01/16/dragon-fly-8229773_1280.jpg",
  },
  {
    id: 17,
    name: "Muffin",
    color: "Yellow",
    specialSkill:
      "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
    type: "cat",
    imageUrl:
      "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg",
  },
  {
    id: 18,
    name: "Salem",
    color: "Brown",
    specialSkill: "Proficient in air guitar",
    type: "dino",
    imageUrl:
      "https://cdn.pixabay.com/photo/2019/11/08/11/56/kitten-4611189_1280.jpg",
  },
  {
    id: 19,
    name: "Callie",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "dog",
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg",
  },
  {
    id: 20,
    name: "Spooky",
    color: "Black",
    specialSkill: "Uses litter box at appropriate hours.",
    type: "cat",
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg",
  },
  {
    id: 21,
    name: "Miss kitty",
    color: "Red",
    specialSkill: "Owns a Nintendo Power Glove.",
    type: "dino",
    imageUrl:
      "https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_640.jpg",
  },
  {
    id: 22,
    name: "Snuggles",
    color: "Orange",
    specialSkill: "Is comfortable with jokes about his receding hairline.",
    type: "cat",
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/11/06/09/53/tiger-2923186_640.jpg",
  },
  {
    id: 23,
    name: "Buddy",
    color: "Red",
    specialSkill: "Enjoys fine wine.",
    type: "dog",
    imageUrl:
      "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg",
  },
  {
    id: 24,
    name: "George",
    color: "Brown",
    specialSkill:
      "Participates in karaoke but does not force others to go out to karaoke.",
    type: "dog",
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/03/28/10/05/kitten-1285341_640.jpg",
  },
  {
    id: 25,
    name: "Salem",
    color: "Red",
    specialSkill: "Knows the words to 4 rap songs.",
    type: "cat",
    imageUrl:
      "https://cdn.pixabay.com/photo/2018/03/26/02/05/cat-3261420_640.jpg",
  },
  {
    id: 26,
    name: "Bubba",
    color: "Yellow",
    specialSkill: "Cleans himself.",
    type: "dog",
    imageUrl:
      "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg",
  },
  {
    id: 27,
    name: "Chloe",
    color: "Green",
    specialSkill: "Admits he is wrong",
    type: "dino",
    imageUrl:
      "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg",
  },
  {
    id: 28,
    name: "Nala",
    color: "Purple",
    specialSkill: "Dances when he has to.",
    type: "cat",
    imageUrl:
      "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg",
  },
  {
    id: 29,
    name: "Oscar",
    color: "Green",
    specialSkill:
      "Gives hugs with appropriate pressure and for the right length of time.",
    type: "cat",
    imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg",
  },
  {
    id: 30,
    name: "Lucy",
    color: "Red",
    specialSkill: "Doesn’t get weirded out by the word “moist.”",
    type: "dino",
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/04/27/09/21/cat-5098930_640.jpg",
  },
];
const app = document.querySelector("#app");

const Deletepet= (event) =>{
  if(event.target.id.includes("delete")){
    const [,id] = event.target.id.split("--")
    const index = pets.findIndex(obj => obj.id === Number(id))
    pets.splice(index,1)
    console.log(pets.length)
    rendertoDom(pets)
  }
}

app.addEventListener("click",Deletepet)
// Function to render cards to DOM that takes an array
const rendertoDom = (array) => {
  // Create our domstring so we can push our cards to it
  let domString = "";
  // Loop over the array and create our pets cards
  for (object of array) {
    domString += `<div class="card" style="width: 18rem;">
    <img src="${object.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${object.name}</h5>
    <p  class="card-text">${object.color}</p>
    </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${object.specialSkill}</li>
    <li class="list-group-item" id="animaltype">${object.type}</li>
  </ul>
  <button class="btn btn-danger"  id="delete--${object.id}">Delete</button>
</div>`;
  }
  // Select our HTML div
  // Set our cards to our div's inner HTML
  app.innerHTML = domString;
};
// Invoke our function and send in our full pets array
// This will put our cards on the page on load
rendertoDom(pets);
// Now let's make our vegan button work!
// Select our HTML button
const catbutton = document.querySelector("#cat");
// Create our function to filter out our vegan pets
const filter = () => {
  // Create an empty array to hold our vegan pets objects
  // Just like we created our empty string to hold our cards!
  let catarray = [];
  // Loop over that pets arrray
  for (pet of pets) {
    // Check to see if the pet  is cat
    if (pet.type === "cat") {
      // If it is push it into our pet array
      catarray.push(pet);
    }
  }
  rendertoDom(catarray);
};
catbutton.addEventListener("click", filter);

rendertoDom(pets);
// Now let's make our vegan button work!
// Select our HTML button
const dogbutton = document.querySelector("#dog");
// Create our function to filter out our vegan pets
const filter1 = () => {
  // Create an empty array to hold our vegan pets objects
  // Just like we created our empty string to hold our cards!
  let dogarray = [];
  // Loop over that pets arrray
  for (pet of pets) {
    // Check to see if the pet  is cat
    if (pet.type === "dog") {
      // If it is push it into our pet array
      dogarray.push(pet);
    }
  }
  rendertoDom(dogarray);
};
dogbutton.addEventListener("click", filter1);

rendertoDom(pets);
// Now let's make our vegan button work!
// Select our HTML button
const dinobutton = document.querySelector("#dino");
// Create our function to filter out our vegan pets
const filter2 = () => {
  // Create an empty array to hold our vegan pets objects
  // Just like we created our empty string to hold our cards!
  let dinoarray = [];
  // Loop over that pets arrray
  for (pet of pets) {
    // Check to see if the pet  is cat
    if (pet.type === "dino") {
      // If it is push it into our pet array
      dinoarray.push(pet);
    }
  }
  rendertoDom(dinoarray);
};
dinobutton.addEventListener("click", filter2);

rendertoDom(pets);
// Now let's make our vegan button work!
// Select our HTML button
const ALLbutton = document.querySelector("#ALL");
// Create our function to filter out our vegan pets
const filter3 = () => {
  // Create an empty array to hold our vegan pets objects
  // Just like we created our empty string to hold our cards!
  let ALLarray = [];
  // Loop over that pets arrray
  for (pet of pets) {
    // Check to see if the pet  is cat
    if ((pet.type = pet.type)) {
      // If it is push it into our pet array
      ALLarray.push(pet);
    }
  }
  rendertoDom(ALLarray);
};
ALLbutton.addEventListener("click", filter3);

const form = document.querySelector("form");

const createPet = (e) => {
  e.preventDefault();

  const newPetObject = {
    id: pets.length + 1,
    name: document.querySelector("#PetName").value,
    color: document.querySelector("#PetColor").value,
    specialSkill: document.querySelector("#specialSkill").value,
    type: document.querySelector("#pettype").value,
    imageUrl: document.querySelector("#petimage").value,
  };

  pets.push(newPetObject);
  rendertoDom(pets);
  form.reset();
};
form.addEventListener("submit", createPet);

// Reviews functionality 

const reviews = [
  {
    id: 1,
    name: "Anakin Skywalker",
    job: "CEO of The Jedi",
    img: "images/anakin.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat doloribus architecto, itaque corrupti rerum iusto. Placeat doloribus architecto."
},
  {
  id: 2,
  name: "Obi-Wan Kanobi",
  job: "Chairman of The Force",
  img: "images/obiwan.png",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat doloribus architecto, itaque corrupti rerum iusto. Sit amet consectetur adipisicing elit."
},
  {
  id: 3,
  name: "Rex",
  job: "CEO of The Clones",
  img: "images/rex.png",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat doloribus architecto, itaque corrupti rerum iusto. Lorem ipsum."
}
];

// review - select items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// set starting item
let currentItem = 0;

// load intial item
window.addEventListener('DOMContentLoaded', function(){
  showPerson(currentItem);
});

// show person based on item
function showPerson(person){
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person
nextBtn.addEventListener('click', function() {
  currentItem++;
  if(currentItem > reviews.length - 1){
    currentItem = 0;
  }
  showPerson(currentItem);
});

// show prev person
prevBtn.addEventListener('click', function() {
  currentItem--;
  if(currentItem < 0){
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});


// Toggle

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar');
const overlay = document.getElementById('overlay');
const links = document.querySelector('.navbar > ul')

// actives overlay and menu items
menu.addEventListener('click', function(){
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
  overlay.classList.toggle('on');
});

// removes overlay and hides menu items when click anywhere on overlay
overlay.addEventListener('click', function() {
  menu.classList.remove('is-active');
  menuLinks.classList.remove('active');
  overlay.classList.remove('on');
});

// removes overlay and hides menu items when one of the links are clicked
links.addEventListener('click', function() {
  menu.classList.remove('is-active');
  menuLinks.classList.remove('active');
  overlay.classList.remove('on');
})
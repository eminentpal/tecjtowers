const questions = [
  {
    text: "What is his favourite fruit?",
    answers: [
      { option: "Apple", isCorrect: false },
      { option: "Mango", isCorrect: false },
      { option: "Banana", isCorrect: true },
      { option: "Pineapple", isCorrect: false },
    ],
  },
  {
    text: "Which school he attended?",
    answers: [
      { option: "Unijos", isCorrect: true },
      { option: "Uniben", isCorrect: false },
      { option: "UNN", isCorrect: false },
      { option: "Unilag", isCorrect: false },
    ],
  },
  {
    text: "What is his coding language?",
    answers: [
      { option: "Java", isCorrect: false },
      { option: "Javascript", isCorrect: true },
      { option: "Golang", isCorrect: false },
      { option: "Python", isCorrect: false },
    ],
  },
  {
    text: "What is his favourite food?",
    answers: [
      { option: "Jollof Rice", isCorrect: false },
      { option: "Beans", isCorrect: false },
      { option: "Yam", isCorrect: false },
      { option: "Eguisi and Fufu", isCorrect: true },
    ],
  },
];

let index = 0;

const images = [
  "./images/ladies.jpg",
  "https://www.bellanaijaweddings.com/wp-content/uploads/2019/03/Nkiruka-Frank-BellaNaija-Weddings-140.jpg",
  "./images/event5.jpg",
  "./images/event3.jpg",
];

const header = document.getElementById("header-cont");

console.log(header.style.backgroundImage);
function chnage() {
  if (index === 3) {
    index = 0;
  } else {
    index++;
  }

  //   console.log(index);

  header.style.backgroundImage = `url(${images[index]})`;
}

setInterval(() => chnage(), 6000);

const countOne = document.querySelector(".counter");
const countTwo = document.querySelector(".counter-2");
let x = 0;

let y = 50;
let a = 70;

function addNum() {
  //   countEl.forEach((element) => {
  //     element.innerHTML = x;
  //     console.log(element);
  //   });
  countOne.innerHTML = x;
  countTwo.innerHTML = x;
  x += 1;
  console.log(x);
  if ((x > y) & (x > a)) {
    clearInterval(timer);
  }
}

// const timer = window.setInterval(() => addNum(), 60);

//TESTIMONIAL

const testimonies = [
  {
    id: 1,
    image:
      "https://happy-events.cmsmasters.net/wp-content/uploads/2015/11/1-1.jpg",
    name: "Victorial Akin",
    text: "  My family and I are beyond happy to have them plan our wedding.",
  },
  {
    id: 2,
    image:
      "https://happy-events.cmsmasters.net/wp-content/uploads/2015/11/Untitled-1-1.jpg",
    name: "Blessing James",
    text: "TECJ Towers did a perfect  decoration and perfect buffet for my little sisters birthday party!",
  },
  {
    id: 3,
    image:
      "https://happy-events.cmsmasters.net/wp-content/uploads/2015/11/2-4.jpg",
    name: "Peace Samuel",
    text: " Look no further! You are in the right place to plan your event.",
  },
];

let currentItem = 0;

const img = document.querySelector(".review-img");
const h = document.querySelector(".review-h");
const p = document.querySelector(".review-p");

const spans = document.querySelectorAll(".span");
const back = document.querySelector(".back");

console.log(spans);
const forward = document.querySelector(".forward");

window.addEventListener("DOMContentLoaded", () => {
  showPerson();
});

function showPerson() {
  const item = testimonies[currentItem];

  img.src = item.image;
  h.textContent = item.name;
  p.textContent = item.text;

  spans.forEach((element, index) => {
    if (index === currentItem) {
      element.classList.add("active-span");
    } else {
      element.classList.remove("active-span");
    }
  });
}

forward.addEventListener("click", () => {
  currentItem++;
  if (currentItem > testimonies.length - 1) {
    currentItem = 0;
  }

  showPerson();
});

back.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = testimonies.length - 1;
  }

  showPerson();
});

function changeAutomatic() {
  currentItem++;
  if (currentItem > testimonies.length - 1) {
    currentItem = 0;
  }

  showPerson();
}

const timer = window.setInterval(() => changeAutomatic(), 4000);

let nums = [7, 2, 3, 4, 15, 16, 33];

function find_max(nums) {
  let max_num = Number.NEGATIVE_INFINITY;
  for (let num of nums) {
    console.log(num);
    if (num > max_num) {
      max_num = num;
    }
  }
  return max_num;
}

console.log(find_max(nums));

const open = document.querySelector(".open");
const close = document.querySelector(".close");
const nav = document.querySelector(".nav-links");
const closeNavs = document.querySelectorAll(".scroll-link");
// const navbar = document.querySelector("")

closeNavs.forEach((hide) => {
  hide.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(hide);
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    // const navHeight = navbar.getBoundingClientRect().height;
    let position = element.offsetTop;
    console.log("position");
    window.scrollTo({
      left: 0,
      top: position,
    });

    nav.classList.remove("show-links");
  });
});

open.addEventListener("click", () => {
  nav.classList.add("show-links");
  console.log(nav.classList);
});

close.addEventListener("click", () => {
  nav.classList.remove("show-links");
  console.log(nav.classList);
});

// this is for scroll to hide the scroll button
const scroll = document.querySelector(".scroll");
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > 500) {
    scroll.classList.add("show-scroll");
  } else {
    scroll.classList.remove("show-scroll");
  }
});

// scroll.addEventListener("click", () =>{
//   scrollTo()
// })

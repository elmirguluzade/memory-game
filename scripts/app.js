const imgs = [
  {id: 0,src: "../img/swift.png"},
  {id: 1,src: "../img/nodejs.png"},
  {id: 2,src: "../img/javascript.png"},
  {id: 3,src: "../img/typescript.png"},
  {id: 4,src: "../img/python.png"},
  {id: 5,src: "../img/react-js.png"},
  {id: 6,src: "../img/mdb.png"},
  {id: 7,src: "../img/tailwind.png"},
];

let person = prompt("Please Enter Your Name: ");
if(person != ''){
    document.getElementById("name").innerHTML = `Welcome, ${person}`;
}

// Randomizer
const cardImgs = document.querySelectorAll("img");
const items = imgs.concat(imgs);


const randomizer = () => {
  for (let i = 0; i < items.length - 1; i++){
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
};

// Storing Card
const storeCard = () => {
  const randomedArr = randomizer();
  for (let i = 0; i < randomedArr.length; i++) {
    imgs.forEach((img) => {
      if (img.id == randomedArr[i].id) {
        cardImgs[i].setAttribute("src", img.src);
      }
    });
  }
};

storeCard();

// Flipping Card
let arrTime = [];
let counterArr = [];
let remaingingLife = 9;
const flipCard = () => {
  document.addEventListener("click", (event) => {
    const el = event.target.querySelector("img");
    if(event.target.classList.contains('container') || event.target.classList.contains('cards') || event.target.classList.contains('body')){
      return;
    }
    arrTime.push(0);
    el.classList.add("active");
    let flippedArr = document.getElementsByClassName("active");
    let flippedArray = Array.prototype.slice.call(flippedArr);
    if (arrTime.length % 2 == 0 && arrTime.length > 1) {
      flippedArray.forEach((count) => {
        if (count.src == el.src) {
          counterArr.push(count);
        }
      });
      if (counterArr.length % 2 != 0) {
        setTimeout(() => {
          cardImgs.forEach((img) => {
            img.classList.remove("active");
          });
          arrTime = [];
          counterArr = [];
          if (remaingingLife == 0) {
            document.querySelector(".life").style.display = "none";
            document.getElementById("lose").style.display = "flex";
            document.querySelector('.container').style.display = 'none';
          }
          if (remaingingLife < 4 && remaingingLife > 0) {
            document.getElementById("life").innerHTML = `Your Lives: ${remaingingLife--}`;
            document.getElementById("life").style.color = "crimson";
          } else {
            document.getElementById("life").innerHTML = `Your Lives: ${remaingingLife--}`;
          }
        }, 300);
        winArr = [];
      } else {
        counterArr = [];
        let winArr = [];
        cardImgs.forEach((img) => {
          if(img.classList.contains("active")){
            winArr.push(img);
          }
          if(winArr.length == 16){
            document.getElementById("win").style.display = "flex";
            document.querySelector(".life").style.display = "none";
            document.querySelector('.container').style.display = 'none';
          }
        });
      }
    }
  });
};

flipCard();

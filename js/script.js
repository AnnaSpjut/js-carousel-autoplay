const imgWrapper = document.querySelector('.img-wrapper');
let counter = 0

const up = document.querySelector('.up');
const down =document.querySelector('.down');

const images = [
  'assets/img/01.webp',
  'assets/img/02.webp',
  'assets/img/03.webp',
  'assets/img/04.webp',
  'assets/img/05.webp',
]

for(let i = 0; i < images.length; i++){
  const img = images[i];
  imgWrapper.innerHTML += `<img class="img hide" src="${img}">`;
}

const itemsCollection = document.getElementsByClassName('img');

itemsCollection[counter].classList.remove('hide');


down.addEventListener('click', function(){
  itemsCollection[counter--].classList.add('hide');
  itemsCollection[counter].classList.remove('hide');
})

up.addEventListener('click', function(){
  itemsCollection[counter++].classList.add('hide');
  itemsCollection[counter].classList.remove('hide');
})






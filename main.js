let frameWeb = document.getElementById('frame_web');
let frameWeb1 = document.getElementById('inside_web');
let frameContent = document.getElementById('frame_content');
let frameContent1 = document.getElementById('inside_content');
let frameAnimation = document.getElementById('frame_animation');
let frameAnimation1 = document.getElementById('inside_animation');
let frameUx = document.getElementById('frame_ux');
let frameUx1 = document.getElementById('inside_ux');
let frame = document.querySelector('.frame');
let frame1 = document.querySelector('.inside');
let btnWeb = document.getElementsByClassName('btn_web');
let btnContent = document.getElementsByClassName('btn_content');
let btnAnimation = document.getElementsByClassName('btn_animation');
let btnUx = document.getElementsByClassName('btn_ux');
let body = document.querySelector('.trees');
let image = 1;
let mobile = document.querySelector('.mobile');
let ex = document.querySelector('.far');
let responsive = document.querySelector('.responsive');
let redesign = document.querySelector('.redesign');

function closeMe(frame) {
  // console.log('You are closing: ', frame);
  if (frame == 'frame_web') {
    frameWeb.style.display = 'none';
  }
  else if (frame == 'frame_content') {
    frameContent.style.display = 'none';

  }
  else if (frame == 'frame_animation') {
    frameAnimation.style.display = 'none';
  }
  else if (frame == 'frame_ux') {
    frameUx.style.display = 'none';
  }

  body.style.overflow = 'scroll';
}

btnWeb[0].addEventListener('click', function() {
  frameWeb.style.display = 'flex';
  frameWeb1.style.display = 'flex';
  body.style.overflow = 'hidden';
})
btnContent[0].addEventListener('click', function() {
  frameContent.style.display = 'flex';
  frameContent1.style.display = 'flex';
  body.style.overflow = 'hidden';
})
btnAnimation[0].addEventListener('click', function() {
  frameAnimation.style.display = 'flex';
  frameAnimation1.style.display = 'flex';
  body.style.overflow = 'hidden';
})
btnUx[0].addEventListener('click', function() {
  console.log();
  frameUx.style.display = 'flex';
  frameUx1.style.display = 'flex';
  body.style.overflow = 'hidden';
})
/*
ex.addEventListener('click', function() {
  console.log(frame);
  frame.style.display = 'none';
  frame1.style.display = 'none';
  body.style.overflow = 'scroll';
})*/
// iPhone image changer function
window.onload = () => {
  setInterval(() => {
    mobile.src = `mobile${image}.png`;
    responsive.src = `responsive${image}.png`;
    redesign.src = `redesign${image}.png`;
    if (image < 4) {
      image++
    } else {
      image = 1;
    }
  }, 2500);
}

/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const curtimetext = document.querySelector('#curtimetext')
const durtimetext = document.querySelector('#durtimetext')
const control = document.querySelector('.player__controls')
const vol = document.querySelector('.vol')
const speedBtn = document.querySelector('#speed')
const fastBtn = document.querySelectorAll('.speed0')
const zeroFive = document.querySelector('#OneFive')
const OneX = document.querySelector('#One')
const twoX = document.querySelector('#Two')
const threeX = document.querySelector('#Three')
const clock = document.querySelector('.clock')
let count = 0


/* Build out functions */
function togglePlay() {
  if(video.paused){
    video.play()
    control.classList.add('player__controls')
    control.classList.remove('player__controls1')
  }else{
   control.classList.add('player__controls1')
   control.classList.remove('player__controls')
    video.pause()
  }
}

function updateButton() {
  if (video.paused) {
    toggle.innerHTML = '<i class="fas fa-play"></i>';
  } else {
    toggle.innerHTML = '<i class="fas fa-pause"></i>';
  }
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function seektimeupdate() {
  var curmins = Math.floor(video.currentTime / 60);
  var cursecs = Math.floor(video.currentTime - curmins * 60);
  var durmins = Math.floor(video.duration / 60);
  var dursecs = Math.floor(video.duration - durmins * 60);
  if (cursecs < 10) {
    cursecs = "0" + cursecs;
  }
  if (dursecs < 10) {
    dursecs = "0" + dursecs;
  }
  if (curmins < 10) {
    curmins = "0" + curmins;
  }
  if (durmins < 10) {
    durmins = "0" + durmins;
  }
  curtimetext.innerHTML = curmins + ":" + cursecs;
  durtimetext.innerHTML = durmins + ":" + dursecs;

  console.log(curmins + ":" + cursecs + '/' + durmins + ":" + dursecs)
}

function showBtn(){
  count = count + 1
  fastBtn.forEach((btn) => {
   if(count % 2 != 0){
    btn.classList.remove('speed0')
    btn.classList.add('speed1')
   }else{
    btn.classList.remove('speed1')
    btn.classList.add('speed0')
   }
  })
}


/* Hook up the event listeners */

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
video.addEventListener("timeupdate", seektimeupdate, false);
speedBtn.addEventListener('click', showBtn)
zeroFive.addEventListener('click', () => {
  video.playbackRate = 0.5;
})
OneX.addEventListener('click', () => {
  video.playbackRate = 1.0;
})
twoX.addEventListener('click', () => {
  video.playbackRate = 2.0;
})
threeX.addEventListener('click', () => {
  video.playbackRate = 3.0;
})

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
video.addEventListener('ended', () => {
  toggle.innerHTML = '<i class="fas fa-redo"></i>';
})
/*---------------------------------------------------------------------------*/
/*********************************************************************************/  
  let watched = new Array(0);
  
  video.addEventListener('timeupdate',timeupdate,false)
  function timeupdate() {
    currentTime = parseInt(video.currentTime);
    watched[currentTime] = 1;
    console.log(watched);
    var sum = watched.reduce(function(previousValue, currentValue) {return previousValue + currentValue}, 0);
    clock.innerHTML = (sum-1)+" secs"+` / Total Price is $${(sum-1)*0.01.toFixed(4)}`;
  }
  /*******************************************************************************************/
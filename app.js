const container = document.querySelector(".container");
const image = document.querySelector("#music-image");
const title = document.querySelector(".music-details .title");
const singer = document.querySelector(".music-details .singer");
const prev = document.querySelector(".controls #prev");
const play = document.querySelector(".controls #play");
const duration = document.querySelector(".current-time");
const currentTime = document.querySelector(".duration");
const progressBar = document.querySelector("#progress-bar");
const volume = document.querySelector("#volume");
const volumeBar = document.querySelector("#volume-bar");
const ul = document.querySelector("ul");
// const audio2 = document.querySelector('#audio');

const player = new MusicPlayer(musicList);

function displayMusic(music) {
  title.innerText = music.getName();
  singer.innerText = music.singer;
  image.src = "img/" + music.img;
  audio.src = "mp3/" + music.file;
}

window.addEventListener("load", () => {
  let music = player.getMusic();

  !audio.paused
    ? (play.querySelector("i").classList = "fa-solid fa-pause")
    : (play.querySelector("i").classList = "fa-solid fa-play");

  displayMusic(music);
  displayMusicList(player.musicList);
  isPlayingNow();


});

play.addEventListener("click", () =>
  audio.paused ? playMusic() : pauseMusic()
);

next.addEventListener("click", () => {
  nextMusic();
  // player.next();
  // let music = player.getMusic();
  // displayMusic(music);
  // playMusic();
});

prev.addEventListener("click", () => {
  player.prev();
  let music = player.getMusic();
  displayMusic(music);
  playMusic();
});

function pauseMusic() {
  audio.pause();
}

function playMusic() {
    play.querySelector("i").classList = "fa-solid fa-pause";

  audio.play();
}

function whenMusicEnded() {
  nextMusic();
}

function nextMusic() {
  player.next();
  let music = player.getMusic();
  displayMusic(music);
  playMusic();
}

const whenMusicPaused=() => {
    play.querySelector("i").classList = "fa-solid fa-play";
}

const whenMusicPlay =() => {
    play.querySelector("i").classList = "fa-solid fa-pause";
    isPlayingNow();
}

const calculateTime = (totalSecond) => {
  const minute = Math.floor(totalSecond / 60);
  let second = Math.floor(totalSecond % 60);
  second = second < 10 ? `0${second}` : second;
  return `${minute}:${second}`;
};

audio.addEventListener("loadedmetadata", () => {
  duration.textContent = calculateTime(audio.duration);
  progressBar.max = Math.floor(audio.duration);
});

audio.addEventListener("timeupdate", () => {
  progressBar.value = Math.floor(audio.currentTime);
  currentTime.textContent = calculateTime(progressBar.value);
});

progressBar.addEventListener("input", () => {
  currentTime.textContent = calculateTime(progressBar.value);
  audio.currentTime = progressBar.value;
});

let soundOfVolume = 100;

volume.addEventListener("click", () => {
    console.log('volume');
   
   
   if(audio.muted)
   {
    audio.muted  = false;
    volume.classList = "fa-solid fa-volume-high";
    volumeBar.value =soundOfVolume*100;
    
   }
   else
   {
    audio.muted  = true;
    volume.classList = "fa-solid fa-volume-xmark";
    volumeBar.value =0;
    
   }
   
    
  });



  volumeBar.addEventListener("input", (e) => {
//    console.log(e.target.value); 
soundOfVolume =  e.target.value /100;
   audio.volume = soundOfVolume;
   e.target.value == 0 ? volume.classList = "fa-solid fa-volume-xmark" : volume.classList = "fa-solid fa-volume-high";
  });


  
 const displayMusicList = (list) => 
 {
  for(let i=0; i<list.length; i++)
  {
    let liTag = `
    <li li-index="${i}" onclick="selectedMusic(this)" class="list-group-item d-flex justify-content-between align-items-enter ">
    
              <span>${list[i].getName()}</span>
              <span id="music-${i}" class="badge bg-secondary rounded-pill">3:40</span>
              <audio class="music-${i}" src="mp3/${list[i].file}" ></audio>
            </li>
    `;

    ul.insertAdjacentHTML('beforeend',liTag);

    let liAudioDuration = ul.querySelector(`#music-${i}`);
    let liAudioTag = ul.querySelector(`.music-${i}`);
   
  
    liAudioTag.addEventListener("loadeddata", () => {
      
      liAudioDuration.innerText =  calculateTime(liAudioTag.duration);
      
    });

     
    liAudioTag.addEventListener("play", () => {
      
     console.log(`6445fg: ${calculateTime(liAudioTag.duration)}`); 
      
    });
  }
 }

const selectedMusic = (li) => 
{
  
  player.index = li.getAttribute("li-index");
  console.log(player.index);
  displayMusic(player.getMusic());
  playMusic();
  // isPlayingNow();
}



const isPlayingNow = () => 
{
  for(let li of ul.querySelectorAll("li"))
  {

    if(li.classList.contains("playing"))
    {
      li.classList.remove("playing");
    }

    if(li.getAttribute("li-index") == player.index)
    {
      li.classList.add("playing");
    }
  }
}
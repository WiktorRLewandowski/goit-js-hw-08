import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on('timeupdate', throttle((event) => {
  console.log(event);
  localStorage.setItem("videoplayer-current-time", event)
  }, 1000)
)

const playerTimer = localStorage.getItem("videoplayer-current-time")

player
.setCurrentTime(JSON.parse(playerTimer))
  .then(function(seconds) {
});
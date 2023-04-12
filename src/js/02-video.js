import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(event => {
    console.log(event.seconds);
    localStorage.setItem('videoplayer-current-time', event.seconds);
  }, 1000)
);

const playerTimer = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(playerTimer).then();

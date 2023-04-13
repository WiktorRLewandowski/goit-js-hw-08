import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const body = document.body;
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// bardzo za to przepraszam :( wiem, że zła jest przez to kolejność kodu
const div = document.createElement('div');
body.append(div);
div.append(iframe);
div.style.padding = '3rem';
div.style.display = 'flex';
div.style.alignItems = 'center';
div.style.justifyContent = 'center';
iframe.style.filter = 'drop-shadow(0 0 3rem)';

// właściwy kod zadania
player.on(
  'timeupdate',
  throttle(event => {
    console.log(event.seconds);
    localStorage.setItem('videoplayer-current-time', event.seconds);
  }, 1000)
);

const playerTimer = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(playerTimer).then();

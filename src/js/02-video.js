import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe, {
  loop: true,
  fullscreen: true,
  quality: '1080p',
});

const onPlay = function(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds)
};

player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")) || 0);

player.setColor('#45a247').then(function(color) {
    // the color that was set
}).catch(function(error) {
    // an error occurred setting the color

});
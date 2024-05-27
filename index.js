document.addEventListener('DOMContentLoaded', function() {
  const video = document.getElementById('myVideo');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const playIcon = '<i class="fa fa-play" aria-hidden="true"></i>';
  const pauseIcon = '<i class="fa fa-pause" aria-hidden="true"></i>';

  playPauseBtn.addEventListener('click', function() {
    if (video.paused) {
      video.style.display = 'block';
      video.play();
      playPauseBtn.innerHTML = pauseIcon;
      document.querySelector('.h_qoute').style.display = "none"
      document.querySelector('.p_qoute').style.display = "none"
      document.querySelector('.p_qoute').style.display = "none"
    } else {
      video.pause();
      playPauseBtn.innerHTML = playIcon;
      document.querySelector('.h_qoute').style.display = "block"
      document.querySelector('.p_qoute').style.display = "block"
    }
  });

  video.addEventListener('ended', function() {
    playPauseBtn.innerHTML = playIcon;
  });
});

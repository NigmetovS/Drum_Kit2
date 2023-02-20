//play audio
function playAudio(audio){
  if(!audio) return
  audio.currentTime = 0
  audio.play()
}



window.addEventListener('keydown', function (e) {
  // when a key is pressed, get the corresponding <aduio> element
  const audio = document.querySelector(`audio[data-key="${e.key}"]`)
  const key = document.querySelector(`div[data-key="${e.key}"`)

  playAudio(audio)


})


var keys = Array.from(document.querySelectorAll(`.key`)) // turn the returned nodeList into an Array

keys.forEach(function (key) {
  key.addEventListener('click', function (e) {
    
    const audio = document.querySelector(`audio[data-key="${key.getAttribute('data-key')}"]`)

    playAudio(audio)

  })})


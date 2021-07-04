
var audio = new Audio("./js/nhac.mp3")

document.onclick = () => {
var context = new AudioContext()
analyser = context.createAnalyser()
context.createMediaElementSource(audio)
.connect(analyser)
analyser.connect(context.destination)
audio.play()
loop()
}
function loop() {
window.requestAnimationFrame(loop)
fbc = new Uint8Array(analyser.frequencyBinCount);
analyser.getByteFrequencyData(fbc)
avg = fbc.reduce((a,b) => a + b, 0) / fbc.length
document.getElementById('img')
.style.width = avg * 5
document.body.style.backgroundColor =
'rgb('+avg+','+avg+','+avg+')'
}

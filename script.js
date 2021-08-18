//audio.ended - return true if song ends return false if song is still running
//e.srcElement.duration - return the end time song
//srcElement will return the audio tag
//e.srcElement.currentTime - return the the current timeline of song
//element.clientWidth - return the total width of an element
//event.offsetX - return the x-cordinate of an element on click event
const back = document.querySelector(".back")
const forw = document.querySelector(".forw")
const pause = document.querySelector(".pause")
const image = document.querySelector(".music-image img")
const progress = document.querySelector(".progress")
const progressBar = document.querySelector(".progressBar")
const audio = document.querySelector("audio")
const musicContainer = document.querySelector(".music-container")
const musicInfo = document.querySelector(".music-info")
const title = document.querySelector(".music-info .title")
console.log(progressBar,progress)
const songNameArray = ["Namo","ButtaBommai","Dhaga"]
const pauseIcon = document.querySelector(".pause #pause")
const playIcon = document.querySelector(".pause #play")
console.log(pauseIcon)
selectIndex = 2;
function domLoad()
{
    musicContainer.classList.add("pause")
    image.src = `${songNameArray[selectIndex]}.jpg`
    audio.src = `${songNameArray[selectIndex]}.mp3`
    title.innerHTML = `${songNameArray[selectIndex]}`
}
function LoadSong(index)
{
    image.src = `${songNameArray[index]}.jpg`
    audio.src = `${songNameArray[index]}.mp3`
    title.innerHTML = `${songNameArray[index]}`
    audio.play();
    playIcon.style.display = "none"
    pauseIcon.style.display = "block"
}
function backWard()
{
    selectIndex--;
    if(selectIndex < 0)
    {
        selectIndex = songNameArray.length-1;
    }
    LoadSong(selectIndex)
}
function forWard()
{
    selectIndex++;
    console.log(selectIndex)
    if(selectIndex > songNameArray.length-1)
    {
        selectIndex = 0;
    }
    LoadSong(selectIndex)
}
function pauseSong()
{
    if(musicContainer.classList.contains("pause"))
    {
        audio.play();
        musicInfo.style.opacity = "1"
        musicContainer.classList.remove("pause")
        pauseIcon.style.display = "block"
        playIcon.style.display = "none"
    }
    else
    {
        musicContainer.classList.add("pause")
        audio.pause();
        playIcon.style.display = "block"
        pauseIcon.style.display = "none"
        musicInfo.style.opacity = "0.3"
    }
}
function progressCheck(e)
{
   const totalElementWidth = progressBar.clientWidth
   const clickX = e.offsetX
   const duration = audio.duration
   const currentSongDur = (clickX/totalElementWidth) * duration;
   
   audio.currentTime = currentSongDur
}
function updateTime(e)
{
    const totalDur = e.srcElement.duration
    const curDuration = e.srcElement.currentTime
    progress.style.width = `${(curDuration/totalDur)*100}%`
    if(audio.ended)
    {
        forWard()
    }
    
}
document.addEventListener("DOMContentLoaded",domLoad)
back.addEventListener("click",backWard)
forw.addEventListener("click",forWard)
pause.addEventListener("click",pauseSong)
progressBar.addEventListener("click",progressCheck)
audio.addEventListener("timeupdate",updateTime)






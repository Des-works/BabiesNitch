window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });
function myVideo(){
    let links = document.querySelector(".link_a");
    let overs = document.querySelector(".bg-show .overlay");
    let exit = document.querySelector(".cancel");
    let player = document.querySelector(".player");
    let videos = document.getElementById("video");
    links.onclick = (ed)=>{
        ed.preventDefault();
        overs.style.display = "block"
    }
    exit.onclick = ()=>{
        overs.style.display = "none"
    }
    player.onclick = ()=>{
        if(videos.paused){
            videos.play();
            player.src = "Img/pause.png"
        }else{
            videos.pause();
            player.src = "Img/play.png"
        }
    }
}
myVideo();

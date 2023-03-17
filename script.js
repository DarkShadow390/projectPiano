const ButtonDo =  document.getElementById("do");
const ButtonRe =  document.getElementById("re");
const ButtonMi =  document.getElementById("mi");
const ButtonFa =  document.getElementById("fa");
const ButtonSol =  document.getElementById("sol");
const ButtonLa =  document.getElementById("la");
const ButtonSi =  document.getElementById("si");


const myAudioDo = document.querySelectorAll("audio");
const myAudioRe = document.querySelectorAll("audio");
const myAudioMi = document.querySelectorAll("audio");
const myAudioFa = document.querySelectorAll("audio");
const myAudioSol = document.querySelectorAll("audio");
const myAudioLa = document.querySelectorAll("audio");
const myAudioSi = document.querySelectorAll("audio");

ButtonDo.addEventListener("click", function(){
    myAudioDo[0].play();
    

});
ButtonRe.addEventListener("click", function(){
    myAudioRe[1].play();
    

});
ButtonMi.addEventListener("click", function(){
    myAudioMi[2].play();
    

});
ButtonFa.addEventListener("click", function(){
    myAudioFa[3].play();
    

});
ButtonSol.addEventListener("click", function(){
    myAudioSol[4].play();
    

});
ButtonLa.addEventListener("click", function(){
    myAudioLa[5].play();
    

});
ButtonSi.addEventListener("click", function(){
    myAudioSi[6].play();
    
});



const myAudio1 = document.querySelectorAll("audio");
const myAudio2 = document.querySelectorAll("audio");
const myAudio3 = document.querySelectorAll("audio");
const myAudio4 = document.querySelectorAll("audio");
const myAudio5 = document.querySelectorAll("audio");

const blackButton1 =  document.getElementById("son1");
const blackButton2 =  document.getElementById("son2");
const blackButton3 =  document.getElementById("son3");
const blackButton4 =  document.getElementById("son4");
const blackButton5 =  document.getElementById("son5");

blackButton1.addEventListener("click", function(){
    myAudio1[7].play();
    
});
blackButton2.addEventListener("click", function(){
    myAudio1[8].play();
    
});
blackButton3.addEventListener("click", function(){
    myAudio1[9].play();
    
});
blackButton4.addEventListener("click", function(){
    myAudio1[10].play();
    
});
blackButton5.addEventListener("click", function(){
    myAudio1[11].play();
    
});

blackButton1.addEventListener("mouseover", function(){
    ButtonDo.style.backgroundColor = "aqua"
    blackButton1.style.backgroundColor = "aqua"

    
});
blackButton1.addEventListener("mouseleave", function(){
    ButtonDo.style.backgroundColor = "white"
    blackButton1.style.backgroundColor = "black"
    
});

blackButton2.addEventListener("mouseover", function(){
    ButtonRe.style.backgroundColor = "aqua"
    blackButton2.style.backgroundColor = "aqua"

    
});
blackButton2.addEventListener("mouseleave", function(){
    ButtonRe.style.backgroundColor = "white"
    blackButton2.style.backgroundColor = "black"

});
blackButton3.addEventListener("mouseover", function(){
    ButtonFa.style.backgroundColor = "aqua"
    blackButton3.style.backgroundColor = "aqua"
    
    
});
blackButton3.addEventListener("mouseleave", function(){
    ButtonFa.style.backgroundColor = "white"
    blackButton3.style.backgroundColor = "black"
    
});
blackButton4.addEventListener("mouseover", function(){
    ButtonSol.style.backgroundColor = "aqua"
    blackButton4.style.backgroundColor = "aqua"
    
    
});
blackButton4.addEventListener("mouseleave", function(){
    ButtonSol.style.backgroundColor = "white"
    blackButton4.style.backgroundColor = "black"

});
blackButton5.addEventListener("mouseover", function(){
    ButtonLa.style.backgroundColor = "aqua"
    blackButton5.style.backgroundColor = "aqua"

    
});
blackButton5.addEventListener("mouseleave", function(){
    ButtonLa.style.backgroundColor = "white"
    blackButton5.style.backgroundColor = "black"
    
});


ButtonDo.addEventListener("mouseover", function(){
    ButtonDo.style.backgroundColor = "aqua"
});
ButtonDo.addEventListener("mouseleave", function(){
    ButtonDo.style.backgroundColor = "white"
});

ButtonRe.addEventListener("mouseover", function(){
    ButtonRe.style.backgroundColor = "aqua"
});
ButtonRe.addEventListener("mouseleave", function(){
    ButtonRe.style.backgroundColor = "white"
});
ButtonMi.addEventListener("mouseover", function(){
    ButtonMi.style.backgroundColor = "aqua"
});
ButtonMi.addEventListener("mouseleave", function(){
    ButtonMi.style.backgroundColor = "white"
});
ButtonFa.addEventListener("mouseover", function(){
    ButtonFa.style.backgroundColor = "aqua"
});
ButtonFa.addEventListener("mouseleave", function(){
    ButtonFa.style.backgroundColor = "white"
});
ButtonSol.addEventListener("mouseover", function(){
    ButtonSol.style.backgroundColor = "aqua"
});
ButtonSol.addEventListener("mouseleave", function(){
    ButtonSol.style.backgroundColor = "white"
});
ButtonLa.addEventListener("mouseover", function(){
    ButtonLa.style.backgroundColor = "aqua"
});
ButtonLa.addEventListener("mouseleave", function(){
    ButtonLa.style.backgroundColor = "white"
});
ButtonSi.addEventListener("mouseover", function(){
    ButtonSi.style.backgroundColor = "aqua"
});
ButtonSi.addEventListener("mouseleave", function(){
    ButtonSi.style.backgroundColor = "white"
});




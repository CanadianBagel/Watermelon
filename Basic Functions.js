


// test buttons

function watermelonAdd(){watermelon = ExpantaNum.add(watermelon,100); document.getElementById("watermelon").innerHTML = watermelon; p1checkcompletion()}
function seedAdd(){seed = ExpantaNum.add(seed,100); document.getElementById("seed").innerHTML = seed}




function fadein(element) {
    element.style.display = 'block';
    element.classList.add('fadein');
}

function fadeout(element) {
    element.classList.add('fadeout');
    setTimeout(() => {
      element.style.display = 'none';
      element.classList.remove('fadeout');
    }, 500);
}

function notification(text) {
    setdisplay('notificationdiv', text)
    fadein(notificationdiv)
    setTimeout(() => {
      fadeout(notificationdiv)
    }, 2500);
}

function achievementsload(){
    if(phase === 1 && getComputedStyle(achievements).display === 'block' ) {
      fadein(phase1)
      fadeout(settings)
      fadeout(achievements)
    } else if(phase === 1 && getComputedStyle(achievements).display === 'none' ) {
        fadeout(phase1)
        fadeout(settings)
        fadein(achievements)
    }

    
}

function settingsload() {
    if(phase === 1 && getComputedStyle(settings).display === 'block' ) {
      fadein(phase1)
      fadeout(settings)
      fadeout(achievements)
    } else if(phase === 1 && getComputedStyle(settings).display === 'none' ) {
        fadeout(phase1)
        fadein(settings)
        fadeout(achievements)
      }

    
}

function setdisplay(id, variable) {
    document.getElementById(id).innerHTML = variable
  }
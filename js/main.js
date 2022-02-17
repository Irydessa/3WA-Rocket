'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/

const rocket = document.getElementById('rocket')
const buttonFiring = document.getElementById('firing-button')
// const buttonCancel = document.createElement('img')
// buttonCancel.src = "images/cancel-button.png";


/*Compte à reboure*/

const chrono = document.getElementById('billboard')

// let time_minutes = 0; //  minutes
// let time_seconds = 10; // seconds
// let intervalID = window.setInterval(time_seconds, 100, time_seconds)




/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/

/*
 * clic bouton : deconte comence setinterval
 *               gif image change (2) querySelector
 *               image bouton change
                 deconte fini gif image change (3)
*/


buttonFiring.addEventListener('click', function(){
        buttonFiring.src = "images/cancel-button.png";
        rocket.src = "images/rocket2.gif"
        // function startCountdown(time_minutes, time_seconds){
        //     time_seconds.innerText = time_seconds --;
        //     console.log(startCountdown)
        //     if (time_seconds ==0)
        //     window.clearInterval(intervalID);
        //     console.log('timer==0');
        // } 
  console.log('hello');
})











/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/

const rocket = document.getElementById('rocket');
const buttonFiring = document.getElementById('firing-button');
// const buttonCancel = document.createElement('img')
// buttonCancel.src = "images/cancel-button.png";


/*Compte à reboure*/

// const billboard = document.getElementById('billboard')
const billboard = document.querySelector("#billboard span");

let countDown = 10; 
let intervalID ;


/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/

/*
 * clic bouton : deconte comence setinterval ok
 *               gif image change (2) ok
 *               image bouton change ok
                 deconte fini gif image change (3)
*/


buttonFiring.addEventListener('click', function(){
        buttonFiring.src = "images/cancel-button.png";
        rocket.src = "images/rocket2.gif";
        
        function startCountdown(){
            
            if (countDown <= 0){
                clearInterval(intervalID);
            }
              billboard.innerHTML = countDown;
              countDown--;
        } 
        
        intervalID = setInterval(startCountdown, 1000);
        
//   console.log('hello');
});











/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

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
 * clic bouton : decompte comence setinterval ok
 *               gif image change (2) ok
 *               image bouton change ok
 *               decompte fini gif image change (3) ok
 *               
 *fin du decompte : fusée décole
 *                  bouton change en gris.
 */

    
    buttonFiring.addEventListener('click', function(){
            buttonFiring.src = "images/cancel-button.png";
            rocket.src = "images/rocket2.gif";
            
            function startCountdown(){
                
                if (countDown <= 0){
                    clearInterval(intervalID);
                    rocket.src = "images/rocket3.gif";
                }
                  billboard.innerHTML = countDown;
                  countDown--;
                  
                  if (countDown == 0){
                      rocket.classList.add("tookOff")
        }
                  
            } 
            
            intervalID = setInterval(startCountdown, 1000);

    });
    
    









/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

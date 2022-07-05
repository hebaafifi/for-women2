
/********************************** start banner js *********************************/

var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
/********************************** End banner js *********************************/



/********************************** start TO do List js *********************************/

const myInputTask = document.querySelector('.input-task');
const myUl = document.querySelector('#ulTask');
const myBtnTask = document.querySelector('.taskbtn');

myBtnTask.addEventListener('click', addNewTask);

function addNewTask (){
    
  myUl.innerHTML +=`<li class="list-group-item" draggable="true"> ${myInputTask.value} <i class="fa-solid fa-trash trash"></i></li>`

  myInputTask.value="";
   
 
  
};

/********************************** TO do List js *********************************/



/**********************************  start Ideal Weight js *********************************/

const heightInput = document.querySelector('.height-num');
const  weightInput = document.querySelector('.weight-num');
const calcWeightBtn = document.querySelector('.calcweight');

calcWeightBtn.addEventListener('click',calculatIdealWeight);


function calculatIdealWeight(){

  let myHeight = Number (heightInput.value);
  let myWeight = Number (weightInput.value);
  let result = document.querySelector('.resultbox');
  let bmi = ( myWeight / ((myHeight * myHeight) 
                            / 10000)).toFixed(2);
     if(bmi < 15){
      result.innerHTML = `<p>Your BMI Is ${bmi} </p> <p> Under normal weight </p>`
                           
           } else if(bmi <= 18.5 && bmi <=25 ){
            result.innerHTML = `<p>Your BMI Is ${bmi} </p> <p> Normal weight </p>`
           }else{
            result.innerHTML = `<p>Your BMI Is ${bmi} </p> <p> Over weight </p>`
           }
                      


                     
  
};

/**********************************  End Ideal Weight js *********************************/


/**********************************  start play time js *********************************/

/*************************  start function level 1 ****************************/

const playBtn1 = document.querySelector('.play-item1');
const playInput1 = document.querySelector('.play-input1');
const restPlay1 = document.querySelector('.rest-btn1')
 



playBtn1.addEventListener('click', theRightNumber);
restPlay1.addEventListener('click',restBut);

function theRightNumber(){
  if(playInput1.value==32){
    alert("correct answer");
  } else {
    alert("this is wrong try again");
  }
};


function restBut(){
  playInput1.value = "";
}


/****************************************  end function level 1 ******************************/

/****************************************  start function level 2 ***************************************/
const playBtn2 = document.querySelector('.play-item2');
const playInput2 = document.querySelector('.play-input2');
const restPlay2 = document.querySelector('.rest-btn2')
 

playBtn2.addEventListener('click',theRightNumber);
restPlay2.addEventListener('click',restBut);

function theRightNumber(){
  if(playInput2.value == 6){
    alert("correct answer");

  }else{
    alert("this is wrong try again");
  }
  
};

function restBut(){
  playInput2.value ="";
};
/***********************************  end function level 2 *********************************/

/***********************************  start function level 3 *******************************/
const playBtn3 = document.querySelector('.play-item3');
const playInput3 = document.querySelector('.play-input3');
const restPlay3 = document.querySelector('.rest-btn3')
 

playBtn3.addEventListener('click',getTheRightNumber);
restPlay3.addEventListener('click',restBut);

function getTheRightNumber(){
  if(playInput3.value == 10){
    alert("correct answer");
    

  }else{
    alert("this is wrong try again");
  }
  
};

function restBut(){
  playInput3.value = " " ;
};

/*************************************  end function level 3 ***********************************/

/************************************  start function level 4 ************************************/

const playBtn4 = document.querySelector('.play-item4');
const playInput4 = document.querySelector('.play-input4');
const restPlay4 = document.querySelector('.rest-btn4')
 

playBtn4.addEventListener('click',getTheRightNumber);
restPlay4.addEventListener('click',restBut);

function getTheRightNumber(){
  if(playInput4.value == 25){
    alert("correct answer");

  }else{
    alert("this is wrong try again");
  }
  
};

function restBut(){
  playInput4.value ="";
};
/*************************** end function level 4 *************************/

/**********************************  start dark-theme js *********************************/

var icon = document.getElementById("icon");
  icon.onclick= function(){
    document.body.classList.toggle("dark-theme");
    
      if(document.body.classList.contains("dark-theme")){
           icon.src="../image/sun.png";
      } else{
        icon.src="../image/moon.png";
      }
  };
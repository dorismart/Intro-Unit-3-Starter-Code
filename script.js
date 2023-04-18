let storyOpening=document.querySelector(".story-opening");
let strawberryButton=document.querySelector(".strawberry-button");
let optionOneEnd=document.querySelector(".option-one-end");
let optionTwoScreen=document.querySelector(".option-two-screen")
let blueberryButton=document.querySelector(".blueberry-button");
let optionTwoEnd=document.querySelector(".option-two-end");
let optionOneScreen=document.querySelector(".option-one-screen");
let optionOne=document.querySelector(".option-one");
let optionTwo=document.querySelector(".option-two");
let title=document.querySelector(".title");
let buttons=document.querySelector(".buttons");

optionOneScreen.style.display="none";
optionTwoScreen.style.display="none";

optionOne.onclick=function(){
   storyOpening.style.display="none";
  title.style.display="none";
  buttons.style.display="none";
  optionTwoScreen.style.display="none";
  optionTwoEnd.style.display="none";
   optionOneScreen.style.display="block";
};




strawberryButton.onclick=function(){
 storyOpening.style.display="none";
   optionOneEnd.style.display="block";
  optionTwoScreen.style.display="none";
};

blueberryButton.onclick=function(){
 optionTwoScreen.style.display="block";
  optionOneEnd.style.display="none";
};


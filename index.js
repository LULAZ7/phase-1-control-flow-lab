function scuberGreetingForFeet(someValue){
  let answer;
  if( someValue <= 400){
    answer = "This one is on me!";
  }
  else if(someValue> 2000 && someValue < 2500){
    answer = 'I will gladly take your thirty bucks.'
  }
  else{
    answer = 'No can do.'
  }
  return answer;
}

function ternaryCheckCity(){
  // Write your code here!
}

function ternaryCheckCity(place){
  if(place=== 'NYC'){
    return 'Ok, sounds good.'
  }else{
    return 'No go.'
  }
}


function switchOnCharmFromTip(){
  // Write your code here!
}function switchOnCharmFromTip(tip){
  switch(tip) {
    case 'generous' :
      return 'Thank you so much.';
      break;
    case 'not as generous' :
      return 'Thank you.'
      break;
    case 'thanks for everything' :
      return 'Bye.'
      break;
  }
}
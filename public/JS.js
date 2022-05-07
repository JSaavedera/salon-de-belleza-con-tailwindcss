let btn = document.querySelector('button');

btn.addEventListener('click', function(){
  
  let hint = document.querySelector('#hint');
  if(hint.style.visibility == 'hidden'){
    hint.style.visibility = 'visible';
     hint.style.opacity = '1';
     
  
  }
  else{
    hint.style.visibility = 'hidden';
     hint.style.opacity = '0';

  }

  let presen = document.querySelector('#presen');
  if(presen.style.visibility == 'visible'){
    presen.style.visibility = 'hidden';
     presen.style.opacity = '0';
  }
  else{
    presen.style.visibility = 'visible';
     presen.style.opacity = '1';
  }

});


window.onscroll = function (e) {  

  if(scrollY >=100){
  let element = document.getElementById("navBar");

  element.classList.add("navTwo");
  element.classList.remove("navOne");
  } 
if(scrollY<=10){
  let element2 = document.getElementById("navBar");

  element2.classList.add("navOne");
  element2.classList.remove("navTwo");
  }
if(scrollY >=10){hint.style.visibility = 'hidden';
     hint.style.opacity = '0';
    }
    if(scrollY >=10){presen.style.visibility = 'visible';
     presen.style.opacity = '1';
    }
}





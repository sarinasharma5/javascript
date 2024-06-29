let image= document.getElementById('img');
let input = document.getElementById('input');
let yrg = document.getElementById('userguess');
let com= document.getElementById('big');
let tries= document.getElementById('guess');
let button= document.getElementById('button');

let randomnumber='';
let usertries= 10;
let previousguess =[];


window.onload=(event)=>{
    randomnumber=parseInt(Math.random()*101);
    console.log(randomnumber);
    tries.innerHTML= usertries;
}


button.addEventListener('click',function(){

   if(usertries>0){
    if(+input.value==randomnumber){
        console.log("correct");
        image.style.display= 'block';
    }
    else{
        if(+input.value>randomnumber){
            com.innerHTML="The number is greater than acutal number";
            usertries -=1;
            tries.innerHTML=usertries;
            previousguess.push(input.value);
            yrg.innerHTML=previousguess;
        }
        else{
            com.innerHTML="The number is smaller than acutal number";
            usertries -=1;
            tries.innerHTML=usertries;
            previousguess.push(input.value);
            yrg.innerHTML=previousguess;
        }
    }
}
else{
    button.disabled=true;
}
    
})

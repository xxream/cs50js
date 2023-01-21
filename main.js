function hello(){
    alert("hello mothfuckers");
}

let num= 0;
function counter(){
    num++;
    alert(num);
}

function reset(){
    num =0;
    alert("counter has been reseted");
} 
let chax = true;
function change_header(){
   
    if(chax===true){
        document.querySelector('h1').innerHTML = "This is changed header tag";
        chax = false;
    }else{
        document.querySelector('h1').innerHTML = "This header tag is changed again";
        chax= true;
    }
    
}
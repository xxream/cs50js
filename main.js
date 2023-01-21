function hello(){
    alert("hello mothfuckers");
}

let num= 0;
function counter(){
    num++;
    document.querySelector('h1').innerHTML = num;
}

function reset(){
    num =0;
    document.querySelector('h1').innerHTML = num;
} 

function change_header(){
   let headingx  = document.querySelector('h1');
   
   if(headingx.innerHTML === "first header"){
        headingx.innerHTML = "second header";
    }else{
        headingx.innerHTML = "first header"; 
    }
    
}
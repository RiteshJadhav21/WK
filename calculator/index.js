let screen=document.getElementById("screen");
 buttons= document.querySelectorAll("button");
let screenValue="";

for(item of buttons){
    item.addEventListener("click",(e)=>{
        buttonText = e.target.innerText;
        console.log("button text =", buttonText);
        if(buttonText=="x"){
            buttonText="*";
            screenValue+=buttonText;
            screen.value =screenValue;
        }
        else if(buttonText=="c"){
            screenValue ="";
            screen.value =screenValue;
            
        }
        else if(buttonText=="="){
            screen.value=eval(screenValue);
        }
        else{
            screenValue+= buttonText;
            screen.value = screenValue;
        }
        
    })
}

const btn = document.getElementById("btn")
btn.addEventListener("click",function onClick(){
    btn.style.backgroundColor = "salmon";

})
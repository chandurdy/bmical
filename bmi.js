let button=document.getElementById("btn");
let weight=document.getElementById("weight");
let height=document.getElementById("height");
let reset= document.querySelector(".reset");
let index= document.getElementById("indexnumber");
let bmi=document.querySelector(".bmi");
let text=document.getElementById("span");
let newlist=document.querySelector(".riskfactors")





button.addEventListener("click",function(){
    let first=weight.value;
    let second=height.value/100;
    let third=second*second;
    let cal = Math.round(first/third);
    
    index.innerHTML=cal;
    if(cal >= 18 && cal <= 25){
        index.style.color="green";
        bmi.style.color="green";
        text.innerHTML="Is in Normal Range";
        text.style.color="green";
    }else if(cal > 25 && cal <= 29){
        index.style.color="yellow";
        bmi.style.color="yellow";
        text.innerHTML="Is in OverWight Range";
        text.style.color="yellow";
    }else if(cal >= 30){
        index.style.color="red";
        bmi.style.color="red";
        text.innerHTML="Is in Obese Range";
        text.style.color="red";
        newlist.style.display="unset"
        
    }
});

reset.addEventListener("click",function(){
    weight.innerHTML="";
    height.innerHTML="";
    index.innerHTML="00";
    index.style.color="black";
    bmi.style.color="black";
    text.innerHTML="and follow the recommended Diet"
    text.style.color="black"
    newlist.style.display="none"
});


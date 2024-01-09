const countValue=document.querySelector('#counter');
const increment=()=>{
    //get the value from UI
let value=parseInt(countValue.innerHTML)
//update the value;
value=value+1;
//set the value
countValue.innerHTML=value;
}

const decrement=()=>{
    //get the value from UI
    let value=parseInt(countValue.innerHTML)
    //update the value;
    value=value-1;
    //set the value
    countValue.innerHTML=value;
}
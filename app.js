'use strict';

function foods (name,type,price){
this.FoodID ;
this.name =name;
this.type=type;
this.price=price;

foods.all.push(this)
}

//Returns the data that was saved before the page was refreshed
let returnData =localStorage.getItem("food");
let Array2=JSON.parse(returnData);
if(Array2==null){
    foods.all=[];
}else {
    foods.all=Array2;
 
}

//Returns the last ID saved 
let ID;
let returnID =localStorage.getItem("ID");
let Array3=JSON.parse(returnID);
if(Array3==null){
    ID=1000;
}else {
    ID=Array3;
 
}


foods.prototype.IDnumber =function () {
    ID++
    this.FoodID=ID;
   
   
}


let form=document.getElementById("form");
form.addEventListener('submit',handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    let Name = event.target.FoodName.value;
    let typeFood = event.target.typeFood.value;
    let Price =event.target.Price.value; 
    
    const newfood = new foods(Name, typeFood, Price);
        newfood.IDnumber();
        
        saveData(foods.all,ID)

        // console.log(foods.all)

}

function saveData (data,ID){
    let stringObj =JSON.stringify(data);
    localStorage.setItem("food",stringObj);
    let dataID =JSON.stringify(ID);
    localStorage.setItem("ID",dataID);
}


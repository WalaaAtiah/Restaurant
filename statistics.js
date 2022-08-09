'use strict';

function foods (FoodID,name,type,price){
    this.FoodID=FoodID ;
    this.name =name;
    this.type=type;
    this.price=price;
    
    foods.all.push(this)
    }
    
    foods.all=[]


foods.prototype.render = function(){
   const tr =document.createElement('tr')
table.appendChild(tr);
const td1 =document.createElement('td')
tr.appendChild(td1);
td1.textContent = this.FoodID;
const td2 =document.createElement('td')
tr.appendChild(td2);
td2.textContent = this.name;
const td3 =document.createElement('td')
tr.appendChild(td3);
td3.textContent = this.type;
const td4 =document.createElement('td')
tr.appendChild(td4);
td4.textContent = this.price;

}

function getData(){
let returnData =localStorage.getItem("food");
let Array=JSON.parse(returnData);
// console.log(Array);

for(let i=0;i<Array.length;i++){

    const newfood = new foods(Array[i].FoodID, Array[i].name, Array[i].type,Array[i].price);
    // console.log(newfood);
}

}
 getData()

 for(let i=0;i<foods.all.length;i++){
    foods.all[i].render();

 }




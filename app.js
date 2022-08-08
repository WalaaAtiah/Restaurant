'use strict';
let ID=1000;

function foods (name,type,price){
this.FoodID ;
this.name =name;
this.type=type;
this.price=price;

foods.all.push(this)
}

foods.all=[]


foods.prototype.IDnumber =function () {
    ID++
    this.FoodID=ID;
   
   
}

const main=document.getElementsByTagName('main');
const table = document.createElement('table');
main[0].appendChild(table);
const tr =document.createElement('tr')
table.appendChild(tr);
const th1 =document.createElement('th')
tr.appendChild(th1);
th1.textContent = `ID`;
const th2 =document.createElement('th')
tr.appendChild(th2);
th2.textContent = `Name`;
const th3 =document.createElement('th')
tr.appendChild(th3);
th3.textContent = `Type`;
const th4 =document.createElement('th')
tr.appendChild(th4);
th4.textContent = `Price`;



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



let form=document.getElementById("form");
form.addEventListener('submit',handleSubmit);
function handleSubmit(event) {
    event.preventDefault();

    let Name = event.target.FoodName.value;
    let typeFood = event.target.typeFood.value;
    let Price =event.target.Price.value; 
    
    const newfood = new foods(Name, typeFood, Price);
        newfood.IDnumber();
        newfood.render();


        console.log(newfood)

    

    
}

console.log(foods.all)


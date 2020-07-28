var saveBtn9 = document.getElementById('saveBtn9');
var saveBtn10 = document.getElementById('saveBtn10');
var saveBtn11 = document.getElementById('saveBtn11');
var savBtn2 = document.getElementById('saveBtn12');
var saveBtn1 = document.getElementById('saveBtn1');
var saveBtn2 = document.getElementById('saveBtn2');
var saveBtn3 = document.getElementById('saveBtn3');
var saveBtn4 = document.getElementById('saveBtn4');
var saveBtn5 = document.getElementById('saveBtn5');


var textarea9 = document.querySelector("#textarea9").value
var textarea10 = document.querySelector("#textarea10").value
var textarea11 = document.querySelector("#textarea11").value
var textarea12 = document.querySelector("#textarea12").value
var textarea1 = document.querySelector("#textarea1").value
var textarea2 = document.querySelector("#textarea2").value
var textarea3 = document.querySelector("#textarea3").value
var textarea4 = document.querySelector("#textarea4").value
var textarea5 = document.querySelector("#textarea5").value

//call back last registered
function renderLastRegistered(){
    var textarea9 = JSON.parse(localStorage.getItem('textarea9'));
    if(textarea9 === null){
        return;
    }

    textarea9.textcontent = textarea9;
    
}
function renderLastRegistered(){
    var textarea10 = JSON.parse(localStorage.getItem('textarea10'));
    if(textarea10 === null){
        return;
    }

    textarea10.textcontent = textarea10;
}
function renderLastRegistered(){
    var textarea11 = JSON.parse(localStorage.getItem('textarea11'));
    if(textarea11 === null){
        return;
    }

    textarea11.textcontent = textarea11;
}
function renderLastRegistered(){
    var textarea12 = JSON.parse(localStorage.getItem('textarea12'));
    if(textarea12 === null){
        return;
    }

    textarea12.textcontent = textarea12;
}
function renderLastRegistered(){
    var textarea1 = JSON.parse(localStorage.getItem('textarea1'));
    if(textarea1 === null){
        return;
    }

    textarea1.textcontent = textarea1;
}
function renderLastRegistered(){
    var textarea2 = JSON.parse(localStorage.getItem('textarea2'));
    if(textarea2 === null){
        return;
    }

    textarea2.textcontent = textarea2;
}
function renderLastRegistered(){
    var textarea3 = JSON.parse(localStorage.getItem('textarea3'));
    if(textarea3 === null){
        return;
    }

    textarea3.textcontent = textarea3;
}
function renderLastRegistered(){
    var textarea4 = JSON.parse(localStorage.getItem('textarea4'));
    if(textarea4 === null){
        return;
    }

    textarea4.textcontent = textarea4;
}
function renderLastRegistered(){
    var textarea5 = JSON.parse(localStorage.getItem('textarea5'));
    if(textarea5 === null){
        return;
    }

    textarea5.textcontent = textarea5;
}
//save to local storage 9:00
saveBtn9.addEventListener("click", function(event){
    event.preventDefault();
var textarea9 = document.querySelector('#textarea9').value
    if(textarea9 === "") {
        alert("Please input an event.");
        }
    else{
        alert("Event Saved");
        localStorage.setItem('textarea9', textarea9);
        renderLastRegistered();
    } 
})
//save to ls 10
saveBtn10.addEventListener("click", function(event){
    event.preventDefault();
var textarea10 = document.querySelector('#textarea10').value
    if(textarea10 === "") {
        alert("Please input an event.");
        }
    else{
        alert("Event Saved");
        localStorage.setItem('textarea10', JSON.stringify(textarea10));
        renderLastRegistered();
    } 
})
// save to ls 11
saveBtn11.addEventListener("click", function(event){
    event.preventDefault();
var textarea11 = document.querySelector('#textarea11').value
    if(textarea11 === "") {
        alert("Please input an event.");
        }
    else{
        alert("Event Saved");
        localStorage.setItem('textarea11', JSON.stringify(textarea11));
        renderLastRegistered();
    } 
})

// save to ls 12
saveBtn12.addEventListener("click", function(event){
    event.preventDefault();
var textarea12 = document.querySelector('#textarea12').value
    if(textarea12 === "") {
        alert("Please input an event.");
        }
    else{
        alert("Event Saved");
        localStorage.setItem('textarea12', JSON.stringify(textarea12));
        renderLastRegistered();
    } 
})

// save to ls 1
saveBtn1.addEventListener("click", function(event){
    event.preventDefault();
var textarea1 = document.querySelector('#textarea1').value
    if(textarea1 === "") {
        alert("Please input an event.");
        }
    else{
        alert("Event Saved");
        localStorage.setItem('textarea1', JSON.stringify(textarea1));
        renderLastRegistered();
    } 
})

//save to ls 2
saveBtn2.addEventListener("click", function(event){
    event.preventDefault();
var textarea2 = document.querySelector('#textarea2').value
    if(textarea2 === "") {
        alert("Please input an event.");
        }
    else{
        alert("Event Saved");
        localStorage.setItem('textarea2', JSON.stringify(textarea2));
        renderLastRegistered();
    } 
})

//save to ls 3
saveBtn3.addEventListener("click", function(event){
    event.preventDefault();
var textarea3 = document.querySelector('#textarea3').value
    if(textarea3 === "") {
        alert("Please input an event.");
        }
    else{
        alert("Event Saved");
        localStorage.setItem('textarea3', JSON.stringify(textarea3));
        renderLastRegistered();
    } 
})

//save to ls 4
saveBtn4.addEventListener("click", function(event){
    event.preventDefault();
var textarea4 = document.querySelector('#textarea4').value
    if(textarea4 === "") {
        alert("Please input an event.");
        }
    else{
        alert("Event Saved");
        localStorage.setItem('textarea4', JSON.stringify(textarea4));
        renderLastRegistered();
    } 
})

//save to ls 5
saveBtn5.addEventListener("click", function(event){
    event.preventDefault();
var textarea5 = document.querySelector('#textarea5').value
    if(textarea5 === "") {
        alert("Please input an event.");
        }
    else{
        alert("Event Saved");
        localStorage.setItem('textarea5', JSON.stringify(textarea5));
        renderLastRegistered();
    } 
})

let btn = document.getElementsByClassName('field');
let text = document.getElementsByClassName('para');
let newGameBtn = document.getElementsByClassName('btn');
let element;
let letter = "X";
let arr = [];
let winCombination = [
    [0,1,2],[3,4,5], [6,7,8],  [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
];

for (let i = 0; i <= 8; i++) {
    arr.push(i);
}

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click',()=>{
        if(letter == 'X'){
            btn[i].innerText = letter
            arr.splice(Array.from(btn).indexOf(btn[i]),1,letter)
            letter = 'O'
        }else if(letter == 'O'){
            btn[i].innerText = letter
            arr.splice(Array.from(btn).indexOf(btn[i]),1,letter)
            letter = 'X';
        } 
        win(arr);
       if(draw(arr)){
        text[0].innerHTML = 'Nerjeseno je';
        newGameBtn[0].style.visibility = 'visible';
       }
        
    },{once:true})
    
};

function win(x) {

    for (let i = 0; i < winCombination.length; i++) {
        element = winCombination[i];
        //console.log(element[0]);
        if (x[element[0]] == "X" && x[element[1]] == "X" && x[element[2]] == "X") {

            text[0].innerHTML = 'X is Winner';
        } else if (x[element[0]] == "O" && x[element[1]] == "O" && x[element[2]] == "O") {
            text[0].innerHTML = 'O is Winner';
        } 
    }
}

function draw(x){
    return x.every((curentValue)=>{
       return typeof(curentValue) == 'string'
    })
}


newGameBtn[0].addEventListener('click',()=>{
   text[0].innerHTML = '';
   newGameBtn[0].style.display ='none';
   for (let i = 0; i < btn.length; i++) {
    btn[i].innerText = '';
    
   }
   })

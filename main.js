let btn = document.getElementsByClassName('field');
let letter = "X";
let arr = [];
let winCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
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
        test(arr)
        
    },{once:true})
    
};


let element;
let test = (x) => {

for (let i = 0; i < winCombination.length; i++) {
     element = winCombination[i];
    console.log(element[0]);
    if(x[element[0]] == "X" && x[element[1]] == "X" && x[element[2]] == "X"){
        console.log('X is Winner');
    }else if(x[element[0]] == "O" && x[element[1]] == "O" && x[element[2]] == "O"){
        console.log("O is winner");
    }
    
}

    
}
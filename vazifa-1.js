let a = 15;
let b = 10;
let result = 0;

// 5 + 6 + 7 + 8 + 9 = 35

if(a < b){
        
    for(let i = a; i < b; i++){
        result += i;
    }
}

else{
    for(let i = b; i < a; i++){
        result += i;
    }
}
console.log(result);



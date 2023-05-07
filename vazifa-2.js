let a = 15;
let b = 19;
let result = 0;

if(a < b){
    for(let i = a; i <= b; i++){
        if(i % 3 == 0){
            result += i;
        }
    }
}

else{
    for(let i = b; i <= a; i++){
        if(i % 3 == 0){
            result += i;
        }
    }
}

console.log(result);


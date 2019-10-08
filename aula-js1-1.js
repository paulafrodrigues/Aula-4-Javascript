// 1) percorrrer array e printar valor com for e arrays
const arr = [15, 20, 25, 30, 35];
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }



//2) inverter ordem do for e printar valores

for(let i = arr.length-1; i >= 0; i--){
    console.log(arr[i])
}


 
//3)localizar índice de valor da array

for(let i = 0; i < arr.length; i++){
    if(arr[i] === 25){
        console.log(i)
    }
}

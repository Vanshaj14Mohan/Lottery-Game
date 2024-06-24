//functions used for lottery.jsx

//generate ticket 
function genTicket (n){ //user defined number
    let arr = new Array(n); //n numbers
    for (let i =0; i<n; i++){
        arr[i] = Math.floor(Math.random() * 10); //creating random number of n size that user gives
    }
    return arr;
}

//sum of ticket 
function sum(arr){
    return arr.reduce((sum, curr) => sum + curr, 0);
}

export {genTicket, sum};
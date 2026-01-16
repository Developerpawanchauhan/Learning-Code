function sum(...input){
    add = 0
    for(let i in input){
        add = add + input[i];
    }
    return add;
}
let ans = sum(10,20,70);
console.log(ans);

function sum(...input){
    let add = 0;
    for(let i in input){
        add = add + input[i];
    }
    return add;
}
console.log(sum(20,40,40));

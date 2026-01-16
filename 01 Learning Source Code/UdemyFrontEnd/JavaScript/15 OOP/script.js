class calc{
    add(a,b){
        console.log(a+b);
    }
    addi(a,b){
        console.log(a-b);
    }
    multi(a,b){
        console.log(a*b);
    }
    div(a,b){
        console.log(a/b);
    }
}
let total = new calc;
total.add(10,20);
total.addi(10,20);
total.multi(10,20);
total.div(10,20);

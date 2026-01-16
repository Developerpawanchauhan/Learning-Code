let obj = {
    fname: 'Pawan',
    lname: 'Chauhan',
    Age: 24,
    Email: 'pawanchauhan2709@gmail.com',
    fullName: function(){
        return this.fname + this.lname;
    }
}

console.log(obj);
console.log(obj.fullName);

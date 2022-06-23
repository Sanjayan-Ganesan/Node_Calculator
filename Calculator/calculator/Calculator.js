

 var arguments

 module.exports(arguments)  = process.argv


module.exports = function add (a,b){
    return parseInt(a) + parseInt(b);
}

module.exports = function sub (a,b){
    return parseInt(a) - parseInt(b);
}

module.exports = function multiply (a,b){
    return parseInt(a) * parseInt(b);
}

module.exports = function divide (a,b){
    return parseInt(a) / parseInt(b);
}

module.exports = function sin (a){
    return Math.sin (parseInt(a));
}

module.exports = function cos (a){
    return Math.cos (parseInt(a));
}

module.exports = function tan (a){
    return Math.tan (parseInt(a));
}

module.exports = function random (a){
    return Math.random() * (parseInt(a))
}



//var sum = add(arguments[2], arguments[3]);
//var product = multiply(arguments[2], arguments[3]);
 
//console.log(product);


var sum = add(arguments[2],arguments[3]);
var subtract = sub(arguments[2],arguments[3]);
var product = multiply(arguments[2],arguments[3]);
var division = divide(arguments[2],arguments[3]);
var sins = sin(arguments[2]);
var coses = cos(arguments[2]);
var tans = tan(arguments[2]);
var ran = random(arguments[2]);

console.log(product);


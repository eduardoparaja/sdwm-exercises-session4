"use strict";

var numbers = [0,1,2,3,4,5];

function getEven(array) {
    return array.filter(n => n % 2 == 0);

}

function sumAll(array) {
    function sum(a,b) {
        return a + b;
    }
    return array.reduce(sum,0);
}

function logAll(array) {
    array.forEach(n => {console.log(n)});
    }

function getSquares(array) {
    return array.map(n => n*n)
}
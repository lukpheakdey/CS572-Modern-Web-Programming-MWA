"use strict";
// function University(name, dept){
//     this.name = name;
//     this.dept = dept;
//     this.graducation = function(year) {
//         console.log('Graduating ${this.dept} ${year} students');
//     }
// }
// var num = new University("MUM", "Computer Science");
// mum.graducation(2019);
var University = /** @class */ (function () {
    function University(name, dept) {
        this.name = name;
        this.dept = dept;
    }
    University.prototype.graduation = function (year) {
        console.log("Graduationg " + this.dept + " " + year + " students");
    };
    return University;
}());
var mum = new University("MUM", "Computer Science");
mum.graduation(2019);



// function University(name, dept){
//     this.name = name;
//     this.dept = dept;
//     this.graducation = function(year) {
//         console.log('Graduating ${this.dept} ${year} students');
//     }
// }

// var num = new University("MUM", "Computer Science");
// mum.graducation(2019);

class University {
    constructor(public name:string, public dept:string) {}

    graduation (year: number) {
        console.log(`Graduationg ${this.dept} ${year} students`);
    }
}
var mum = new University("MUM", "Computer Science");
mum.graduation(2019);

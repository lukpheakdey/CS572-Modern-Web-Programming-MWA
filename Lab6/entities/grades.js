class Grades {
  
  constructor(){
    this.gradeArray = new Array();
  }  
  
  add(username, coursename, coursegrade) {
    console.log("adding....");
    const user = {
      id: this.gradeArray.length+1, 
      name: username,
      course: coursename,
      grade:coursegrade
    };
    this.gradeArray.push(user);
  }

  update(id, name, course, grade) {
    { id, name, course, grade };
  }

  remove(id) {
    delete this[id];
  }
}

const grades = new Grades();
grades.add("Assad Sadd", "cs572", "95");

module.exports = grades;
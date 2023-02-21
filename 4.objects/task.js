function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  }
  else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...mark) {
    if (this.marks === undefined) {
        this.marks = [...mark];
      }
      else {
        this.marks.push(...mark);
      }
}

Student.prototype.getAverage = function (marks) {
  let sumMarks = 0;
  if (this.marks === undefined) {
    return ("Оценок нет");
  }
  else {
    for (let i = 0; i < this.marks.length; i++){
        sumMarks += this.marks[i];
    }
    return sumMarks/this.marks.length;
  }
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks
}

import { Seq } from 'immutable';

export function printBestStudents(grades) {
  const bestStudents = Seq(grades)
    .filter(student => student.score >= 70)
    .map(student => ({
      ...student,
      firstName: student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
      lastnmae: student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1),
    }));
  console.log(bestStudents.toJS());
}

const grades = {
  1: ( score: 99, firstName: 'guillaume', lastName: 'salva' }
};

printBestStudents(grades);
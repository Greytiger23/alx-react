import { Seq } from 'immutable';

export default function printBestStudents(grades) {
  const students = Seq(grades)
    .filter(student => student.score >= 70)
    .map(student => ({
      score: student.score,
      firstName: student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1).toLowerCase(),
      lastName: student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1).toLowerCase(),
    }));

  console.log(students.toJS());
}

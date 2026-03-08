const student = [
    {id: 10, name: 'akash'},
    {id: 12, name: 'sumon'},
    {id: 14, name: 'noman'},
    {id: 15, name: 'alomgir'}
];

const name = student.map(s => s.name);
const ids = student.map(s => s.id);
const bigger = student.filter(s => s.id >10);
const biggerOne = student.find(s => s.id >10);
console.log(biggerOne);
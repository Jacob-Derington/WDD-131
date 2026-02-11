const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

words.push('bannana'); //I dont like bannanas 
words.push('lime');

const index = words.indexOf('bannana');

if (index !== -1) {
    words.splice(index, 1);
}


const students = [
    {last: 'Andrus', first: 'Aaron', grade: 'A'},
    {last: 'Masa', first:'Manny', grade: 'D'},
    {last: 'Tanda', first: 'Tamanda', grade: 'C'}
];

students.push({last: 'Derington', first: 'Jacob', grade: 'B'})

function convert(grade) {
    let points;

    switch (grade){
        case 'A': points = 4;
            break;
        case 'B': points = 3;
            break;
        case 'C': points = 2;
            break;
        case 'D': points = 1;
            break;
        case 'F': points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}
          
const wordList = document.getElementById('words');

words.forEach((word) => {
    const li = document.createElement('li');
    li.textContent = word;
    wordList.appendChild(li);
});

const studentsDiv = document.getElementById('students');

const studentHTML = students.map(student => {
    return `
        <p>
            ${student.first} ${student.last}
        </p>
    `;
});

studentsDiv.innerHTML = studentHTML.join('');


const gradesList = document.getElementById('grades');

const gradeHTML = students.map(student => {
    return `
        <li>
            ${student.last}: 
            Grade: ${student.grade} (${convert(student.grade)} points)
        </li>
    `;
});

gradesList.innerHTML = gradeHTML.join('');
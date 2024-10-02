const students = [
    {name: "Jeferson Thiago", note: 4.5},
    {name: "Willian Kanashiro", note: 2.4},
    {name: "Pedro Wilson", note: 5},
    {name: "Dimas", note: 8},
    {name: "Lívia Luz", note: 6.2},
    {name: "Milena Lima", note: 10}
]

const approved = studentsArray => {

    for(let student of studentsArray) {

        let name = student.name;
        let note = student.note;

        if (note >= 6) {
            console.log(`${name} obteve a nota ${note}`);
        }
    }
}

approved(students);
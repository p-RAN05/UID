let subjects = [];
let editIndex = -1;

// Define a mapping of grades to credits
const gradeToCredit = {
    'O': 10,
    'A': 9,
    'B': 8,
    'C': 7,
    'D': 6,
    'F': 0
};

function addSubject() {
    const subjectInput =
        document.getElementById('subject');
    const grade =
        document.getElementById('grade').value;
    
    // Get credit based on the selected grade
    const credit = gradeToCredit[grade];

    // Validate input
    const inputError =
        document.getElementById('inputError');
    if (!subjectInput.value || !grade) {
        inputError.textContent =
            'Please fill out all fields.';
        return;
    } else {
        inputError.textContent = '';
    }

    if (editIndex !== -1) {
        subjects[editIndex] =
            { subject: subjectInput.value, grade, credit };
        editIndex = -1;
    } else {
        subjects.push(
            { subject: subjectInput.value, grade, credit });
    }

    displaySubjects();
    clearForm();
}

function displaySubjects() {
    const subjectList =
        document.getElementById('subjectList');
    subjectList.innerHTML = '';

    subjects.forEach((s, index) => {
        const row = document.createElement('tr');

        const subjectCell = document.createElement('td');
        subjectCell.textContent = s.subject;

        const gradeCell = document.createElement('td');
        gradeCell.textContent = s.grade;

        const creditCell = document.createElement('td');
        creditCell.textContent = s.credit;

        const actionCell = document.createElement('td');
        const editButton = document.createElement('button');
        editButton.className = 'edit';
        editButton.textContent = 'Edit';
        editButton.onclick = () => editSubject(index);

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete';
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteSubject(index);

        actionCell.appendChild(editButton);
        actionCell.appendChild(deleteButton);

        row.appendChild(subjectCell);
        row.appendChild(gradeCell);
        row.appendChild(creditCell);
        row.appendChild(actionCell);

        subjectList.appendChild(row);
    });
}

function editSubject(index) {
    const subjectInput =
        document.getElementById('subject');
    const selectedSubject = subjects[index];

    subjectInput.value = selectedSubject.subject;
    document.getElementById('grade').value =
        selectedSubject.grade;
    // No need to set credit field as it will be filled automatically

    editIndex = index;
}

function deleteSubject(index) {
    subjects.splice(index, 1);
    displaySubjects();
}

function calculateCGPA() {
    const totalCredits = subjects.reduce(
        (sum, s) => sum + s.credit, 0);
    const weightedSum = subjects.reduce(
        (sum, s) => sum + getGradePoint(s.grade) * s.credit, 0);

    const cgpa = totalCredits === 0 ? 0 :
        (weightedSum / totalCredits).toFixed(2);
    document.getElementById('cgpa').textContent = cgpa;
}

function getGradePoint(grade) {
    // Assign grade points as per your grading system
    switch (grade) {
        case 'O': return 10.0;
        case 'A': return 9.0;
        case 'B': return 8.0;
        case 'C': return 7.0;
        case 'D': return 6.0;
        case 'F': return 0.0;
        default: return 0.0;
    }
}

function clearForm() {
    document.getElementById('subject').value = '';
    document.getElementById('grade').value = '';
    // Clearing credit field as it will be filled automatically
}

function resetForm() {
    subjects = [];
    editIndex = -1;
    document.getElementById('subjectList').innerHTML = '';
    document.getElementById('cgpa').textContent = '0.00';
    clearForm();
}

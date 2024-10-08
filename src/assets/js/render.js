import { Student } from './ls-manager';
/**
 * @module render
 * @description This module manage all html rendering
 */

/**
 * This function displays students' information in a tabular form
 * @param {Array<Student>} students List of Student objects
 */
export function renderStudentInfo(students){
    // 1) Remove old all data
    document.querySelector('#output tbody').innerHTML = ''

    // 2) do loop in data
    for (let i = 0; i < students.length; i++) {
        // Create a new row for the table
        const newRow = document.createElement('tr');

        // Add cells with the input values
        newRow.innerHTML = `
            <td>${students[i].name}</td>
            <td>${students[i].phone}</td>
            <td>${students[i].score}</td>
            <td>${students[i].id}</td>
        `;

        // 3) Append the new row to the table body
        const outputTableBody = document.querySelector('#output tbody');
        outputTableBody.appendChild(newRow);  // Add the new row to the table
    }

    // 4) Clear the form after submission
    document.getElementById('inputForm').reset();
}
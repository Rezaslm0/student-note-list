import * as ls from "./ls-manager.js";
import { renderStudentInfo } from "./render.js";
import { LS_student } from "./static.js";

/**
 * @description This function manages student information form
 * @param {EventListener} e event listener
 * @returns {void}
 */
export function submitListener(e){
    e.preventDefault();  // Prevent default form submission

    // Get values from input fields
    const name = document.getElementById('name').value;
    const phone = document.getElementById('number').value;
    const score = document.getElementById('score').value;

    // Check if any fields are empty
    if (!name || !phone || !score) {
        alert("Please fill out all fields.");
        return;
    }

    // Generate a unique ID based on the current time
    const id = Date.now();

    // Make data structure
    const newStudent = {
        name: name,
        phone: phone,
        score: score,
        id: id
    }

    // LS: add new data to local-storage
    ls.addNewStudent(LS_student,newStudent)

    // Show all data in html content
    renderStudentInfo(ls.getStudents(LS_student))
}
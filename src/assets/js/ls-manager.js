import { LS_student } from "./static.js";
/**
 * @module ls-manager
 * @description This module manage local-storage of
 */

/**
 * @typedef {Object} Student
 * @property {string} name - student name
 * @property {number} phone - student phone number
 * @property {number} score - student score
 * @property {number} id - uniq id for any student
 */

/**
 * @description This function checking the localStorage to create it if it not exists
 * - If its not exist(null), set it as "[]"
 * @param {string} LS_name - The name of storage section of "local-storage" to check
 * @returns {void}
 */
function localStorageChecker(LS_name){
    // 1) Get content of ls
    const ls = localStorage.getItem(LS_name)

    // 2) If null create new
    if (!ls){
        localStorage.setItem(LS_name, "[]")
        console.log(`[INFO][create][local-storage]: ${LS_name}`)

    }
}

/**
 * This function manage clearing any section of local-storage 
 * @param {string} LS_name The name of storage section of "local-storage" to clear
 * @returns {void}
 */
function clearStorageSection(LS_name){
    localStorage.clear(LS_name)
    console.log(`[INFO][remove][local-storage]: ${LS_name}`)

}

/**
 * This function adds student data to the localStorage
 * @param {Student} student - student data
 * @param {string} LS_name - name of storage section
 * @returns {void}
 */
export function addNewStudent(LS_name, student){
    // 0) Check the localStorage
    localStorageChecker(LS_name)

    // 1) Get content of ls, and pars it to json
    let lsData = JSON.parse(localStorage.getItem(LS_name))

    // 2) Add new student to students
    lsData.push(student)

    // 3) Stringify data, and send data to localStorage
    localStorage.setItem(LS_name, JSON.stringify(lsData))
}

/**
 * This function returns the data from the localStorage for us
 * @returns {Student} localStorage data
 */
export function getStudents(LS_name){
    // 0) Check the localStorage
    localStorageChecker(LS_student)

    // 1) Get content of ls, and pars it to json
    return JSON.parse(localStorage.getItem(LS_name))

}
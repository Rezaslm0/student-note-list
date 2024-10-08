/**
 * @file script.js is the homepage for this application
 * @author Amirhossein Izadi
 * @author Reza Salimi
 * @see {@link https://github.com/amirhossein-github/|GitHub @amirhossein-github}
 * @see {@link https://github.com/Rezaslm0|Github @Rezaslm0}
*/

import * as ls from "./ls-manager.js";
import { renderStudentInfo } from "./render.js";
import { submitListener } from "./listener.js";
import { LS_student } from "./static.js";

// Add event listener for the form submission.
document.getElementById('inputForm').addEventListener('submit', submitListener)

// If there is any data, display it.
renderStudentInfo(ls.getStudents(LS_student))
console.log(renderStudentInfo(ls.getStudents(LS_student)))
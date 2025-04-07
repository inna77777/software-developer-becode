/**
 * Select the last child of the <ol> tag and put it at the beginning of the list
 * Move the <h2> of the third section in the second one and vice-versa
 * Delete the last section from the DOM, we don't need it anyways
 *
 * @format
 */

//todo 1
let list = document.querySelector("ol");
let listLC = list.lastElementChild;
let listFC = list.firstElementChild;
list.insertBefore(listLC, listFC);

//todo 2

let secondeSec = document.querySelectorAll("main > section")[1];
let thirdSec = document.querySelectorAll("main > section")[2];
let secondeSecH2 = secondeSec.querySelector("h2");
let thirdSecH2 = thirdSec.querySelector("h2");

secondeSec.insertBefore(thirdSecH2, secondeSec.firstChild);
thirdSec.insertBefore(secondeSecH2, thirdSec.firstChild);

//todo 3

thirdSec.remove();

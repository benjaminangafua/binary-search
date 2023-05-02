/**
 * Binary search
 * Search a number from the array
 * *Check in the middle 
 * *if not the right 
 * *if not in the left
 * Else return not found
 **/
// let HUNDREDNUMBER = hundredNumerals.sort((a, b) => { return a - b });
const HUNDREDNUMBER = [];
for (var i = 1; i <= 100; i++) {
    HUNDREDNUMBER.push(i);
}
document.querySelector("#arrayNum").insertAdjacentHTML("beforeend", `[${HUNDREDNUMBER}]`);

//Find the index of the number in search
function findNumberIndex(arr, l, r, search) {

    if (r >= l) {
        let middle = l + Math.round((r - l) / 2);

        if (arr[middle] == search) {
            return middle
        }
        //If number is on the 
        if (arr[middle] > search) {
            return findNumberIndex(arr, l, middle - 1, search)
        }
        return findNumberIndex(arr, middle + 1, r, search)
    }
    return alert("Enter a valid number")
}

document.querySelector("#clk-btn").addEventListener("click", () => {
    console.log("CLick");
    const SEARCHNUMBER = Number(document.querySelector("#num").value);

    let arra = HUNDREDNUMBER;
    let right = arra.length;
    let result = findNumberIndex(arra, 0, right - 1, SEARCHNUMBER);

    document.querySelector("#searchPos").insertAdjacentHTML("beforebegin",
        `The Indext of ${SEARCHNUMBER} is: ${result}`)

})


//         /**
//          * This function takes two parameters:
//          *  number to search and
//          *  array of 100 number to search in
//          */
//         function search(num, arr) {
//             let mid = Math.round(arr.length / 2);

//             /**
//              * Return a array of the searched when met
//              */
//             if (num == arr[mid]) {
//                 return num;
//             } else {
//                 /**
//                  * If the number in search is less than the middle
//                  *  remove all number greater than the middle
//                  */
//                 if (arr[mid] > num) {
//                     console.log(arr[mid] + " is greater than " + num + " checking left");
//                     arr.splice(mid);
//                     console.log(arr);
//                     /**
//                      * If the number in search is greater than the middle
//                      *  remove all number less than the middle
//                      */
//                     return search(num, arr);

//                 } else if (arr[mid] < num) {
//                     console.log(arr[mid] + " is less than " + num + " checking right");
//                     arr.splice(0, mid + 1);
//                     console.log(arr);

//                     return search(num, arr);

//                 }
//             }
//         }

//         function findNumber() {
//             //Hundred to search in
//             let array_of_num = [];
//             for (var i = 1; i <= 100; i++) {
//                 array_of_num.push(i);
//             }
//             console.log(array_of_num);

//             //The number to be search for
//             const get_num = Number(document.querySelector("#num").value);
//             search(get_num, array_of_num);
//         }

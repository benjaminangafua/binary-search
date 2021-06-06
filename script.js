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
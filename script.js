/**
 * Binary search
 * Search a number from the array
 * *Check in the middle 
 * *if not the right 
 * *if not in the left
 * Else return not found
 **/
let hundredNumerals = [
    91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    81, 82, 83, 84, 85, 86, 87, 88, 89, 90
]
let sortedNum = hundredNumerals.sort((a, b) => { return a - b });
document.querySelector("#arrayNum").insertAdjacentHTML("beforeend", `${sortedNum}`);

function searchNumber(arr, l, r, search) {

    if (r >= l) {
        let middle = l + Math.round((r - l) / 2);

        if (arr[middle] == search) {
            return middle
        }
        if (arr[middle] > search) {
            return searchNumber(arr, l, middle - 1, search)
        }
        return searchNumber(arr, middle + 1, r, search)
    }
    return alert("Enter a valid number")
}

document.querySelector("#clk-btn").addEventListener("click", () => {
    console.log("CLick");
    const SEARCHINGNUMBER = Number(document.querySelector("#num").value);

    let arra = sortedNum;
    let right = arra.length;
    let result = searchNumber(arra, 0, right - 1, SEARCHINGNUMBER);

    document.querySelector("#searchPos").insertAdjacentHTML("beforebegin",
        `Indext of the number is: ${result}`)

})
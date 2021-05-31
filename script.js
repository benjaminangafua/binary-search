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

 function findNum() {
     const SEARCHINGNUMBER = Number(document.querySelector("#num").value);
     searchNum(SEARCHINGNUMBER, sortedNum)
 }


 function searchNum(num, arr) {

     let halfTheNum = Math.round(arr.length / 2);

     if (num === arr[middle]) {
         return num
     } else {
         if (num < arr[middle]) {
             arr.splice(middle);
             console.log("This is", arr)

         } else if (num > arr[middle]) {
             arr.splice(0, middle)
             console.log(arr)
         }
         searchNum(num, arr)
     }

 }
//  ["ravindra","chandra","pushpesh"]
// ["ravind$$","chandr$","push$e$$"]

let arr = ["ravindra", "chandra", "pushpesh"];

for (let i = 0; i < arr.length; i++) {
    let char = {}; 
    let str = arr[i];
    let result = "";

    for (let j = 0; j < str.length; j++) {
        if (char[str[j]]) {
            if (str[j] === str[0]) {
                result += "$";
            } else {
                result += str[j];
            }
        } else {
            char[str[j]] = 1; 
            result += str[j];
        }
    }

    arr[i] = result; 
}

console.log(arr);

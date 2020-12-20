function reverseString(str) {
    var strSplit = str.split("");
    var reverseArr = strSplit.reverse();
    return reverseArr.join("");;
}

console.log(reverseString("12345"));
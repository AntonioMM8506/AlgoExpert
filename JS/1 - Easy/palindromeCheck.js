function isPalindrome(string) {
    let strToArray = string.split(""); //Convert string to array, each character into an index
    let reverseArray = strToArray.reverse();//Revert the array poistions
    let reverseString = reverseArray.join("");//Get the array together into a word

    let res = (reverseString==string)? true:false;
    console.log(res);
    return res;

}//End of isPalindrome

isPalindrome("abcdcba"); //true
isPalindrome("a"); //true
isPalindrome("abb"); //false
isPalindrome("abcdefghhgfedcba");//true
isPalindrome("abcdefghihgfeddcba");//false

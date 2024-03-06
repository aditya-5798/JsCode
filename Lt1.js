
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true

var isValid = function (s) {

    const arr = s.split('');
    let res = false;
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == '(' && arr[i + 1] == ')' || arr[i] == '[' && arr[i + 1] == ']' || arr[i] == '{' && arr[i + 1] == '}') {
            res = true;
            i++;
        }
        else
            return false;
    }

};

console.log(isValid("(){)[]"));
// console.log(isValid());
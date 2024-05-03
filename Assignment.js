
// Print odd numbers in an array

const Odd = (arr) => {
    arr.forEach((num) => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};

((arr) => {
    arr.forEach((num) => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
})([1, 2, 3, 4, 5]);



//Convert all the strings to title caps in a string array


const title = (arr) => {
    return arr.map((str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
};

((arr) => {
    const title = arr.map((str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
    console.log(title);
})(["hello", "world", "how", "are", "you"]);




//Sum of all numbers in an array
const sumArray = (arr) => {
    return arr.reduce((acc, num) => acc + num, 0);
};


((arr) => {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    console.log(sum);
})([1, 8, 3, 5, 5]);

//Return all the prime numbers in an array

const getPrimes = (arr) => {
    return arr.filter((num) => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    });
};

((arr) => {
    const primes = arr.filter((num) => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    });
    console.log(primes);
})([2, 3, 5, 6, 7, 11, 13, 17, 19, 23]);



//Return all the palindromes in an array
// Anonymous function
const getPalindromes = (arr) => {
    return arr.filter((str) => str === str.split("").reverse().join(""));
};
((arr) => {
    const palindromes = arr.filter((str) => str === str.split("").reverse().join(""));
    console.log(palindromes);
})(["level", "hello", "radar", "world", "racecar"]);




//Return median of two sorted arrays of the same size.

const medianOfArrays = (arr1, arr2) => {
    const merged = [...arr1, ...arr2].sort((a, b) => a - b);
    const mid = Math.floor(merged.length / 2);
    if (merged.length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
};
((arr1, arr2) => {
    const merged = [...arr1, ...arr2].sort((a, b) => a - b);
    const mid = Math.floor(merged.length / 2);
    if (merged.length % 2 === 0) {
        console.log((merged[mid - 1] + merged[mid]) / 2);
    } else {
        console.log(merged[mid]);
    }
})([1, 3, 5], [2, 4, 6]);



//Remove duplicates from an array

const removeDuplicates = (arr) => {
    return arr.filter((value, index) => arr.indexOf(value) === index);
};
((arr) => {
    const uniqueArray = arr.filter((value, index) => arr.indexOf(value) === index);
    console.log(uniqueArray);
})([1, 2, 2, 3, 4, 4, 5]);



//Rotate an array by k times

const rotateArray = (arr, k) => {
    const rotation = k % arr.length;
    return arr.slice(rotation).concat(arr.slice(0, rotation));
};
((arr, k) => {
    const rotation = k % arr.length;
    const rotatedArray = arr.slice(rotation).concat(arr.slice(0, rotation));
    console.log(rotatedArray);
})([1, 2, 3, 4, 5], 2);


//------------------------------------------------------------------------------------------------------


//arrow functions.
//Print odd numbers in an array
const pri = (arr) => {
    arr.forEach((num) => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};

pri([1, 2, 3, 4, 5]);


//Convert all the strings to title caps in a string array:
const titleCaseStrings = (arr) => {
    return arr.map((str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
};

console.log(titleCaseStrings(["hello", "world", "how", "are", "you"]));



//Sum of all numbers in an array:
const su = (arr) => {
    return arr.reduce((acc, num) => acc + num, 0);
};

console.log(su([1, 2, 3, 4, 5]));




// Return all the prime numbers in an array:
const getP = (arr) => {
    return arr.filter((num) => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    });
};

console.log(getP([2, 3, 5, 6, 7, 11, 13, 17, 19, 23]));



//Return all the palindromes in an array:

const getPa = (arr) => {
    return arr.filter((str) => str === str.split("").reverse().join(""));
};

console.log(getPa(["level", "hello", "radar", "world", "racecar"]));







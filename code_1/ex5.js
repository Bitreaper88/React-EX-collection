let str1 = "Hi";
let str2 = "world";


let str_sum = str1 + str2;

// console.log("length of str_sum: "  + str_sum.length);
// console.log("str1 lenght"  + str1.length);
// console.log("str2 lenght"  + str2.length);

let str_avg  = (str1.length + str2.length) / 2;

if (str1.length < str_avg) {
    console.log("str1 lenght: "  + str1.length);
}


if (str2.length < str_avg ) {
    console.log("str2 lenght: "  + str2.length);
}

if (str_sum < str_avg) {
    console.log("length of str_sum: "  + str_sum.length);
}
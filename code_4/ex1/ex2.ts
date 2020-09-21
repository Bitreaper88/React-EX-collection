
const input: Array<string> = ["be", "bo", "ba", "bu", "bo"];

input.forEach((str, i)=> {
    setTimeout(() => {
        console.log(str);
      }, i * 1000); // for each loop the delay is multiplied by is index so it goes like 1000, 2000, 3000... through the for each
});


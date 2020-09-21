const getValue = function() {
  return new Promise((res, rej) => {
      setTimeout(() => {
          res({ value: Math.random() });
      }, Math.random() * 1500);
  });
};

Promise.all([getValue(), getValue()]).then((values: any) => {
  console.log(`Value 1 is ${values[0].value} and value 2 is ${values[1].value}`);
});


( async () => {
  const a: any = await getValue();
  const b: any = await getValue();
  console.log(`Value 1 is ${a.value} and value 2 is ${b.value}`);
})();


getValue()
.then((result) => {
  const result1: any = result;
  return Promise.all([getValue(), result1]);
})
.then(([result, result1]) => {
  const result2: any  = result;
  console.log(`Value 1 is ${result1.value} and value 2 is ${result2.value}`);
});


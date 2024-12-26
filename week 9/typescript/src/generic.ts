function identity<T>(arg: T): T {
  return arg;
}

let out1 = identity<string>("tusahr");
let out2 = identity<number>(3);

function getFirstElement<T>(arr: T[]) {
  return arr[0];
}

const el = getFirstElement(["tushar", "tuahar" ]);

console.log(el.toUpperCase());

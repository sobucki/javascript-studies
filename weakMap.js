const wm1 = new WeakMap();
const obj1 = {}
const obj2 = {}
wm1.set(obj1, "1")
wm1.set(obj2, "2")
console.log(wm1.get(obj1));
console.log(wm1.get(obj2));
console.log(wm1.delete(obj1));
console.log(wm1.delete(obj2));
console.log(wm1);
console.log(wm1.has(obj1));
console.log(wm1.get(obj2));

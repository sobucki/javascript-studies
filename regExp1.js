let regExp = /^(\w+)@(\w+(\.\w{2,3})+)$/;
let result = regExp.exec("john@gmail.com.br");
console.log(result);

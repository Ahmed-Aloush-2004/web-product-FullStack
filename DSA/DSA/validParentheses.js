import { Stack } from "datastructures-js";

function validParentheses(StringSeries) {
  var stack = new Stack();

  for (let index = 0; index < StringSeries.length; index++) {
    if (
      StringSeries[index] === "(" ||
      StringSeries[index] === "[" ||
      StringSeries[index] === "{"
    ) {
      stack.push(StringSeries[index]);
    } else {

      if (
        (stack.peek() === "(" && StringSeries[index] === ")") ||
        (stack.peek() === "{" && StringSeries[index] === "}") ||
        (stack.peek() === "[" && StringSeries[index] === "]")
      ) {
        stack.pop();
        if (stack.isEmpty()) return true;
      } else {
        return false;
      }
    }
  }
}
console.log(validParentheses("({]}{)})[]{}"));

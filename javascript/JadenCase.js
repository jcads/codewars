// link to kata https://www.codewars.com/kata/5390bac347d09b7da40006f6/solutions/javascript/following/best_practice

String.prototype.toJadenCase = function () {
  return this.split(" ").map(word => word.charAt(0).toUpperCase() + word.substr(1)).join(" ");
};

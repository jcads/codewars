function likes(names) {
  if (names.length === 1) return `${names[0]} likes this`;
  else if (names.length === 2) {
    return names.join(" and ") + " like this";
  }
  else if (names.length > 2) {
    let tmpNames = names.slice(0, 2);
    let res = tmpNames.join(", ");
    if (names.length === 3) return `${res} and ${names[names.length-1]} like this`;
    else return `${res} and ${names.length-2} others like this`
  }
  return "no one likes this";
}

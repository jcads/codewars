// return masked string
function maskify(cc) {
  const len = cc.length;
  return len <= 4 ? cc : `${"#".repeat(len-4)}${cc.slice(len-4)}`;
}

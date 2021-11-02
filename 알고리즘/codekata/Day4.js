const sameReverse = (num) => {
  const reverse = num.toString().split("").reverse().join("");
  console.log(num.toString() === reverse);
};

sameReverse(-121);

function findSolution(target) {
  function find(current, history) {
    if (current == target)
      return history;
    else if (current > target)
      return null;
    else
      console.log(current, history);
      return find(current + 5, "(" + history + " + 5)") ||
             find(current * 3, "(" + history + " * 3)");
  }
  return find(1, "1");
}

function zeroPad(number, width) {
  var string = String(number);
  while (string.length < width)
    string = "0" + string;
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(zeroPad(cows, 3) + " Cows");
  console.log(zeroPad(chickens, 3) + " Chickens");
  console.log(zeroPad(pigs, 3) + " Pigs");
}

// Minimum
var minimumVal = function(a, b) {
  return a > b ? b : a;
  // return the smaller number of the two
}

// recursive check a number if odd or even
var recursiveOdd = function(num) {
  var checkOdd = function(int) {
    if (int === 0) {
      return false;
    } else if (int === 1) {
      return true;
    } else {
      return checkOdd(int - 2);
    }
  }
  return checkOdd(Math.abs(num));
}

// bean counting
let beanCounting = function(str) {
  let totalB = 0;
  str.split('').forEach(ele => {
    if (ele === 'B') {
      totalB++;
    }
  });
  return totalB;
}

// char counting
let charCounting = function(str, char) {
  let totalC = 0;
  str.split('').forEach(ele => {
    if (ele === char) {
      totalC++;
    }
  });
  return totalC;
}
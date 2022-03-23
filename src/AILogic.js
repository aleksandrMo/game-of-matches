function AILogic(a, b, c) {
  var ai;
  if (b > c) {
    ai = b % (c + 1);
    if (ai === 0) ai = c;
    if (ai % 2 === 0 && ai !== 0) ai = ai - 1;
  } else {
    if (a % 2 === 0) {
      if (b % 2 === 0) ai = b;
      else {
        if (b > 1) ai = b - 1;
        else ai = 1;
      }
    } else {
      if (b % 2 === 0) ai = b - 1;
      else ai = b;
    }
  }
  return ai;
}

export default AILogic;

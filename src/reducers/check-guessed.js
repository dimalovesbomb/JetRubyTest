function checkGuessed(arr) {
  if (arr.length === 2) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[0].color === arr[1].color) {
        return arr;
      }
      return false;
    }
  }
}

export default checkGuessed;

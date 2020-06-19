const CHOOSE_CARD = 'CHOOSE_CARD';
const CHECK_OPENED = 'CHECK_OPENED';
const CHECK_GUESSED = 'CHECK_GUESSED';

export function chooseColor(id) {
  return {
    type: CHOOSE_CARD,
    id
  }
}

export function checkOpened() {
  return {
    type: CHECK_OPENED
  }
}

export function checkGuessed() {
  return {
    type: CHECK_GUESSED
  }
}

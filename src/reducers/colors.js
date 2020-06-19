const colors = (state = [], action) => {
  switch (action.type) {
    case 'CHOOSE_CARD':
      return state.map(card => {
        if (card.id === action.id) {
          return {
            id: card.id,
            color: card.color,
            isOpened: !card.isOpened,
            guessed: card.guessed
          };
        }
        return card;
      });

      case 'CHECK_OPENED':
        const openedCards = state.filter(card => card.isOpened);

        if (openedCards.length > 2) {
          return state.map(card => {
            return {
              id: card.id,
              color: card.color,
              isOpened: false,
              guessed: card.guessed
            }
          })
        }

      case 'CHECK_GUESSED':
        const cards = state.filter(card => card.isOpened);

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

        const guessedCards = checkGuessed(cards);

        if (guessedCards) {
          guessedCards.forEach(card => {
            card.guessed = true
          });

          state.concat(...state, ...guessedCards);
        }




    default:
    return state;

  }
}

export default colors;


// function checkGuessed(arr) {
//   if (arr.length === 2) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[0].color === arr[1].color) {
//         return arr;
//       }
//       return false;
//     }
//   }
// }

// const guessedCards = checkGuessed(checkOpened);
//
// if (checkOpened.length === 2) {
//   if ( guessedCards ) {
//       guessedCards.forEach( card => {
//         card.guessed = true
//       });
//       state.map( card => {
//         return {
//           id: card.id,
//           color: card.color,
//           isOpened: card.isOpened,
//           guessed: card.guessed
//         }
//       })
//   } else {
//     return state.map( card => {
//       return {
//         id: card.id,
//         color: card.color,
//         isOpened: false,
//         guessed: card.guessed
//       };
//     })
//   }
// }
//
// return state;

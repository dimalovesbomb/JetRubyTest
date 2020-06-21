import checkGuessed from './check-guessed';

const cards = (state = [], action) => {
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
              ...card,
              isOpened: false
            }
          })
        }

      case 'CHECK_GUESSED':
        const cards = state.filter(card => card.isOpened);

        if (cards.length === 2) {
          const guessedCards = checkGuessed(cards);

          if (guessedCards) {
            const guessedIds = guessedCards.map(card => card.id);

            if (guessedIds) {
              return state.map(card => {
                if (guessedIds.includes(card.id)) {
                  return { ...card, guessed: true };
                } else {
                  return { ...card };
                }
              });
            }
          }
          return state;
        }
        return state;

    default:
    return state;

  }
}

export default cards;


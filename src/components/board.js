import React from 'react';

const Board = (props) => {
  const {cards, handleClick} = props;

  return (
    <div className="board-container">
      {
        cards.map(card => {
          const isOpened = card.isOpened ? 'card_opened' : 'card_closed'
          const isGuessed = card.guessed ? 'card_guessed' : '';
          const cardColor = card.color;

          return (
            <div key={card.id}
                 id={card.id}
                 onClick={id => handleClick(card.id)}
                 className={`card ${isOpened} ${isGuessed}`}
                 style={{backgroundColor: cardColor}}>
            </div>
          );
        }
      )
      }
    </div>
  )
}

export default Board;

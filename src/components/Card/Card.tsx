import React from 'react';

interface Props {
  rank: string;
  suit: string;
}

const Card: React.FC<Props> = ({rank, suit}) => {

  const suitCard = (suit: string): string => {

    if (suit === 'diams') {
      return '♦';
    } else if (suit === 'hearts') {
      return '♥';
    } else if (suit === 'clubs') {
      return '♣';
    } else if (suit === 'spades') {
      return '♠';
    } else {
      return '';
    }

  };

  return (
    <span className={`card rank-${rank.toLowerCase()} ${suit}`}>
      <span className="rank">{rank}</span>
      <span className="suit">{suitCard(suit)}</span>
    </span>
  );
};

export default Card;

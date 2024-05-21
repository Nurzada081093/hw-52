import './App.css';
import Card from './components/Card/Card.tsx';
import CardDeck from './lib/CardDeck.ts';
import {useState} from 'react';

const cardDeck: CardDeck = new CardDeck();
const amountCards: number = cardDeck.cards.length;

const App = () => {

  const [cardsArray, setCardsArray] = useState<Card[]>([]);
  const [remainingCards, setRemainingCards] = useState<number>(amountCards);

  const dealCards = () => {

    if (remainingCards > cardsArray.length) {
      if (remainingCards >= cardsArray.length) {
        const getFiveCards = cardDeck.getCards(5);
        setCardsArray(getFiveCards);
        setRemainingCards(remainingCards - 5);
      }
    } else if (remainingCards > 0) {
      const lastCardsArray = cardDeck.getCards(remainingCards);
      setCardsArray(lastCardsArray);
      setRemainingCards(0);
    }
  };

  return (
    <>
      {cardsArray.length === 0 ? (
        <div>
          <button className="btn" onClick={dealCards}>Раздать карты</button>
          <p>Количество карт: {remainingCards}</p>
        </div>
      ) : (
        <div>
          <button className="btn" onClick={dealCards}>Раздать карты</button>
          <p>Количество карт: {remainingCards}</p>
          <div className="playingCards faceImages">
            {cardsArray.map((card, index) => (
              <Card key={index} rank={card.rang} suit={card.suit}/>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default App;

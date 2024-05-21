import './App.css';
import Card from './components/Card/Card.tsx';
import CardDeck from './lib/CardDeck.ts';


const cardDeck = new CardDeck();
console.log(cardDeck.getCard());
console.log(cardDeck.getCards(5));

console.log(cardDeck);

const App = () => {

  return (
    <>
      <div className="playingCards faceImages">
        <Card rank={'K'} suit={'diams'}/>
        <Card rank={'9'} suit={'hearts'}/>
        <Card rank={'Q'} suit={'clubs'}/>
        <Card rank={'Q'} suit={'hearts'}/>
        <Card rank={'3'} suit={'hearts'}/>
        <Card rank={'2'} suit={'spades'}/>
      </div>
    </>
  );
};

export default App;

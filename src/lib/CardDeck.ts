import Card from './Card';

class CardDeck {
  private cards: Card[];

  constructor() {
    this.cards = [];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = ['hearts', 'diams', 'clubs', 'spades'];

    for (const suit of suits) {
      for (const rank of ranks) {
        this.cards.push(new Card(rank, suit));
      }
    }
  }

  public getCard(): Card {
    const randomNumber = Math.floor(Math.random() * this.cards.length);
    const cardRemove = this.cards.splice(randomNumber, 1);
    return cardRemove[0];
  }

  public getCards(howMany: number): Card[] {
    const arrayOfTheAmountCards: Card[] = [];
    for (let i = 0; i < howMany; i++) {
      arrayOfTheAmountCards.push(this.getCard());
    }
    return arrayOfTheAmountCards;
  }
}

export default CardDeck;








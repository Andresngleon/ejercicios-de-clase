import { Card } from "../Models/cards.js"

export class gameService {
    constructor(viewController) {
        this.viewController = viewController;
    }

    getCards() {
        var request = new XMLHttpRequest();
        request.open('GET', 'https://us-central1-beehivebackend-23257.cloudfunctions.net/app/cards/8');
        request.onreadystatechange = this.getCardsCompleted.bind(this);
        request.send();

    }

    getCardsCompleted(event) {
        var cards = []
        var request = event.target;
        if (request.readyState === 4) {
            if (request.status === 200) {
                var cardsData = JSON.parse(request.response);
                cardsData.cards.forEach(cardData => {
                    console.log(cardsData);
                    var card = new Card(cardData.id, cardData.icon, cardData.isDiscovered);
                    cards.push(card);
                });

                this.viewController.start(cards);
            }
        }
    }

    sendScore(score) {
        var request = new XMLHttpRequest();
        request.open('POST', 'https://us-central1-beehivebackend-23257.cloudfunctions.net/app/scores');
        request.onreadystatechange = this.sendScoreCompleted.bind(this);
        request.send(JSON.stringify(score));
    }

    sendScoreCompleted(event) {
        var request = event.target;
        if (request.readyState === 4) {
            if (request.status === 200) {
                console.log(request);
            }
        }
    }

}
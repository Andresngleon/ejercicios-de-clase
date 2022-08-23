import { ViewController } from "../viewController.js";
import { CardView } from "../Views/cardView.js";
import { gameService } from "./gameService.js";

export class gameViewController extends ViewController {
    constructor(appManager, parent) {
        super(appManager, parent, 'Game');
        this.mainContainer.classList.add('gameViewController');
        this.service = new gameService(this);
        //this.service = null;
        this.cardViews = [];

        var hudContainer = document.createElement('div');
        hudContainer.className = 'gameViewController_hudContainer';
        this.contentContainer.appendChild(hudContainer);
        this.contentContainer.classList.add('gameViewController_cardsContainer');

        this.cardsContainer = document.createElement('div');
        this.cardsContainer.className = 'gameViewController_cardsContainer';
        this.contentContainer.appendChild(this.cardsContainer);

        this.clicksLbl = document.createElement('p');
        hudContainer.appendChild(this.clicksLbl);
        this.updateClicks();
        //this.clicksLbl.innerHTML = `<b>Clicks:</b> ${this.appManager.clicks}`;
        this.clicksLbl.className = 'gameViewController_clicksLbl';

        this.timeLbl = document.createElement('p');
        hudContainer.appendChild(this.timeLbl);
        this.updateTime();
        this.timeLbl.className = 'gameViewController_timeLbl';

        this.resetBtn = document.createElement('button');
        hudContainer.appendChild(this.resetBtn);
        this.resetBtn.innerHTML = 'RESET';
        this.resetBtn.className = 'gameViewController_resetBtn';
        this.resetBtn.onclick = this.reset.bind(this);

        this.service.getCards();

    }

    start(cards) {
        this.cardsContainer.innerHTML = '';
        this.cardViews = [];
        cards.forEach(card => {
            var cardView = new CardView(this.cardsContainer, card, this.appManager);
            this.cardViews.push(cardView);
        });
    }

    updateClicks() {
        this.clicksLbl.innerHTML = `<b>Clicks:</b> ${this.appManager.clicks}`;
    }

    updateTime() {
        this.timeLbl.innerHTML = `<b>Time:</b> ${this.appManager.time}`;
    }

    end() {
        this.cardViews.forEach(cardView => {
            cardView.end();
        })
    }

    isGameCompleted() {
        for (let i = 0; i < this.cardViews.length; i++) {
            const card = this.cardViews[i].card;
            if (!card.isDiscovered) {
                return false;
            }
        }
        return true;
    }

    reset() {
        this.service.getCards();
        this.appManager.reset();
    }

    show() {

    }

    hide() {

    }

    sendScore(score) {
        this.service.sendScore(score);
    }
}

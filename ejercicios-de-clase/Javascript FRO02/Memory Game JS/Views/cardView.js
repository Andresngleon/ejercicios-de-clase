import { View } from "../Views/view.js"

export class CardView extends View {
    constructor(parent, card, appManager) {
        super(parent);
        this.card = card;
        this.appManager = appManager;
        this.mainContainer.classList.add('cardView_mainContainer');
        this.defaultIcon = '🖖🏻';
        this.mainContainer.innerHTML = this.defaultIcon;
        this.mainContainer.onclick = this.onSelected.bind(this);

    }

    onSelected() {
        this.appManager.onCardViewSelected(this);
    }

    show() {
        this.mainContainer.classList.add('cardView_disabled');
        this.appManager.updateClicks();
        this.mainContainer.innerHTML = this.card.icon;
    }

    hide() {
        this.mainContainer.classList.remove('cardView_disabled');
        this.mainContainer.innerHTML = this.defaultIcon;
    }

    end() {
        this.mainContainer.classList.add('cardView_disabled');
    }

    discover() {
        this.card.isDiscovered = true;
        this.mainContainer.classList.add('cardView_discovered');
    }
}

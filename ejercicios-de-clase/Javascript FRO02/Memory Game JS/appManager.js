import { MenuViewController } from './Menu/menuViewcontroller.js';
import { ScoresViewController } from './Score/scoreViewController.js';
import { gameViewController } from './Game/gameViewcontroller.js';

export class AppManager {
    constructor() {
        this.appContainer = document.getElementById('appContainer');
        this.menuViewController = null;
        this.scoresViewController = null;
        this.gameViewController = null;

        this.username = window.localStorage.getItem('username');
        this.clicks = 0;
        this.time = 0;
        this.timer = null;
        this.timeLimit = 1000;
        this.showingTimer = null;

        if (this.username === null) {
            this.menuViewController = new MenuViewController(this, this.appContainer);
        } else {
            //this.showGame();
            this.showScores();
        }

        this.cardView1 = null;
        this.cardView2 = null;
    }


    showScores() {
        this.scoresViewController = new ScoresViewController(this, appContainer);

    }

    showGame() {
        this.gameViewController = new gameViewController(this, appContainer);
        this.timer = window.setInterval(this.updateTime.bind(this), 1000);
        console.log(this.gameViewController);
    }

    removeViewController(viewController) {
        this.reset(false);
        this.appContainer.removeChild(viewController.mainContainer);
    }

    //removeScores() {
    //  this.appContainer.removeChild(this.ScoresViewController.mainContainer);
    //}

    removeGame() {

    }

    updateClicks() {
        console.log("this.updateClicks");
    }

    setUsername(username) {
        this.username = username;
        window.localStorage.setItem('username', username);
    }

    onCardViewSelected(cardView) {
        if (this.cardView1 !== null && this.cardView2 !== null) return;

        this.clicks += 1;
        this.gameViewController.updateClicks();

        if (this.cardView1 === null) {
            this.cardView1 = cardView;
            this.cardView1.show();

        } else if (this.cardView2 === null) {
            this.cardView2 = cardView;
            this.cardView2.show();
            this.showingTimer = window.setTimeout(this.resetSelectedCardViews.bind(this), 1000);
        }
    }

    resetSelectedCardViews() {

        window.clearTimeout(this.showingTimer);
        this.showingTimer = null;

        if (this.cardView1.card.id === this.cardView2.card.id) {
            this.cardView1.discover();
            this.cardView2.discover();
            this.cardView1 = null;
            this.cardView2 = null;

            if (this.gameViewController.isGameCompleted()) {
                console.log('Game Completed');
                this.cleanGameTimer();
                this.gameViewController.sendScore({ "username": this.username, "clicks": this.clicks, "time": this.time, "score": (this.clicks + this.time) });
            }

        } else {
            this.cardView1.hide();
            this.cardView2.hide();
            this.cardView1 = null;
            this.cardView2 = null;

        }
    }

    cleanGameTimer() {
        window.clearInterval(this.timer);
        this.timer = null;
    }

    onCardSelected(cardView) {
        this.clicks += 1;
        this.gameViewController.updateClicks();

        //if (this.cardView1 === null) {
        //    this.cardView1 = cardView;
        //} else if (this.cardView2 === null) {
        //  this.cardView2 = cardView;
        //this.showingTimer = window.setTimeout(this.resetSelectedCardViews.bind(this), 1000);


    }



    updateTime() {
        if (this.time < this.timeLimit) {
            this.time += 1;
            this.gameViewController.updateTime();
        } else {
            window.clearInterval(this.timer);
            this.gameViewController.end();
        }
    }

    reset(isCreatingTimer = true) {
        this.clicks = 0;
        this.time = 0;
        this.cleanGameTimer();
        //window.clearInterval(this.timer);
        if (isCreatingTimer) {
            this.timer = window.setInterval(this.updateTime.bind(this), 1000);

        }
        this.gameViewController.updateClicks();
        this.gameViewController.updateTime();
    }
}

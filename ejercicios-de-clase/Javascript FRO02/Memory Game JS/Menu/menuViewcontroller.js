import { ViewController } from "../viewController.js";

export class MenuViewController extends ViewController {
    constructor(appManager, parent) {
        super(appManager, parent, 'Menu');
        this.mainContainer.classList.add('menuViewController');
        this.backBtn.hidden = true;

        var text1Lbl = document.createElement('h1');
        var text2Lbl = document.createElement('h2');
        var text3Lbl = document.createElement('h3');
        this.usernameIn = document.createElement('input');
        this.playBtn = document.createElement('button');
        this.scoresBtn = document.createElement('button');

        this.contentContainer.appendChild(text1Lbl);
        this.contentContainer.appendChild(text2Lbl);
        this.contentContainer.appendChild(text3Lbl);
        this.contentContainer.appendChild(this.usernameIn);
        this.contentContainer.appendChild(this.playBtn);
        this.contentContainer.appendChild(this.scoresBtn);

        text1Lbl.innerHTML = '<b>Card Memory Game</b>';
        text2Lbl.innerHTML = 'Emoji version 💪🏼🔥😎';
        text3Lbl.innerHTML = 'Enter username to play';
        this.usernameIn.placeholder = 'Username'
        this.playBtn.innerHTML = 'PLAY'
        this.scoresBtn.innerHTML = 'SCORES'

        this.contentContainer.classList.add('menuviewController.contentContainer');
        text1Lbl.className = 'menuViewController.text1Lbl';
        text2Lbl.className = 'menuViewController.text2Lbl';
        text3Lbl.className = 'menuViewController.text3Lbl';
        this.usernameIn.classList.add('menuViewController_usernameIn');
        this.playBtn.classList.add('menuViewController_Buttons');
        this.scoresBtn.classList.add('menuViewController_Buttons');

        this.playBtn.onclick = this.onPlayBtn.bind(this);
        this.scoresBtn.onclick = this.onScoreBtn.bind(this);
    }

    onPlayBtn() {
        this.appManager.showGame();
    }

    onScoreBtn() {
        this.appManager.showScores();
    }
}
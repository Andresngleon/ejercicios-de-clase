import { View } from "./Views/view.js";

export class ViewController extends View {
    constructor(appManager, parent, title = '') {
        super(parent);
        this.appManager = appManager;
        //this.parent = parent;
        this.service = null;
        this.mainContainer.classList.add('viewController_mainContainer');
        this.navigationBar = document.createElement('div');
        this.contentContainer = document.createElement('div');

        this.parent.appendChild(this.mainContainer);
        this.mainContainer.appendChild(this.navigationBar);
        this.mainContainer.appendChild(this.contentContainer);

        //this.mainContainer.className = 'mainContainer';
        this.navigationBar.className = 'navigationBar';
        this.contentContainer.className = 'contentContainer';

        this.backBtn = document.createElement('button');
        this.backBtn.innerHTML = 'BACK';
        this.navigationBar.appendChild(this.backBtn);

        this.title = document.createElement('p');
        this.title.innerHTML = title;
        this.title.className = 'viewController_titleLbl';
        this.navigationBar.appendChild(this.title);

        this.backBtn.onclick = this.remove.bind(this);

    }

    show() {

    }

    hide() {

    }

    remove() {
        this.appManager.removeViewController(this);

    }



}
import { ViewController } from "../viewController.js";
import { ScoresService } from "./scoreService.js";

export class ScoresViewController extends ViewController {
    constructor(appManager, parent) {
        super(appManager, parent, 'Scores');
        this.service = new ScoresService(this);
        this.mainContainer.classList.add('ScoresViewController');
        this.contentContainer.classList.add('scoresViewController_contentContainer');

        //this.mainContainer.style.left = '250px';
        //this.navigationBar.style.backgroundColor = 'yellow';
        //this.contentContainer.style.backgroundColor = 'blue';
        this.backBtn.onclick = this.remove.bind(this);
        this.service.getScores();
    }

    start(scores) {
        var table = document.createElement('table');
        this.contentContainer.appendChild(table);
        var tr = document.createElement('tr');
        table.appendChild(tr);

        var th = document.createElement('th');
        th.innerHTML = 'Name';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Score';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Time';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Clicks';
        tr.appendChild(th);

        scores.forEach(score => {
            tr = document.createElement('tr');
            tr.className = 'scoresViewController_tr';
            table.appendChild(tr);

            var td = document.createElement('td');
            td.innerHTML = score.username;
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = score.score;
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = score.time;
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = score.clicks;
            tr.appendChild(td);

            //var p = document.createElement('p');
            //p.innerHTML = `Nombre: ${score.username}, Time:${score.time}, Clicks:${score.clicks}, Score:${score.score}`;
            //this.contentContainer.appendChild(p);

        });


    }

    show() {


    }

    hide() {


    }

    //remove() {
    // this.appManager.removeScores();
    //}




}
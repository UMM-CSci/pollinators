import {Component, OnInit} from '@angular/core';

@Component({
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public nugget: string;
    public nuggets = ["There are almost 20,000 known species of bees in the world. About 3,500 live in the United States, and in Minnesota, there are probably close to 400.",
        "Animals that assist plants in their reproduction as pollinators include species of ants, bats, bees, beetles, birds, butterflies, flies, moths, wasps, as well as other unusual animals.",
        "Keep bee flowers clean - do no treat bee-friendly flowers with pesticides"];

    constructor() {

    }

    ngOnInit() {
        const index = Math.floor(Math.random() * this.nuggets.length);
        this.nugget = this.nuggets[index];
    }
}

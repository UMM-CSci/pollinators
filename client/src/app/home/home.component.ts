import {Component, OnInit} from '@angular/core';
import {Nugget} from "./nugget";
import {HomeService} from "./home.service";

@Component({
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public nugget: Nugget;
    public nuggets: Nugget[];

    constructor(public homeService: HomeService) {

    }

    ngOnInit() {
        this.homeService.getNuggets().subscribe(
            nuggets => {
                this.nuggets = nuggets;
                const index = Math.floor(Math.random() * this.nuggets.length);
                this.nugget = this.nuggets[index];
            },
            err => {
                console.log(err);
            }
        );
    }
}

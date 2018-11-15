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
    public currentNuggetIndex: number;

    constructor(public homeService: HomeService) {

    }

    public getNugget(): Nugget {
        if (this.nuggets != null) {
            const index = Math.floor(Math.random() * this.nuggets.length);
            this.currentNuggetIndex = index;
            return this.nugget = this.nuggets[this.currentNuggetIndex];
        }
        return (this.nugget = { _id: null, info: '', source: '', image_location: '' });
    }

    public getNextNugget(): Nugget {
        if(this.currentNuggetIndex != this.nuggets.length-1){
            this.currentNuggetIndex = this.currentNuggetIndex + 1;
        } else {
            this.currentNuggetIndex = 0;
        }

        return this.nugget = this.nuggets[this.currentNuggetIndex];
    }

    ngOnInit() {
        // if () {
            this.homeService.getNuggets().subscribe(
                (nuggets: Nugget[]) => {
                    this.nuggets = nuggets;
                    this.getNugget();
                },
                err => {
                    console.log(err);
                }
            );
        // }
    }
}

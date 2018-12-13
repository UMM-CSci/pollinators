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
    public currentIndex: number;

    // an array for each category: behavior, home tips, and habitat
    public behavior: Nugget[] = new Array(0);
    public homeTips: Nugget[] = new Array(0);
    public habitat: Nugget[] = new Array(0);

    constructor(public homeService: HomeService) {

    }

    public getNugget(): Nugget {
        if (this.nuggets != null) {
            this.currentIndex = Math.floor(Math.random() * this.nuggets.length);
            return this.nugget = this.nuggets[this.currentIndex];
        }
        return (this.nugget = { _id: null, info: '', source: '', image_location: '', category: '' });
    }

    public getNextNugget(): Nugget {
        // index wraps around to zero when it reaches the last index in the array
        this.currentIndex = (this.currentIndex + 1) % this.nuggets.length;

        return this.nugget = this.nuggets[this.currentIndex];
    }

    public getBehaviorNugget(): Nugget {
        // index wraps around to zero when it reaches the last index in the array
        this.currentIndex = (this.currentIndex + 1) % this.behavior.length;

        return this.nugget = this.behavior[this.currentIndex];
    }

    public getHomeTipsNugget(): Nugget {
        // index wraps around to zero when it reaches the last index in the array
        this.currentIndex = (this.currentIndex + 1) % this.homeTips.length;

        return this.nugget = this.homeTips[this.currentIndex];
    }

    public getHabitatNugget(): Nugget {
        // index wraps around to zero when it reaches the last index in the array
        this.currentIndex = (this.currentIndex + 1) % this.habitat.length;

        return this.nugget = this.habitat[this.currentIndex];
    }

    private fillCategories() {
        // put each nugget in an array for it's category
        this.nuggets.forEach(nugget => {
            switch (nugget.category) {
                case 'behavior': {
                    this.behavior.push(nugget);
                    break;
                }
                case 'home': {
                    this.homeTips.push(nugget);
                    break;
                }
                case 'habitat': {
                    this.habitat.push(nugget);
                    break;
                }
                // if it doesn't have a category, just add it to everything
                default: {
                    this.habitat.push(nugget);
                    this.homeTips.push(nugget);
                    this.behavior.push(nugget);
                }
            }
        })
    }

    ngOnInit() {
        // if () {
            this.homeService.getNuggets().subscribe(
                (nuggets: Nugget[]) => {
                    this.nuggets = nuggets;
                    this.getNugget();
                    this.fillCategories();
                },
                err => {
                    console.log(err);
                }
            );
        // }
    }
}

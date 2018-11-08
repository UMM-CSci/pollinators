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

    public getNugget(): Nugget {
        if (this.nuggets != null) {
            const index = Math.floor(Math.random() * this.nuggets.length);
            return this.nugget = this.nuggets[index];
        }
        return (this.nugget = { _id: null, info: '', source: '', image_location: '' });
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

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../data.service";

@Component({
    selector: "app-people-list",
    templateUrl: "./people-list.page.html",
    styleUrls: ["./people-list.page.scss"],
})
export class PeopleListPage implements OnInit {
    constructor(private router: Router, private _dataService: DataService) {}

    ngOnInit() {
        //this.getFoods()
    }

    data = [
        {
            Name: "Anthon",
            Phone: "0524706543",
            Occupation: "student",
            Languages: "he+ru+en",
        },
    ];

    // getFoods() {
    //      this._dataService.getFoods().subscribe(
    //         data => console.log(data),
    //         err => console.error(err),
    //         () => console.log('done loading foods')
    //       );
    //     }

    handlePeopleSelection() {
        console.log("handlePeopleSelection");
        this.router.navigate([
            "/people-details",
            {
              data: this.data[0],
            },
        ]);
    }
}

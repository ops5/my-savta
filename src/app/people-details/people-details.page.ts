import { Component, OnInit } from "@angular/core";
//import { CallNumber } from "@ionic-native/call-number/ngx";

@Component({
    selector: "app-people-details",
    templateUrl: "./people-details.page.html",
    styleUrls: ["./people-details.page.scss"],
})
export class PeopleDetailsPage implements OnInit {
    constructor() {}

    ngOnInit() {}

    // callToNumber() {
    //     this.callNumber
    //         .callNumber("0548586695", true)
    //         .then((res) => console.log("Launched dialer!", res))
    //         .catch((err) => console.log("Error launching dialer", err));
    // }
}

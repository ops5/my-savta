import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json", "Access-Control-Allow-Origin": "*"}),
};

@Injectable({
    providedIn: "root",
})
export class DataService {
    constructor(private http: HttpClient) {}

    // Uses http.get() to load data from a single API endpoint
    getFoods() {
        //return this.http.get("http://185.195.168.10/i+need+help+to+find+the+remote/he/Ashdod");
        return {"Name": "Anthon", "Phone": "0524706543", "Occupation": "student", "Languages": "he+ru+en"}
    }
}

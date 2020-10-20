import { Component, OnInit } from "@angular/core";
import { SpeechRecognition } from "@ionic-native/speech-recognition/ngx";
import { Router } from "@angular/router";

@Component({
    selector: "app-speech-rec",
    templateUrl: "./speech-rec.page.html",
    styleUrls: ["./speech-rec.page.scss"],
})
export class SpeechRecPage implements OnInit {
    constructor(
        private speechRecognition: SpeechRecognition,
        private router: Router
    ) {}

    options: any = {
        language: "en-US",
    };

    selectedLanguage = "en-US";

    ngOnInit() {}

    changeLanguage(language) {
        console.log(language);
        this.selectedLanguage = language;
    }

    checkPermission() {
        this.speechRecognition.hasPermission().then(
            (hasPermission: boolean) => {
                alert(hasPermission);
            },
            (err) => {
                alert(JSON.stringify(err));
            }
        );
    }

    requestPermission() {
        this.speechRecognition.requestPermission().then(
            () => alert("Granted"),
            () => alert("Denied")
        );
    }

    startListening() {
        this.speechRecognition
            .startListening({ language: this.selectedLanguage })
            .subscribe(
                (matches: string[]) => alert(matches),
                (onerror) => alert(onerror)
            );
    }

    startListening2() {
        this.speechRecognition.hasPermission().then(
            (hasPermission: boolean) => {
                if (hasPermission) {
                    //alert(hasPermission);
                    this.speechRecognition
                        .startListening({ language: this.selectedLanguage })
                        .subscribe(
                            (matches: string[]) => {
                                this.router.navigate([
                                    "/people-list",
                                    {
                                        item: JSON.stringify(
                                            this.selectedLanguage
                                        ),
                                    },
                                ]);
                            },
                            (onerror) => alert(onerror)
                        );
                } else {
                    this.speechRecognition.requestPermission().then(
                        () => {
                            this.speechRecognition
                                .startListening({
                                    language: this.selectedLanguage,
                                })
                                .subscribe(
                                    (matches: string[]) => {
                                        this.router.navigate([
                                            "/people-list",
                                            {
                                                item: JSON.stringify(
                                                    this.selectedLanguage
                                                ),
                                            },
                                        ]);
                                    },
                                    (onerror) => alert(onerror)
                                );
                        },
                        () => alert("Denied")
                    );
                }
            },
            (err) => {
                //alert(JSON.stringify(err));
                this.speechRecognition.requestPermission().then(
                    () => {
                        this.speechRecognition
                            .startListening({ language: this.selectedLanguage })
                            .subscribe(
                                (matches: string[]) => {
                                    this.router.navigate([
                                        "/people-list",
                                        {
                                            item: JSON.stringify(
                                                this.selectedLanguage
                                            ),
                                        },
                                    ]);
                                },
                                (onerror) => alert(onerror)
                            );
                    },
                    () => alert("Denied")
                );
            }
        );
    }

    test() {
        // Check feature available
        this.speechRecognition
            .isRecognitionAvailable()
            .then((available: boolean) => console.log(available));

        // Start the recognition process
        this.speechRecognition.startListening().subscribe(
            (matches: string[]) => console.log(matches),
            (onerror) => console.log("error:", onerror)
        );

        // Stop the recognition process (iOS only)
        this.speechRecognition.stopListening();

        // Get the list of supported languages
        this.speechRecognition.getSupportedLanguages().then(
            (languages: string[]) => console.log(languages),
            (error) => console.log(error)
        );

        // Check permission
        this.speechRecognition
            .hasPermission()
            .then((hasPermission: boolean) => console.log(hasPermission));

        // Request permissions
        this.speechRecognition.requestPermission().then(
            () => console.log("Granted"),
            () => console.log("Denied")
        );
    }
}

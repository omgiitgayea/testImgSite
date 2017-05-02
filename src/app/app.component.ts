import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    baseUrl = 'http://localhost:3000/';
    title = 'app works!';
    testFile = 'stratFront.jpg';
    testPath = this.baseUrl + this.testFile;
}

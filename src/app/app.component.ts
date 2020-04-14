import { Component } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  txt: string;

  constructor(private _clipBoardService: ClipboardService) {}

  copyToCliboard() {
    this._clipBoardService.copyFromContent(this.txt);
  }
}

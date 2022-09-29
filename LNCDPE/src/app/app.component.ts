import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/css/app.component.css']
})

export class AppComponent {
  title = 'Ladder Now Demo';

  constructor(private _httpService: HttpClient) { }

  apiValues: string[] = [];

  ngOnInit() {
    this._httpService.get('www.agdis.tech/api/InvServiceApi/InvServices').subscribe(values => {
      
    });
  }
}

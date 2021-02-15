import { Component } from '@angular/core';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'git-commits';

  constructor(private _httpService: HttpService) { }

  ngOnInit() {

    this._httpService.sendGetRequest('repos/smartweber/rails-backbone/commits').subscribe((data: any[])=>{
      console.log(data);
    })  
  }
}

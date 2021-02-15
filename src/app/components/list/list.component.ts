import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  ngOnInit(): void {
    this._httpService.sendGetRequest('repos/smartweber/rails-backbone/commits').subscribe((data: any[])=>{
      console.log(data);
    });
  }

}

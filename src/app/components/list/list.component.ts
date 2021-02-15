import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  posts: any;
  page = 1;
  count = 0;
  tableSize = 5;
  tableSizes = [5, 20, 50];

  constructor(private _httpService: HttpService) { }

  ngOnInit(): void {
    this.fetchAllCommits();
  }

  fetchAllCommits() {
    const username = 'smartweber';
    const repoName = 'git-commits';

    this._httpService.sendGetRequest(`repos/${username}/${repoName}/commits`).subscribe((data: any[])=>{
      this.posts = data;
      this.count = this.posts.length;
    });
  }

  onTableDataChange(event: number){
    this.page = event;
  }  

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
  }

}

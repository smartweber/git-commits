import { Component, OnInit } from '@angular/core';
import { CommitData } from 'src/app/Interfaces/commit.interface';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  page: number;
  count: number;
  tableSize: number;
  pageLoaded: boolean;
  posts: CommitData[];
  tableSizes: number[];

  constructor(private _httpService: HttpService) {
    this.pageLoaded = false;
    this.posts = [];
    this.page = 1;
    this.count = 0;
    this.tableSize = 5;
    this.tableSizes = [5, 20, 50];
  }

  ngOnInit(): void {
    this.fetchAllCommits();
  }

  fetchAllCommits() {
    const username = 'smartweber';
    const repoName = 'git-commits';

    this._httpService.sendGetRequest(`repos/${username}/${repoName}/commits`).subscribe((data: CommitData[])=>{
      this.posts = data;
      this.count = this.posts.length;
      this.pageLoaded = true;
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

import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {
  users: any;
  usersAll: any;
  showSearch = true;
  constructor(private service:UsersService) { }

  ngOnInit(): void {
    this.service.getUsers().then(res => {
      this.usersAll = res;
      this.users = res;
    });
  }
  markStared(user:any) {
    user.stared = true;
  }
  showStared() {
    this.showSearch = false;
    let usersStarted = [];
    for(let user of this.usersAll) {
      if(user.stared) {
        usersStarted.push(user);
      }
    }
    this.users = usersStarted;
  }
  showAll() {
    this.showSearch = true;
    this.users = this.usersAll;
  }
  back() {
    this.showAll();
  }

  first = 0;
  rows = 15;

  next() {
      this.first = this.first + this.rows;
  }
  prev() {
      this.first = this.first - this.rows;
  }
  reset() {
      this.first = 0;
  }
  isLastPage(): boolean {
      return this.users ? this.first === (this.users.length - this.rows): true;
  }
  isFirstPage(): boolean {
      return this.users ? this.first === 0 : true;
  }
}

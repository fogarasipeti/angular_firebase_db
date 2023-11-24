import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.css']
})
export class NameListComponent implements OnInit {

  usersList: {firstName: string, lastName: string}[]= [
    {firstName: "Andy", lastName: "Schmitt"},
    {firstName: "Lorem", lastName: "Ipsum"},
    {firstName: "Joe", lastName: "Uncle"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addUser(firstName: string, lastName: string): void {
    this.usersList.push({firstName, lastName})
  }

}

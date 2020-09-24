import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-homepage-btn',
  templateUrl: './homepage-btn.component.html',
  styleUrls: ['./homepage-btn.component.css']
})
export class HomepageBtnComponent implements OnInit {

  faHome = faHome;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  // templateUrl: './server.component.html',
  // styleUrls: ['./server.component.css']
  template:`<p>this is inline from server component </p>`,
  styles:[`
  p {
    color:#1d2a78
  }
  `]
})
export class ServerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

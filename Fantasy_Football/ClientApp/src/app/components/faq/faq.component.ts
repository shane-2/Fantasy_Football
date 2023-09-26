import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {
  bool1:boolean = false;
  bool2:boolean = false;
  bool3:boolean = false;
  bool4:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }



// toggleDetails(bool:boolean):boolean{

//   bool=!bool;
//   console.log(bool)
//   return bool;
// }

}

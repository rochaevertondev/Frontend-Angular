import { Component } from '@angular/core';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent {
 sectionNumber:number = 1;
 showMessage:boolean = true;

 setShowMessage(){
  if(this.showMessage){
    this.showMessage = false;
  } else {
    this.showMessage = true
  }
 }
}

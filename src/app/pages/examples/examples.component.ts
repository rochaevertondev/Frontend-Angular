import { Component } from '@angular/core';
import { SectionComponent } from '../../components/section/section.component';

@Component({
  selector: 'app-examples',
  imports: [SectionComponent],
  templateUrl: './examples.component.html',
  styleUrl: './examples.component.scss'
})
export class ExamplesComponent {
title: string = "Angular Examples Page"

ex_1: string = "Use of Conditionals @if - @else"
}


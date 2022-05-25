import { Component, OnInit } from '@angular/core';
import { Receipe } from '../receipe.model';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
receipes:Receipe[]=[
  new Receipe('A test One','This is testing','https://media.istockphoto.com/photos/culinary-background-with-spices-and-recipe-book-picture-id607299402?s=612x612'),
  new Receipe('A test Two','This is tasting','https://media.istockphoto.com/photos/vintage-cookbook-with-spices-and-herbs-on-rustic-wooden-background-picture-id1161153224?k=20&m=1161153224&s=612x612&w=0&h=dUAhyeGxsrNps3F10e28lOMadzJ8G50dJvwhdcoVJ4E=')
];
  constructor() { }

  ngOnInit(): void {
  }

}

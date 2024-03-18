import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogBreed } from '../dog-breed';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dog-breed',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dog-breed.component.html',
  styleUrl: './dog-breed.component.css'
})
export class DogBreedComponent {
  @Input() dogBreed!: DogBreed | undefined;

  constructor() {}
}

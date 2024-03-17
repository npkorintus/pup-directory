import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogBreedComponent } from '../dog-breed/dog-breed.component';
import { DogBreed } from '../dog-breed';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, DogBreedComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  dogBreedList: DogBreed[] = [];
  dogService: DogService = inject(DogService);

  constructor() {
    this.dogService.getAll().then((dogBreedList: DogBreed[]) => {
      this.dogBreedList = dogBreedList;
      console.log('dogBreedList: ', dogBreedList)
    });
  }
}

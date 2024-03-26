import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogService } from '../dog.service';
import { ActivatedRoute } from '@angular/router';
import { DogBreed } from '../dog-breed';

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css'
})
export class PhotoComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  dogBreed: DogBreed | undefined;
  breedName: string;
  // masterBreed: string;
  masterBreed: boolean;
  subBreed: string;
  photo: string | undefined;
  dogService = inject(DogService);

  constructor() {
    const dogBreedName = this.route.snapshot.params["breed"];
    console.log('dogBreed: ', dogBreedName)
    const queryParams = this.route.snapshot.queryParams;
    console.log('queryParams: ', queryParams)

    const dogBreed = this.dogBreed;
    console.log('dogBreed: ', dogBreed)
    this.breedName = dogBreedName;
    // this.breedName = '';
    // this.breedName = queryParams['masterBreed'] ? `${queryParams['subBreed']} ${dogBreed}` : dogBreed;
    this.masterBreed = queryParams['masterBreed'];
    this.subBreed = queryParams['subBreed'];

    const data: DogBreed = {
      name: dogBreedName,
      // name: '',
      masterBreed: queryParams['masterBreed'],
      subBreed: queryParams['subBreed']
    };

    this.dogService.getRandomPhoto(data).then(photo => this.photo = photo)
  }

  getPhoto() {
    const data: DogBreed = {
      name: this.breedName,
      // name: this.dogBreedName,
      masterBreed: this.masterBreed,
      subBreed: this.subBreed
    };

    this.dogService.getRandomPhoto(data).then(photo => {
      this.photo = photo;
    })
  }
}

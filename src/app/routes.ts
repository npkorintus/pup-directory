import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PhotoComponent } from "./photo/photo.component";
import { DogBreedComponent } from "./dog-breed/dog-breed.component";

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'photo/:breed',
    component: PhotoComponent,
    title: 'Photo'
  },
  {
    path: 'breed/:breed',
    component: DogBreedComponent,
    title: 'Breed'
  },
  {
    path: 'subbreed/:subbreed',
    component: DogBreedComponent,
    title: 'Sub-Breed'
  }
];

export default routeConfig;
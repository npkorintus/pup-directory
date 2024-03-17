import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PhotoComponent } from "./photo/photo.component";

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
  }
];

export default routeConfig;
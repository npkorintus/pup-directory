import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogBreed } from '../dog-breed';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dog-breed',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dog-breed.component.html',
//   template: `
//     <!-- <section class="breed">
// </section>
//   -->
//   <div class="breed">
//     <div class="col-sm-10">
//       <div class="card">
//         <div class="card-body">
//           <h5 class="card-title">{{dogBreed.name}}</h5>
//           <!-- <a [routerLink]="['/photo', dogBreed.name, {masterBreed: dogBreed.masterBreed || ''}]">View</a> -->
//           @if(dogBreed.masterBreed) {
//             <!-- <a [routerLink]="['/photo', dogBreed.masterBreed + '/' + dogBreed.subBreed]">
//               View
//             </a> -->
//             <a
//               [routerLink]="['/photo', dogBreed.name]"
//               [queryParams]="{masterBreed: dogBreed.masterBreed, subBreed: dogBreed.subBreed}">View</a>
//           }
//           @else {
//             <a [routerLink]="['/photo', dogBreed.name]">View</a>
//           }
//           <!-- <button type="button" class="btn btn-primary" (click)="getRandomPhoto(dogBreed)">View random photo</button> -->
//         </div>
//       </div>
//     </div>
//   </div>

//   `,
  styleUrl: './dog-breed.component.css'
})
export class DogBreedComponent {
  @Input() dogBreed!: DogBreed;
}

import { Injectable } from '@angular/core';
import { DogBreed } from './dog-breed';

@Injectable({
  providedIn: 'root'
})

export class DogService {
  constructor() { }

  async getAll() : Promise<DogBreed[]> {

    const data = await fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        // mapping the api response to return dog breeds as an array rather than object
        // const breeds = [];
        const breeds = []

        for (let breed in data.message) {
          if (data.message[breed].length > 0) {
            data.message[breed].forEach((subBreed: string) => {
              // breeds.push({
              //   name: `${subBreed} ${breed}`,
              //   masterBreed: breed,
              //   subBreed: subBreed
              // })
              breeds.push({
                name: breed,
                masterBreed: true,
                subBreed: subBreed
              })
            })
          } else {
            // breeds.push({ name: breed })
            breeds.push({ name: breed, masterBreed: false })
          }
        }

        console.log('breeds: ', breeds)
        return breeds;
      })
      .catch(error => console.error(error));

    return data ?? [];
  }

  async getRandomPhoto(dogBreed: DogBreed) : Promise<string> {
    console.log('dogBreed (params): ', dogBreed)
    // const url = dogBreed.masterBreed
    //   ? `https://dog.ceo/api/breed/${dogBreed.masterBreed}/${dogBreed.subBreed}/images/random`
    //   : `https://dog.ceo/api/breed/${dogBreed.name}/images/random`;

    const url = dogBreed.masterBreed
      ? `https://dog.ceo/api/breed/${dogBreed.name}/${dogBreed.subBreed}/images/random`
      : `https://dog.ceo/api/breed/${dogBreed.name}/images/random`;

    const data = await fetch(url)
    .then(response => response.json())
    .then(data => data.message)
    .catch(error => console.error(error));

    return data ?? [];
  }
}

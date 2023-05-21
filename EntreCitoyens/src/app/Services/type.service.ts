// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Resource } from '../../DTO/resource';

// @Injectable({
//   providedIn: 'root'
// })
// export class ResourceService {
//   private apiUrl = 'http://localhost:3000/api#/ressource';

//   constructor(private http: HttpClient) { }

//   getResources(): Observable<Resource[]> {
//     return this.http.get<Resource[]>(this.apiUrl);
//   }

//   getResourceById(id: string): Observable<Resource> {
//     return this.http.get<Resource>(`${this.apiUrl}/${id}`);
//   }

//   createResource(resource: Resource): Observable<Resource> {
//     return this.http.post<Resource>(this.apiUrl, resource);
//   }

//   updateResource(resource: Resource): Observable<Resource> {
//     return this.http.put<Resource>(`${this.apiUrl}/${resource.id}`, resource);
//   }

//   deleteResource(id: string): Observable<void> {
//     return this.http.delete<void>(`${this.apiUrl}/${id}`);
//   }
// }


import { Injectable } from '@angular/core';
import { Type } from '../DTO/type';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  private database: Type[] = [
    {
      id: '1',
      title: 'Article de blog',
      image_path: 'Description de l\'article ',
    },
    {
      id: '2',
      title: 'Images',
      image_path: 'Description de l\'article ',
    },
    {
      id: '3',
      title: 'Les relations citoyennes 3',
      image_path: 'Description de l\'article ',
    },
    {
      id: '4',
      title: 'Les relations citoyennes 3',
      image_path: 'Description de l\'article ',
    },
    {
      id: '6',
      title: 'Les relations citoyennes 3',
      image_path: 'Description de l\'article ',
    },
    {
      id: '7',
      title: 'Les relations citoyennes 3',
      image_path: 'Description de l\'article ',
    },
    {
      id: '8',
      title: 'Les relations citoyennes 3',
      image_path: 'Description de l\'article ',
    }

  ];

  getTypes(): Observable<Type[]> {
    return of(this.database);
  }
}

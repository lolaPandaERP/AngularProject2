// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Resource } from '../../DTO/resource';

// @Injectable({
//   providedIn: 'root'
// })
// export class ResourceService {
//   private apiUrl: 'http://localhost:3000/api#/ressource';

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
import { Type } from '../../DTO/type';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  private database: Type[] = [
    {
      id: '1',
      title: 'Articles et publications ',
      description: 'Divers \'articles\' sont présentés à destiantion des citoyens sur les thèmes de la cohésion sociale et de la santé',
      image_path: '../../../assets/TypeImage/blog.jpeg',
    },
    {
      id: '2',
      title: 'Evenements',
      description: 'Promouvoir la cohésion sociale et la santé en organisant des conférences, des ateliers, des webinaires, des séminaires et d\'autres types d\'événements. Ils offrent des occasions de rassembler les communautés, de partager des expériences et de favoriser la collaboration',
      image_path: '../../../assets/TypeImage/even.jpg',
    },
    {
      id: '3',
      title: 'Images ou vidéos',
      description: 'Illustrer vos concepts, partager vos témoignages, présenter vos projets ou sensibiliser à des problématiques de cohésion sociale et de santé. ',
      image_path: '../../../assets/TypeImage/video.jpg',
    },
    {
      id: '4',
      title: 'Outils et documents pratiques',
      description: 'En plus des informations et des événements, des ressources pratiques telles que des guides, des brochures, des infographies ou des outils interactifs sont proposées.',
      image_path: '../../../assets/TypeImage/doc.jpeg',
    },
    {
      id: '4',
      title: 'Jeux ludiques',
      description: 'lLa plateforme offre une dimension ludique et interactive, encourageant l\'engagement des utilisateurs tout en renforçant leurs connaissances et leurs compétences dans les domaines de la cohésion sociale et de la santé.',
      image_path: '../../../assets/TypeImage/quizz.jpg',
    },


  ];

  getTypes(): Observable<Type[]> {
    return of(this.database);
  }
}

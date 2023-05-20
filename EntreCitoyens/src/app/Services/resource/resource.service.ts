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
import { Resource } from '../../DTO/resource';
import { Comment } from '../../DTO/comment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  private database: Resource[] = [
    {
      id: '1',
      title: 'Les relations citoyennes',
      description: 'Description de l\'article sur les relations citoyennes',
      content: 'Contenu de l\'article...',
      image_path: '../../../assets/resourceImage/image2.png',
      createdBy: 'Lola CAILLAUD',
      createdAt: '17/05/2023 à 12:10',
      // comments: [
      //   {
      //     idComment: '1',
      //     text: 'Premier commentaire',
      //   },
      // ]
    },
    {
      id: '2',
      title: 'Les relations citoyennes 2',
      description: 'Description de l\'article sur les relations citoyennes',
      content: 'Contenu de l\'article...',
      image_path: '../../../assets/resourceImage/image1.jpg',
      createdBy: 'Clément RAFANEAU',
      createdAt: '17/05/2023 à 12:15',
    },
    {
      id: '3',
      title: 'Les relations citoyennes 3',
      description: 'Description de l\'article sur les relations citoyennes',
      content: 'Contenu de l\'article...',
      image_path: '../../../assets/resourceImage/image2.png',
      createdBy: 'Virgile FOUCHE',
      createdAt: '17/05/2023 à 12:20'
    },
    {
      id: '4',
      title: 'Les relations citoyennes 3',
      description: 'Description de l\'article sur les relations citoyennes',
      content: 'Contenu de l\'article...',
      image_path: '../../../assets/resourceImage/image1.jpg',
      createdBy: 'Virgile FOUCHE',
      createdAt: '17/05/2023 à 12:20'
    },
    {
      id: '6',
      title: 'Les relations citoyennes 3',
      description: 'Description de l\'article sur les relations citoyennes',
      content: 'Contenu de l\'article...',
      image_path: '../../../assets/resourceImage/image2.png',
      createdBy: 'Virgile FOUCHE',
      createdAt: '17/05/2023 à 12:20'
    },
    {
      id: '7',
      title: 'Les relations citoyennes 3',
      description: 'Description de l\'article sur les relations citoyennes',
      content: 'Contenu de l\'article...',
      image_path: '../../../assets/resourceImage/image1.jpg',
      createdBy: 'Virgile FOUCHE',
      createdAt: '17/05/2023 à 12:20'
    },
    {
      id: '8',
      title: 'Les relations citoyennes 3',
      description: 'Description de l\'article sur les relations citoyennes',
      content: 'Contenu de l\'article...',
      image_path: '../../../assets/resourceImage/image2.png',
      createdBy: 'Virgile FOUCHE',
      createdAt: '17/05/2023 à 12:20'
    }

  ];

  getResources(): Observable<Resource[]> {
    return of(this.database);
  }

  getResourceById(id: string): Observable<Resource | undefined> {
    const resource = this.database.find(r => r.id === id);
    return of(resource);
  }

  createResource(resource: Resource): Observable<Resource> {
    resource.id = (this.database.length + 1).toString(); // Génère un ID unique
    this.database.push(resource);
    return of(resource);
  }

  updateResource(resource: Resource): Observable<Resource | undefined> {
    const index = this.database.findIndex(r => r.id === resource.id);
    if (index !== -1) {
      this.database[index] = resource;
      return of(this.database[index]);
    }
    return of(undefined);
  }

  deleteResource(id: string): Observable<boolean> {
    const index = this.database.findIndex(r => r.id === id);
    if (index !== -1) {
      this.database.splice(index, 1);
      return of(true);
    }
    return of(false);
  }

  shareResource(id: string, email: string): Observable<boolean> {
    // Ici, tu peux implémenter la logique pour partager la ressource avec l'e-mail spécifié
    // Cela pourrait inclure l'envoi d'un e-mail contenant un lien vers la ressource, par exemple
    // Pour cet exemple, nous retournerons simplement une valeur booléenne pour indiquer si le partage a réussi ou non

    // Recherche de la ressource par ID
    const resource = this.database.find(r => r.id === id);

    if (resource) {
      // Implémenter ici la logique pour partager la ressource
      console.log(`La ressource avec l'ID ${id} a été partagée avec l'e-mail ${email}`);
      return of(true); // Simulation de succès du partage
    }

    return of(false); // La ressource n'a pas été trouvée, le partage a échoué
  }

  addComment(resourceId: string, comment: Comment): Observable<Resource | undefined> {
    const resource = this.database.find(r => r.id === resourceId);
    if (resource) {
      if (!resource.comments) {
        resource.comments = [];
      }
      const newComment = new Comment(comment.id, comment.text);
      // resource.comments.push(newComment);
      return of(resource);
    }
    return of(undefined);
  }
}

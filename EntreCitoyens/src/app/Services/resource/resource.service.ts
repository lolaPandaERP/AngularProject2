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
import { Resource } from '../../DTO/resource';;
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  private database: Resource[] = [
    {
      id: '1',
      title: 'Le pouvoir de la solidarité : Renforcer les liens communautaires pour une meilleure santé',
      description: 'Découvrez comment la cohésion sociale peut avoir un impact positif sur la santé, en encourageant l\'entraide, la collaboration et la création de réseaux de soutien au sein de votre communauté',
      content: 'Contenu de l\'Article et Publication...',
      image_path: '../../../assets/resourceImage/soutien.jpg',
      createdBy: 'Lola CAILLAUD',
      createdAt: '17/05/2023 à 12:10',
      comment: 'L\'Article est bien écrit',
      type: '',
    },
    {
      id: '2',
      title: 'La santé à l\'ère numérique : Utiliser les applications mobiles pour rester informé',
      description: 'Explorez les avantages des applications mobiles dédiées à la santé, qui vous permettent de suivre les dernières informations, les conseils de santé, les nouvelles normes et les bonnes pratiques pour prendre soin de vous et de votre communauté.',
      content: 'Contenu de l\'article...',
      image_path: '../../../assets/resourceImage/sante.jpg',
      createdBy: 'Clément RAFANEAU',
      createdAt: '17/05/2023 à 12:15',
      comment: 'Très interessant',
      type: 'Article',
    },
    {
      id: '3',
      title: 'Agir pour un environnement sain : Les bonnes pratiques pour préserver notre planète',
      description: 'Découvrez comment les actions individuelles et collectives en faveur de l\'environnement peuvent contribuer à la cohésion sociale et à la santé de tous. Apprenez des astuces pratiques pour adopter un mode de vie respectueux de l\'environnement.',
      content: 'Contenu de l\'article...',
      image_path: '../../../assets/resourceImage/env.jpg',
      createdBy: 'Virgile FOUCHE',
      createdAt: '17/05/2023 à 12:20',
      comment: 'Pertinent, je vous le recommande',
      type: 'Article et Publication',
    },
    {
      id: '4',
      title: 'Inclusion sociale : Comment favoriser la participation de tous',
      description: 'Explorez les différentes initiatives et bonnes pratiques visant à promouvoir l\'inclusion sociale, en encourageant la participation active de tous les membres de la communauté, quelles que soient leurs différences et leurs capacités.',
      content: 'Contenu de l\'Article et Publication...',
      image_path: '../../../assets/resourceImage/inclusion.jpg',
      createdBy: 'Virgile FOUCHE',
      createdAt: '17/05/2023 à 12:20',
      comment: 'Beaucoup de notions, moins pertinent',
      type: 'Article et Publication',
    },
    {
      id: '6',
      title: 'Santé et bien-être : Les dernières tendances en matière d\'autosoins',
      description: 'Découvrez les dernières tendances en matière d\'autosoins et de bien-être, allant des techniques de gestion du stress et de la relaxation aux conseils pour une alimentation équilibrée, afin de renforcer votre santé et votre bien-être au quotidien.',
      content: 'Contenu de l\'Article et Publication...',
      image_path: '../../../assets/resourceImage/sante.jpg',
      createdBy: 'Virgile FOUCHE',
      createdAt: '17/05/2023 à 12:20',
      comment: 'Super ! ',
      type: 'Article et Publication',
    },


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

  // addComment(resourceId: string, comment: Comment): Observable<Resource | undefined> {
  //   const resource = this.database.find(r => r.id === resourceId);
  //   if (resource) {
  //     if (!resource.comment) {
  //       resource.comment = [];
  //     }
  //     const newComment = new Comment(comment.id, comment.text);
  //     // resource.comments.push(newComment);
  //     return of(resource);
  //   }
  //   return of(undefined);
  // }
}

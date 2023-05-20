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
import { Observable, of } from 'rxjs';
import { Category } from 'src/app/DTO/category';

@Injectable({
  providedIn: 'root'
})
export class categoryService {

  private database: Category[] = [
    {
      id: '1',
      title: 'Accès équitable aux soins de santé',
      description: 'Ce thème aborde la nécessité de garantir à tous les individus l\'accès à des services de santé de qualité, indépendamment de leur statut socioéconomique, de leur origine ethnique, de leur genre ou de leur lieu de résidence. Il souligne l\'importance de réduire les inégalités en matière de santé et de garantir des soins équitables pour renforcer la cohésion sociale.',
      image_path: '../../../assets/CategoryImage/1.jpg',
    },
    {
      id: '2',
      title: 'Prévention des maladies et promotion du bien-être',
      description: 'Ce thème met l\'accent sur la nécessité de mettre en place des stratégies de prévention des maladies et de promouvoir le bien-être dans les communautés. Il s\'agit notamment de sensibiliser à l\'importance de l\'hygiène, de la vaccination, de l\'activité physique, de l\'alimentation saine et de la gestion du stress pour prévenir les maladies et favoriser la santé globale de la population.',
      image_path: '../../../assets/CategoryImage/2.jpg',
    },
    {
      id: '3',
      title: 'Inclusion des populations marginalisées',
      description: 'Ce thème met en évidence l\'importance de favoriser l\'inclusion des populations marginalisées, telles que les personnes handicapées, les personnes âgées, les migrants, les réfugiés et les minorités ethniques. Il souligne la nécessité de garantir leur accès aux soins de santé, à l\'éducation, à l\'emploi et à d\'autres services essentiels pour promouvoir une société inclusive et équitable.',
      image_path: '../../../assets/CategoryImage/3.jpg',
    },
    {
      id: '4',
      title: 'Renforcement des liens sociaux et de la solidarité ',
      description: 'Ce thème met l\'accent sur l\'importance de renforcer les liens sociaux au sein des communautés pour favoriser la cohésion sociale et améliorer la santé globale. Il aborde des aspects tels que le bénévolat, l\'engagement civique, les activités communautaires et le soutien social mutuel, qui contribuent à créer des environnements sociaux favorables à la santé et à renforcer le tissu social.',
      image_path: '../../../assets/CategoryImage/4.jpg',
    },


  ];

  getCategory(): Observable<Category[]> {
    return of(this.database);
  }

  getCategoryById(id: string): Observable<Category | undefined> {
    const categorie = this.database.find(r => r.id === id);
    return of(categorie);
  }

  createCategory(categorie: Category): Observable<Category> {
    categorie.id = (this.database.length + 1).toString(); // Génère un ID unique
    this.database.push(categorie);
    return of(categorie);
  }

  updateCategory(categorie: Category): Observable<Category | undefined> {
    const index = this.database.findIndex(r => r.id === categorie.id);
    if (index !== -1) {
      this.database[index] = categorie;
      return of(this.database[index]);
    }
    return of(undefined);
  }

  deleteCategory(id: string): Observable<boolean> {
    const index = this.database.findIndex(r => r.id === id);
    if (index !== -1) {
      this.database.splice(index, 1);
      return of(true);
    }
    return of(false);
  }
}

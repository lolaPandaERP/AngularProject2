// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// import { Resource } from '../../../DTO/resource';
// import { ResourceService } from '../../../Services/resource/resource.service';

// @Component({
//   selector: 'app-resource-list',
//   templateUrl: './resource-list.component.html',
//   styleUrls: ['./resource-list.component.scss']
// })
// export class ResourceListComponent implements OnInit {
//   resources: Resource[];

//   constructor(
//     private router: Router,
//     private resourceService: ResourceService
//   ) { }

//   ngOnInit(): void {
//     this.resourceService.getResources().subscribe(
//       (resources: Resource[]) => {
//         this.resources = resources;
//       },
//       (error) => {
//         // Gérer les erreurs ici
//       }
//     );
//   }

//   editResource(resourceId: string): void {
//     this.router.navigate(['/resource/edit', resourceId]);
//   }

//   deleteResource(resourceId: string): void {
//     this.resourceService.deleteResource(resourceId).subscribe(
//       () => {
//         // Gérer la suppression réussie ici
//         // Par exemple, actualiser la liste des ressources
//         this.resources = this.resources.filter(resource => resource.id !== resourceId);
//       },
//       (error) => {
//         // Gérer les erreurs ici
//       }
//     );
//   }
// }



import { Component, OnInit } from '@angular/core';
import { Category } from '../../../DTO/category';
import { categoryService } from 'src/app/Services/cat/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})

export class CategoryListComponent implements OnInit {

    // Slider
    sliderImages: string[] = [
      '../../../../assets/resourceImage/sante.jpg',
    ];

  categories: Category[] = [];

  constructor(private categoryService: categoryService) { }

  ngOnInit(): void {
    this.fetchCategory();
  }

  fetchCategory(): void {
    this.categoryService.getCategory().subscribe(resources => {
      this.categories = resources;
    });
  }

  deleteCategory(id: string): void {
    this.categoryService.deleteCategory(id).subscribe(() => {
      this.fetchCategory();
    });
  }

  getCategoryById(id: string): void {
    this.categoryService.getCategoryById(id).subscribe(() => {
      this.fetchCategory();
    });
  }
}

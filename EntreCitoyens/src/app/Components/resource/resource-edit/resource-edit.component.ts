// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Observable } from 'rxjs';

// import { Resource } from '../../../DTO/resource';
// import { ResourceService } from '../../../Services/resource/resource.service';

// @Component({
//   selector: 'app-resource-edit',
//   templateUrl: './resource-edit.component.html',
//   styleUrls: ['./resource-edit.component.scss']
// })
// export class ResourceEditComponent implements OnInit {
//   resource: Resource;

//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private resourceService: ResourceService
//   ) { }

//   ngOnInit(): void {
//     const resourceId = this.route.snapshot.params['id'];
//     this.resourceService.getResourceById(resourceId).subscribe(
//       (resource: Resource) => {
//         this.resource = resource;
//       },
//       (error) => {
//         // Gérer les erreurs ici
//       }
//     );
//   }

//   saveChanges(): void {
//     // Effectuer les opérations de mise à jour de la ressource
//     // Utiliser this.resource pour accéder à la ressource modifiée
//     // Rediriger vers la page de détails de la ressource mise à jour
//     this.resourceService.updateResource(this.resource).subscribe(
//       (updatedResource: Resource) => {
//         this.router.navigate(['/resource/details', updatedResource.id]);
//       },
//       (error) => {
//         // Gérer les erreurs ici
//       }
//     );
//   }
// }


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Resource } from '../../../DTO/resource';
import { ResourceService } from '../../../Services/resource/resource.service';

@Component({
  selector: 'app-resource-edit',
  templateUrl: './resource-edit.component.html',
  styleUrls: ['./resource-edit.component.scss']
})
export class ResourceEditComponent implements OnInit {
  resourceId: string;

  resource: Resource = {
    id: '',
    title: '',
    description: '',
    content: '',
    image_path: '',
    createdBy: '',
    createdAt: '',
    comment:'',
  };

  constructor(
    private route: ActivatedRoute,
    private resourceService: ResourceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.resourceId = params['id'];
      this.fetchResource();
    });
  }

  fetchResource(): void {
    this.resourceService.getResourceById(this.resourceId).subscribe(resource => {
      if (resource) {
        this.resource = resource;
      } else {
        // Handle resource not found
      }
    });
  }

  updateResource(): void {
    this.resourceService.updateResource(this.resource).subscribe(() => {
      this.router.navigate(['/resources']);
    });
  }
}

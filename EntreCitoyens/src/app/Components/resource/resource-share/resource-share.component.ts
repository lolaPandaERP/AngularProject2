// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

// import { Resource } from '../../../DTO/resource';
// import { ResourceService } from '../../../Services/resource/resource.service';

// @Component({
//   selector: 'app-resource-share',
//   templateUrl: './resource-share.component.html',
//   styleUrls: ['./resource-share.component.scss']
// })
// export class ResourceShareComponent implements OnInit {
//   resource: Resource;

//   constructor(
//     private route: ActivatedRoute,
//     private resourceService: ResourceService
//   ) { }

//   ngOnInit(): void {
//     const resourceId = this.route.snapshot.paramMap.get('id');
//     if (resourceId) {
//       this.resourceService.getResourceById(resourceId).subscribe(
//         (resource: Resource) => {
//           this.resource = resource;
//         },
//         (error) => {
//           // Gérer les erreurs ici
//         }
//       );
//     }
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Resource } from '../../../DTO/resource';
import { ResourceService } from '../../../Services/resource/resource.service';

@Component({
  selector: 'app-resource-share',
  templateUrl: './resource-share.component.html',
  styleUrls: ['./resource-share.component.scss']
})
export class ResourceShareComponent implements OnInit {
  resourceId: string;

  resource: Resource = {
    id: '',
    title: '',
    description: '',
    content: '',
    image_path: '',
    createdBy: '',
    createdAt: '',
    comment: '',
    type: '',
  };

  constructor(
    private route: ActivatedRoute,
    private resourceService: ResourceService
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
}

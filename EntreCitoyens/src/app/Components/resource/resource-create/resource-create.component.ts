// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { ResourceService } from '../../../Services/resource/resource.service';
// import { Resource } from '../../../DTO/resource';

// @Component({
//   selector: 'app-resource-create',
//   templateUrl: './resource-create.component.html',
//   styleUrls: ['./resource-create.component.scss']
// })
// export class ResourceCreateComponent {
//   createForm: FormGroup;
//   errorMessage: string;

//   constructor(
//     private formBuilder: FormBuilder,
//     private resourceService: ResourceService,
//     private router: Router
//   ) {
//     this.createForm = this.formBuilder.group({
//       title: ['', Validators.required],
//       description: ['', Validators.required],
//       content: ['', Validators.required],
//       image_path: ['', Validators.required],
//       createdBy: ['', Validators.required],
//       createdAt: ['', Validators.required]
//     });
//   }

//   createResource(): void {
//     if (this.createForm.valid) {
//       const resource: Resource = this.createForm.value;
//       this.resourceService.createResource(resource);
//       this.router.navigate(['/resources']);
//     } else {
//       this.errorMessage = 'Veuillez remplir tous les champs du formulaire.';
//     }
//   }
// }


import { Component, OnInit } from '@angular/core';
import { Resource } from '../../../DTO/resource';
import { ResourceService } from '../../../Services/resource/resource.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resource-create',
  templateUrl: './resource-create.component.html',
  styleUrls: ['./resource-create.component.scss']
})
export class ResourceCreateComponent implements OnInit {
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
    private resourceService: ResourceService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createResource(): void {
    this.resourceService.createResource(this.resource).subscribe(() => {
      this.router.navigate(['/resources']);
    });
  }
}

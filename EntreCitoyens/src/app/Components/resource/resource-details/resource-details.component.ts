import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceService } from '../../../Services/resource/resource.service';
import { Resource } from '../../../DTO/resource';

@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.scss']
})
export class ResourceDetailsComponent implements OnInit {

   // Slider
   sliderImages: string[] = [
    '../../../../assets/resourceImage/image3.png',
    '../../../../assets/resourceImage/image4.png',
  ];

  resource: Resource | undefined;

  constructor(
    private route: ActivatedRoute,
    private resourceService: ResourceService
  ) {}

  ngOnInit(): void {
    const resourceId = this.route.snapshot.paramMap.get('id');
    if (resourceId) {
      this.loadResource(resourceId);
    }
  }

  loadResource(id: string): void {
    this.resourceService.getResourceById(id).subscribe(resource => {
      this.resource = resource;
    });
  }
}

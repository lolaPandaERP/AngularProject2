import { Component, Input, OnInit } from '@angular/core';
import { Resource } from 'src/app/DTO/resource';
import { ResourceService } from '../../../Services/resource/resource.service';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss']
})
export class ResourceListComponent implements OnInit {

   // Slider
   sliderImages: string[] = [
    '../../../../assets/TypeImage/doc.jpeg',
    '../../../../assets/resourceImage/sante.jpg.jpg',
  ];

  @Input() resources: Resource[] = [];

  resource: Resource | undefined;

  filteredResources: Resource[] = [];
  searchTerm: string = '';

  constructor(private resourceService: ResourceService) { }

  ngOnInit(): void {
    this.fetchResources();
  }

  fetchResources(): void {
    this.resourceService.getResources().subscribe(resources => {
      this.resources = resources;
      this.filterResources(); // Filtrer les ressources une fois qu'elles sont récupérées
    });
  }

  deleteResource(id: string): void {
    this.resourceService.deleteResource(id).subscribe(() => {
      this.fetchResources();
    });
  }

  filterResources(): void {
    if (this.searchTerm.trim() === '') {
      this.filteredResources = this.resources;
    } else {
      this.filteredResources = this.resources.filter(resource =>
        resource.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  shareResource(resource: Resource): void {
    const emailSubject = `Partage de la ressource : ${resource.title}`;
    const emailBody = `Voici la ressource que je souhaite partager :\n\nTitre : ${resource.title}\n\nDescription : ${resource.description}`;

    const emailLink = `mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = emailLink;
  }

}

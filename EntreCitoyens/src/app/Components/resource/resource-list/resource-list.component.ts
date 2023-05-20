import { Component, Input, OnInit } from '@angular/core';
import { Resource } from 'src/app/DTO/resource';
import { ResourceService } from '../../../Services/resource/resource.service';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss']
})
export class ResourceListComponent implements OnInit {
  @Input() resources: Resource[] = [];

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

}

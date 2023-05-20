import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../../Services/resource/resource.service';
import { Resource } from '../../DTO/resource';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Slider
  sliderImages: string[] = [
    '../../../assets/image1.jpg',
    '../../../assets/image2.jpg',
  ];

  resources: Resource[] = [];
  filteredResources: Resource[] = [];
  searchTerm: string = '';

  constructor(private resourceService: ResourceService) { }

  ngOnInit(): void {
    this.fetchResources();
  }

  fetchResources(): void {
    this.resourceService.getResources().subscribe(
      (resources: Resource[]) => {
        this.resources = resources;
        this.filterResources(); // Appliquer le filtrage initial
      },
      (error) => {
        // Gérer les erreurs ici
      }
    );
  }

  filterResources(): void {
    this.filteredResources = this.resources.filter(resource =>
      resource.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Popup creation
  isModalOpen: boolean = true;

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  convertToResource(event: any): Resource {
    return event as Resource;
  }

  handleResourceCreated(resource: Resource): void {
    console.log('Ressource créée :', resource);
    // mettre à jour la liste des ressources
    this.resourceService.updateResource(resource);
    this.closeModal();
  }

}

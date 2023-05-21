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
  showCreateForm: boolean = false;

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

  toggleCreateForm(): void {
    this.showCreateForm = !this.showCreateForm;
  }

  shareResource(): void {
    // Vérification si la ressource existe
    if (!this.resource) {
      return;
    }

    // Préparation des données pour partager la ressource
    const emailSubject = `Partage de la ressource : ${this.resource.title}`;
    const emailBody = `Voici la ressource que je souhaite partager :\n\nTitre : ${this.resource.title}\n\nContenu : ${this.resource.content}`;

    // Exemple d'implémentation de l'envoi de la ressource par e-mail
    const emailLink = `mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Redirection vers l'application de messagerie par défaut avec le lien de partage
    window.location.href = emailLink;
  }

}

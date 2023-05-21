import { Component, OnInit, Input } from '@angular/core';
import { TypeService } from 'src/app/Services/type.service';
import { Type } from '../../../DTO/type'

@Component({
  selector: 'app-resource-type',
  templateUrl: './resource-type.component.html',
  styleUrls: ['./resource-type.component.scss']
})
export class ResourceTypeComponent implements OnInit {
  @Input() types: Type[] = [];

  constructor(private typeService: TypeService) { }

  ngOnInit(): void {
    this.fetchTypes();
  }

  fetchTypes(): void {
    this.typeService.getTypes().subscribe(types => {
      this.types = types;
    });
  }
}

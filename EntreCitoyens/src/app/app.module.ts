import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Pages/home/home.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ResourceCreateComponent } from './Components/resource/resource-create/resource-create.component';
import { ResourceEditComponent } from './Components/resource/resource-edit/resource-edit.component';
import { ResourceListComponent } from './Components/resource/resource-list/resource-list.component';
import { ResourceShareComponent } from './Components/resource/resource-share/resource-share.component';
import { ResourceService } from './Services/resource/resource.service';
import { Injectable } from '@angular/core';
import { SliderComponent } from './Components/slider/slider.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { CategoryListComponent } from './Components/category/category-list/category-list.component';
import { ResourceDetailsComponent } from './Components/resource/resource-details/resource-details.component';
import { ResourceTypeComponent } from './Components/resource/resource-type/resource-type.component';
@Injectable({
  providedIn: 'root'
})

@NgModule({
  // Ajout des composants
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    FooterComponent,
    ResourceCreateComponent,
    ResourceEditComponent,
    ResourceListComponent,
    ResourceShareComponent,
    SliderComponent,
    ContactComponent,
    CategoryListComponent,
    ResourceDetailsComponent,
    ResourceTypeComponent,
    // LoginComponent,
  ],
  // Inserer toutes les bibliotheques installées
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule, // for API connect
    FormsModule, // responsable de la prise en charge des directives de liaison de formulaire, telles que ngModel
  ],
  // Intégration des services qui vont faire appel à l'API
  // providers: [ResourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

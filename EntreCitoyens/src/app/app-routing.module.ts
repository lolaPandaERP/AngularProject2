import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { ResourceListComponent } from './Components/resource/resource-list/resource-list.component';
import { ResourceCreateComponent } from './Components/resource/resource-create/resource-create.component';
import { ResourceEditComponent } from './Components/resource/resource-edit/resource-edit.component';
import { ResourceShareComponent } from './Components/resource/resource-share/resource-share.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { CategoryListComponent } from './Components/category/category-list/category-list.component';
import { ResourceDetailsComponent } from './Components/resource/resource-details/resource-details.component';

const routes: Routes = [
  {
    /**
     * HOMEPAGE
    */
    path:'',
    component:HomeComponent,
  },

  // Not found
  {
   path:'*',
   component:NotFoundComponent,
  },

  // Contact
  {
    path:'contact',
    component:ContactComponent,
   },

  // LOGIN
  {
    path:'login',
    component:NotFoundComponent,
  },

  // RESOURCES
  {
    path: 'ressources',
    component: ResourceListComponent
  },
  // details
  {
    path:'resources/detail/:id',
    component:ResourceDetailsComponent,
   },
  {
    path: 'resources/create',
    component: ResourceCreateComponent
  },
  {
    path: 'resources/edit/:id',
    component: ResourceEditComponent
  },
  {
    path: 'share/:id',
    component: ResourceShareComponent
  },

  // CATEGORY
  {
    path: 'categories',
    component: CategoryListComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

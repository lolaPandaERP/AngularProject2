import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Public/home/home.component';
import { NotFoundComponent } from './Public/not-found/not-found.component';
import { ResourceListComponent } from './Components/resource/resource-list/resource-list.component';
import { ResourceCreateComponent } from './Components/resource/resource-create/resource-create.component';
import { ResourceEditComponent } from './Components/resource/resource-edit/resource-edit.component';
import { ResourceShareComponent } from './Components/resource/resource-share/resource-share.component';
import { ContactComponent } from './Public/contact/contact.component';
import { CategoryListComponent } from './Components/category/category-list/category-list.component';
import { ResourceDetailsComponent } from './Components/resource/resource-details/resource-details.component';
import { ResourceTypeComponent } from './Components/resource/resource-type/resource-type.component';
import { UserProfilComponent } from './Components/user-profil/user-profil.component';
import { LoginComponent } from './Auth/login/login.component';
import { MentionlegalesComponent } from './Public/mentionlegales/mentionlegales.component';
import { RegisterComponent } from './Auth/register/register.component';

const routes: Routes = [
  {
    /**
     * HOMEPAGE
    */
    path:'home',
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
    component:LoginComponent,
  },
  // LOGOUT
  {
    path:'login',
    component:LoginComponent,
  },
  // USER PROFIL
  {
    path: 'userProfil',
    component: UserProfilComponent
  },
  // S INSCRIRE
  {
    path: 'register',
    component: RegisterComponent
  },

  // RESOURCES
  {
    path: 'resourceCreate',
    component: ResourceCreateComponent
  },
  {
    path: 'ressources',
    component: ResourceListComponent
  },
  {
    path: 'types',
    component: ResourceTypeComponent
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

  // MENTIONS LEGALES
  {
    path: 'legalesmentions',
    component: MentionlegalesComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ElementRef, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule, Navigation } from '@angular/router'; 
import { AgGridModule } from '@ag-grid-community/angular';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CommandlineComponent } from './commandline/commandline.component';
import { DynamictemplateComponent } from './dynamictemplate/dynamictemplate.component';
import { DirectivesComponent } from './directives/directives.component';
import { DependencyinjectionComponent } from './dependencyinjection/dependencyinjection.component';
import { CoursesService } from './courses.service';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipe } from './pipes/custom.pipe';
import { ReusableComponent } from './reusable/reusable.component';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { CustomDirective } from './directives/custom.directive';
import { TempateFormComponent } from './tempate-form/tempate-form.component';
import { SignupFormComponent } from './reactive-form/reactive-form.component';
import { HttpComponentComponent } from './http-component/http-component.component';
import { PostService } from './services/post.service';
import { MyErrorHandler } from './errors/app-error-handler';
import { FollowersComponent } from './followers/followers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { GridComponent } from './grid/grid.component';
import { GridService } from './services/grid.service';
import { ChartsComponent } from './charts/charts.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CommandlineComponent,
    DynamictemplateComponent, // loads a template dynamically
    DirectivesComponent,
    DependencyinjectionComponent,
    PropertybindingComponent,
    PipesComponent,
    CustomPipe,
    ReusableComponent,
    BootstrapPanelComponent,
    CustomDirective,
    TempateFormComponent,
    SignupFormComponent,
    HttpComponentComponent,
    FollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    GridComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    // Configuring Routes
    RouterModule.forRoot([
      { 
        path: 'home', 
        component: HomeComponent,
        pathMatch: 'full'
      },
      { 
        path: 'template-form', 
        component: TempateFormComponent
      },
      { 
        path: 'reactive-form', 
        component: SignupFormComponent
      },
      { 
        path: 'followers/:id/:username', 
        component: FollowersComponent 
      },
      { 
        path: 'followers/:id', 
        component: GithubProfileComponent 
      },
      { 
        path: 'followers', 
        component: FollowersComponent 
      },
      { 
        path: 'route-posts', 
        component: HttpComponentComponent 
      },
      { 
        path: 'grid', 
        component: GridComponent 
      },
      {
        path: 'chart',
        component: ChartsComponent
      },
      { 
        path: '**', 
        redirectTo: '' 
      }
    ]),
    AgGridModule.withComponents([])
  ],
  providers: [
    CoursesService,
    PostService,
    { provide: ErrorHandler, useClass: MyErrorHandler },
    GridService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}

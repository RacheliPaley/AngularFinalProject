import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmallRecipeComponent } from './small-recipe/small-recipe.component';
import { AllRecipeComponent } from './all-recipe/all-recipe.component';
import { FormsModule } from '@angular/forms';
import { StarPipe } from './pipes/star.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { TimePipe } from './pipes/time.pipe';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import { KogoutComponent } from './kogout/kogout.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    SmallRecipeComponent,
    AllRecipeComponent,
    StarPipe,
    LoginComponent,
    RegisterComponent,
    AddRecipeComponent,
    EditRecipeComponent,
    TimePipe,
    RecipeDetailsComponent,
    NavbarComponent,
    KogoutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule, 
    MatButtonModule,
   MatToolbarModule,
   MatIconModule,
   MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

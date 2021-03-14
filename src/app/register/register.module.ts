import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RegisterComponent } from "./register/register.component";




@NgModule({
  declarations: [RegisterComponent],
  imports: [    
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule { }

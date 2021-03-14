import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { PlanetsComponent } from "./planets.component";

@NgModule({
  declarations: [PlanetsComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    MatTableModule
  ]
})
export class PlanetsModule { }

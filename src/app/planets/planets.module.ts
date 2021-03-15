import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { RouterModule } from "@angular/router";
import { PlanetsComponent } from "./planets.component";

@NgModule({
  declarations: [PlanetsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    MatTableModule
  ],
  exports: [
    PlanetsComponent]
})
export class PlanetsModule { }

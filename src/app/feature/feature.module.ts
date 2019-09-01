import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";
import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ExpComponent } from "./exp/exp.component";
import { WorkComponent } from "./work/work.component";
import { ContactComponent } from "./contact/contact.component";

@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ExpComponent,
    WorkComponent,
    ContactComponent
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ExpComponent,
    WorkComponent,
    ContactComponent
  ]
})
export class FeatureModule {}

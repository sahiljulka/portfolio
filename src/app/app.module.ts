import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { FeatureModule } from "./feature/feature.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, FeatureModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { WineItemComponent } from "./wines/wine-item/wine-item.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent, WineItemComponent]
})
export class AppModule {}

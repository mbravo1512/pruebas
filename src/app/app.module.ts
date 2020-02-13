import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { WineItemComponent } from "./wines/wine-item/wine-item.component";

@NgModule({
  declarations: [AppComponent, WineItemComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { Component, OnInit } from "@angular/core";

import { Wine } from "../../models/wine";

@Component({
  selector: "app-wine-item",
  templateUrl: "./wine-item.component.html",
  styleUrls: ["./wine-item.component.css"]
})
export class WineItemComponent implements OnInit {
  public wine: Wine;

  constructor() {}

  ngOnInit() {
    this.wine = {
      name: "Domaine de la Butte La Pied de la Butte",
      imageUrl: "assets/images/wine1.png",
      price: 19.95,
      foodPairing: [
        {
          name: "Embutidos",
          glutten: false,
          kcal: 600,
          vegan: false
        },
        {
          name: "Patés",
          glutten: false,
          kcal: 200,
          vegan: false
        }
      ],
      isOnSale: false,
      quantityInCart: 0
    };
  }

  incrementInCart() {
    this.wine.quantityInCart++;
  }

  decrementInCart() {
    if (this.wine.quantityInCart > 0) {
      this.wine.quantityInCart--;
    }
  }
}

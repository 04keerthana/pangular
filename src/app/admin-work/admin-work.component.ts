import { Component } from '@angular/core';
import { Plant } from '../plant';
import { PlantOperationsService } from '../plant-operations.service';

@Component({
  selector: 'app-admin-work',
  templateUrl: './admin-work.component.html',
  styleUrls: ['./admin-work.component.css']
})
export class AdminWorkComponent {
  __plantService:PlantOperationsService;

  constructor(plantService:PlantOperationsService)
  {
    this.__plantService = plantService;
  }

  readPlant(plantId:string,plantName:string,category:string,season:string,price:string,discount:string,about:string,image:string)
  {
    console.log(plantId+" "+plantName+" "+category+" "+season+" "+ price+" "+discount+" "+" "+about+" "+image);
    let plantFromUser:Plant = new Plant(parseInt(plantId),plantName,category,season,image,about,parseInt(discount),parseInt(price));
    this.__plantService.addPlant(plantFromUser);

    
  }

}

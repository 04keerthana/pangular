import { Component } from '@angular/core';
import { Plant } from '../plant';
import { PlantOperationsService } from '../plant-operations.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  __PlantService:PlantOperationsService;

  allPlant : Array<Plant> =[];
  watchList : Array<Plant> =[];
  watchlistCount : number=0;

  priceHighCss:string = "color:crimson";
  priceLowCss : string ="color:rgb(8,112,63);font-weight:700;";
  priceNormalCss :string="color:black";

  constructor(plantService:PlantOperationsService)
  {
    this.__PlantService = plantService;
    this.allPlant=this.__PlantService.getPlantArr();
  }

  goForBuy(plant:string)
  {
    let plantId = parseInt(plant);
    console.log(" plant to buy"+plantId+"plant");
    
  }

  addWatchlist(plant:string)
  {
    let addPlantId = parseInt(plant);

    this.allPlant.forEach(c=>{
      if(c.plantId==addPlantId)
      {
        this.watchList.push(c);
      }
    });
    this.watchlistCount=this.watchList.length;
    console.log(this.watchList);
    
  }

  getFilterData(filterValue:string)
  {
    console.log("Filter Value"+ filterValue);

    this.allPlant=this.__PlantService.getPlantByCategory(filterValue);
  }


  getFilterData1(filterSeason:string)
  {
    console.log("Filter Value"+ filterSeason);

    this.allPlant=this.__PlantService.getPlantBySeason(filterSeason);
  }

}

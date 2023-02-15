import { Injectable } from '@angular/core';
import { Plant } from './plant';

@Injectable({
  providedIn: 'root'
})
export class PlantOperationsService {
  

  constructor() { }

  plantArr:Plant[] =[];

  addPlant(plantFromUser:Plant)
  {
    this.plantArr.push(plantFromUser);
    console.log("Inside Plant Service: Plant Added"+ plantFromUser.plantId);
    console.log("Total Plant Are :-"+ this.plantArr.length);
  }

  getPlantArr():Plant[]
  {
    return this.plantArr;
  }

  getPlantByCategory(filterCategory:string):Plant[]
  {
    let outputArr:Plant[]=[];

    this.plantArr.forEach(c=>{
      if(c.category==filterCategory)
      {
        outputArr.push(c);
      }
    });

    return outputArr;
  }

  getPlantBySeason(filterSeason: string): Plant[] {
   let outputArr:Plant[]=[];

   this.plantArr.forEach(c=>{
    if(c.season==filterSeason)
    {
      outputArr.push(c);
    }
   });

   return outputArr;
  }
  
   
  }


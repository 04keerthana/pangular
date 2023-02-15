export class Plant {
    plantId:number;
    plantName:string;
   category:string;
   season:string;
   imageName:string;
   about:string;
   discount:number;
   price:number;

    

    constructor(
        plantId:number,
        plantName:string,
        category:string,
        season:string,
        imageName:string,
        about:string,
        discount:number,
        price:number
    )
    {
          this.plantId = plantId;
          this.plantName = plantName;
          this.category = category;
          this.season = season,
          this.imageName = imageName;
          this.about = about;
          this.discount = discount;
          this.price = price;
    }
}

/// <reference path="../services/bike.service.ts" />
/// <reference path="../services/cars.service.ts" />
import { Component } from "@angular/core";
import { CarsService } from '../services/cars.service';
import {bikeService} from '../services/bike.service';
@Component({
    selector: 'of-car',
    templateUrl: './app/cars.component/cars.component.html',
    styleUrls: ['./app/Cars.Component/Cars.Component.css'],
    providers: [CarsService, bikeService]
 
})
export class CarsComponent {
    private carImages: any[];
    private biketitles: any[];
    constructor(private _carsService: CarsService, private _bikeService: bikeService) {
       
    }
   
    ngOnInit() {
        this.getCarImages();
        this.getbiketitle();
    }
    getCarImages() {
        this._carsService.getCarImages().subscribe(
            response => this.carImages = response,
            error => console.error(error),
            () => console.info(this.carImages)
        );
        
    }
    getbiketitle() {
        this._bikeService.getbiketitle().subscribe(
            response => this.biketitles = response,
            error => console.error(error),
            () => console.info(this.biketitles)
        );
    }
}

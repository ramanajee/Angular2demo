"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../services/bike.service.ts" />
/// <reference path="../services/cars.service.ts" />
var core_1 = require("@angular/core");
var cars_service_1 = require("../services/cars.service");
var bike_service_1 = require("../services/bike.service");
var CarsComponent = (function () {
    function CarsComponent(_carsService, _bikeService) {
        this._carsService = _carsService;
        this._bikeService = _bikeService;
    }
    CarsComponent.prototype.ngOnInit = function () {
        this.getCarImages();
        this.getbiketitle();
    };
    CarsComponent.prototype.getCarImages = function () {
        var _this = this;
        this._carsService.getCarImages().subscribe(function (response) { return _this.carImages = response; }, function (error) { return console.error(error); }, function () { return console.info(_this.carImages); });
    };
    CarsComponent.prototype.getbiketitle = function () {
        var _this = this;
        this._bikeService.getbiketitle().subscribe(function (response) { return _this.biketitles = response; }, function (error) { return console.error(error); }, function () { return console.info(_this.biketitles); });
    };
    return CarsComponent;
}());
CarsComponent = __decorate([
    core_1.Component({
        selector: 'of-car',
        templateUrl: './app/cars.component/cars.component.html',
        styleUrls: ['./app/Cars.Component/Cars.Component.css'],
        providers: [cars_service_1.CarsService, bike_service_1.bikeService]
    }),
    __metadata("design:paramtypes", [cars_service_1.CarsService, bike_service_1.bikeService])
], CarsComponent);
exports.CarsComponent = CarsComponent;
//# sourceMappingURL=cars.component.js.map
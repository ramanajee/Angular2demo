/// <reference path="cars.component/cars.component.ts" />
import { Component } from "@angular/core";
import { CarsComponent } from './cars.component/cars.component';
@Component({
    selector: 'my-app',
    template: `<div id="digital-layout">          
                <section id="page-content">
                    <div id="data-container">
                        <of-car></of-car>
                    </div>
                </section>
            </div>
            `,
})
export class AppComponent {
    private show: boolean = false;
    private message: string;    
}



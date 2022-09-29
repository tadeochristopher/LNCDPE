var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
//import { OutletContext } from '@angular/router';
//import { NgClass } from '@angular/common';
import { HeaderParameterService } from '../../services/header/header-parameter.service';
//import { FormControl } from '@angular/forms';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(headerParameterService) {
        this.headerParameterService = headerParameterService;
        this.attrib = 'dropdown-menu';
    }
    Object.defineProperty(HeaderComponent.prototype, "showlogout", {
        get: function () {
            return this.headerParameterService.showlogout;
        },
        set: function (value) {
            this.headerParameterService.showlogout = value;
        },
        enumerable: false,
        configurable: true
    });
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.ShowHide = function () {
        this.showlogout = !this.showlogout;
        this.attrib = this.showlogout ? 'dropdown-menu show' : 'dropdown-menu';
        //alert(this.attrib);
    };
    HeaderComponent.prototype.SigningOut = function () {
        var result = confirm('Are you sure you want to sign out?');
        if (result) {
            location.href = "http://www.apprehensivegent.tech";
        }
        else {
            alert('Proceed');
        } //TODO: Return to header component for wiring up the security logic for logging out, remember to connect into the service component module...CDW
    };
    HeaderComponent = __decorate([
        Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css'],
            providers: [HeaderParameterService]
        }),
        __metadata("design:paramtypes", [HeaderParameterService])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map
import { Injectable } from '@angular/core';

@Injectable()
export class HeaderParameterService {
    showlogout: boolean;
    constructor() {
        this.showlogout = false;
    }
}
import { Injectable } from '@angular/core';

@Injectable()
export class NavParameterService {
  showKBItems: boolean;
  submenuKB: boolean;
  constructor() {
    this.showKBItems = false;
    this.submenuKB = false;
  }
}

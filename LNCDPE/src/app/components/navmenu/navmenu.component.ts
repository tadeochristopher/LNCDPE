import { Component, OnInit } from '@angular/core';
import { NavParameterService } from '../../services/navigation/Nav-Parameter.service';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['../../../assets/css/navmenu.component.css'],
    providers: [NavParameterService]
})

export class NavMenuComponent implements OnInit {
  linkRightArrowShow: string = 'glyphicon-menu-right';
  linksSubMenuKB: string = 'sublistKB';

  get showKBItems(): boolean {
    return this.navParameterService.showKBItems;
  }

  set showKBItems(value: boolean) {
    this.navParameterService.showKBItems = value;
  }

  get SubmenuKB(): boolean {
    return this.navParameterService.submenuKB;
  }

  set SubmenuKB(value: boolean) {
    this.navParameterService.submenuKB = value;
  }

  constructor(private navParameterService: NavParameterService) {

  }

  ngOnInit(): void {

  }

  expandMenuItem(): void {
    this.showKBItems = !this.showKBItems;
    this.linkRightArrowShow = this.showKBItems ? 'glyphicon glyphicon-menu-down' : 'glyphicon-menu-right';
    this.SubmenuKB = !this.SubmenuKB;
    this.linksSubMenuKB = this.SubmenuKB ? 'sublistKB show' : 'sublistKB';
  }
}

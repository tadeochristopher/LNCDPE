import { Component, EventEmitter, OnInit } from '@angular/core';
import { HeaderParameterService } from '../../services/header/header-parameter.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['../../../assets/css/header.component.css'],
    providers: [HeaderParameterService]
})
export class HeaderComponent implements OnInit {
  attrib: string = 'dropdown-menu';
  username: string = 'Christopher';

    get showlogout(): boolean {
        return this.headerParameterService.showlogout;
    }
    set showlogout(value: boolean) {
        this.headerParameterService.showlogout = value;
    }

    constructor(private headerParameterService: HeaderParameterService) {
    }

    ngOnInit(): void {

    }

    ShowHide(): void {        
        this.showlogout = !this.showlogout;            
        this.attrib = this.showlogout ? 'dropdown-menu show' : 'dropdown-menu';
        //alert(this.attrib);
    }

    SigningOut(): void {
        var result = confirm('Are you sure you want to sign out?');

        if (result) {
            location.href = "http://www.apprehensivegent.tech";
        }
        else {
            alert('Proceed');
        } //TODO: Return to header component for wiring up the security logic for logging out, remember to connect into the service component module...CDW
    }
}

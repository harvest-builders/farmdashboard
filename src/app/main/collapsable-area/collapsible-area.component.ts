import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-collapsible-area',
    templateUrl: './collapsible-area.component.html',
    styleUrls: ['./collapsible-area.component.scss']
})

export class CollapsibleAreComponent {
    public isOpen = false;


    toggleCollapseArea(): void{
        this.isOpen = !this.isOpen;
    }
}
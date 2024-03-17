import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'job-tabs',
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './tabs.component.html',
    styleUrl: './tabs.component.css',
})
export class TabsComponent {}

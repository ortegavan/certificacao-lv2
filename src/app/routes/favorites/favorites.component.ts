import { Component } from '@angular/core';
import { TabsComponent } from '../../components/tabs/tabs.component';

@Component({
    selector: 'app-favorites',
    standalone: true,
    templateUrl: './favorites.component.html',
    styleUrl: './favorites.component.css',
    imports: [TabsComponent],
})
export class FavoritesComponent {}

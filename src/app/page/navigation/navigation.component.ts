import { Component, Input } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  @Input() items: SelectItem[];
  @Input() selectedItem: string | undefined;

  constructor() {
    this.items = [];
    for (let i = 0; i < 10000; i++) {
        this.items.push({ label: 'Rock ' + i, value: 'Item ' + i });
    }
}
}

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { LearnersService } from 'src/app/api/services';
import { BaseComponent } from 'src/app/base/base.component';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent extends BaseComponent {




  @Input() items: SelectItem[];
  @Input() selectedItem: string | undefined;

  constructor(
    data: DataService,
    router: Router,
    private auth: AuthService,
    private notify: NotificationService,
    private api: LearnersService
  ) {
    super(data, router);
    this.items = [];
    for (let i = 0; i < 10000; i++) {
        this.items.push({ label: 'Rock ' + i, value: 'Item ' + i });
    }
}


logout() {
  this.api.logOutLearner().subscribe(
    () => {
      this.auth.logout();
      this.router.navigateByUrl('/login')
      this.notify.success('user logged out successfully');
    },
    (error) => {
      this.notify.error(error.message);
    }
  );
}
}

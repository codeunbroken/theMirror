import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumAnnouncementComponent } from '../forum-announcement/forum-announcement.component';
import { ForumHomeComponent } from '../forum-home/forum-home.component';
import { ForumWelcomePageComponent } from '../forum-welcome-page/forum-welcome-page.component';
import { LayoutComponent } from './layout/layout.component';



const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: ForumHomeComponent,
      },

      {
        path: 'welcome',
        component: ForumWelcomePageComponent,
      },
      {
        path: 'announcement',
        component: ForumAnnouncementComponent,
      },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}

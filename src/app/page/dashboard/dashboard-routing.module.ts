import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth.guard';
import { AllForumsComponent } from '../all-forums/all-forums.component';
import { ForumAnnouncementComponent } from '../forum-announcement/forum-announcement.component';
import { ForumHomeComponent } from '../forum-home/forum-home.component';
import { ForumWelcomePageComponent } from '../forum-welcome-page/forum-welcome-page.component';
import { ReplyComponentComponent } from '../reply-component/reply-component.component';
import { LayoutComponent } from './layout/layout.component';



const routes: Routes = [

  {
    path: '',
    component: LayoutComponent, canActivate: [AuthGuard],
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

      {
        path: 'all-forums',
        component: AllForumsComponent,
      },
      {
        path: 'forum/:forumId',
        component: ReplyComponentComponent,
      },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}

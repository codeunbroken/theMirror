import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { ForumWelcomePageComponent } from '../forum-welcome-page/forum-welcome-page.component';
import { ForumHomeComponent } from '../forum-home/forum-home.component';
import { ForumAnnouncementComponent } from '../forum-announcement/forum-announcement.component';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CourseForumComponent } from '../course-forum/course-forum.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ReplyComponentComponent } from '../reply-component/reply-component.component';
import { AllForumsComponent } from '../all-forums/all-forums.component';
import { AvatarModule } from 'primeng/avatar';


@NgModule({
  declarations: [
    LayoutComponent,
    ForumWelcomePageComponent,
    ForumHomeComponent,
    ForumAnnouncementComponent,
    SidebarComponent,
    CourseForumComponent,
    NavigationComponent,
    ReplyComponentComponent,
    AllForumsComponent



  ],
  imports: [
    CommonModule,
    TabViewModule,
    DropdownModule,
    FormsModule,
    AvatarModule,
    ReactiveFormsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule {}

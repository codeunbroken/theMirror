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



@NgModule({
  declarations: [
    LayoutComponent,
    ForumWelcomePageComponent,
    ForumHomeComponent,
    ForumAnnouncementComponent,
    SidebarComponent,
    CourseForumComponent,
    NavigationComponent,



  ],
  imports: [
    CommonModule,
    TabViewModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule {}

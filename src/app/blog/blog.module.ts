import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '@scullyio/ng-lib';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { MatCardModule, MatDividerModule } from '@angular/material';

@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ComponentsModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class BlogModule {}

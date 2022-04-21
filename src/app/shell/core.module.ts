import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreRoutingModule } from './core-routing.module';
import { LayoutComponent } from './ui/layout/layout.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { RouterModule } from '@angular/router';
import { WaveBorderComponent } from './core/components/wave-border/wave-border.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    WaveBorderComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    RouterModule,
  ],
  exports: [],
})
export class CoreModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorCoreMainComponent } from './containers/main/main.component';
import { ErrorCoreMainRoutingModule } from './main-routing.module';

@NgModule({
  imports: [CommonModule, ErrorCoreMainRoutingModule],
  exports: [],
  declarations: [ErrorCoreMainComponent],
})
export class ErrorCoreMainModule {}

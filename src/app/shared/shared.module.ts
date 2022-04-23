import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedContactFormComponent } from './ui/contact-form/contact-form.component';
import { SharedInputFormFieldComponent } from './ui/input-form-field/input-form-field.component';
import { SharedBreadcrumbComponent } from './ui/breadcrumb/breadcrumb.component';

const COMPONENTS = [
  SharedContactFormComponent,
  SharedInputFormFieldComponent,
  SharedBreadcrumbComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule],
  exports: [CommonModule, ...COMPONENTS],
})
export class SharedModule {}

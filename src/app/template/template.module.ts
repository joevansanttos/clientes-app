import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ClientesModule } from '../clientes/clientes.module';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ClientesModule
  ],
  exports:[
    NavbarComponent,
    SidebarComponent
  ]
})
export class TemplateModule { }

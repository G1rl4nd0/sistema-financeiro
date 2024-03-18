import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent } from './listagem.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxButtonModule, DxDataGridModule, DxTreeListModule } from 'devextreme-angular';



@NgModule({
    declarations: [ListagemComponent],
    imports: [
        CommonModule,
        DxDataGridModule
    ]
})
export class ListagemModule { }

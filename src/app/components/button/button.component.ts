import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  constructor(public dialogService: DialogService) {}

  show() {
     this.dialogService.open(DialogComponent, { header: 'انشاء صفقه جديده',
     showHeader:false,
     rtl:true,
     contentStyle:{
      "padding": "0",
      "border-radius": "6px"
    },
     width: '490px',
     modal:true,
     breakpoints: {
         '960px': '75vw',
         '640px': '90vw'
     },
     });
}
}

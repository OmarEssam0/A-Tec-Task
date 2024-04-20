import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { SelectorData } from 'src/app/core/interface/selector-data';
import { SerachData } from 'src/app/core/interface/serach-data';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  value:string = "0"
  max:number = 3
  dir:boolean = true;
  clickBtn:boolean = false
  bgColor:string = ""
  serachBtnData:SerachData[]= [
    {
    name:"عمر عصام"
    },
    {
    name:"محمد احمد"
    },
    {
    name:"اسر عصام"
    },
    {
    name:"محمد غريب"
    },
  ]
  click:boolean = true;
  dirc:string = "rtl"
  values!:string[]
  msg:string="السلام عليكم، نحن شركة ABC للتكنولوجيا نود تأكيد توافقنا على شروط العقد الخاص بتقديم خدمات الصيانة والدعم التقني لمنتجاتكم. يرجى توقيع هذا العقد كما هو مرفق، وإعادته لنا في أقرب وقت ممكن. شكرًا جزيلاً على تعاونكم. أطيب التحيات،John Doe مدير علاقات العملاء شركة ABC للتكنولوجيا"
  visible: boolean = false;
  selectData:SelectorData[] = [
    {
      icon:"fa-brands fa-instagram" ,
      iconCode:"&#xf16d;",
      selectName:"منصة الإنستجرام"
    } ,
    {
      icon:"fa-brands fa-instagram" ,
      iconCode:"&#xf16d;",
      selectName:"منصة الفيسبوك"
    } ,
    {
      icon:"fa-brands fa-instagram" ,
      iconCode:"&#xf16d;",
      selectName:"منصة اكس"
    } ,
  ]
  selectProject:SelectorData[] = [
    {
      icon:"fa-brands fa-instagram" ,
      iconCode:"&#xf16d;",
      selectName:"فيكتوريا دي ميرو"
    } , {
      icon:"fa-brands fa-instagram" ,
      iconCode:"&#xf16d;",
      selectName:"ماونتن فيو"
    } , {
      icon:"fa-brands fa-instagram" ,
      iconCode:"&#xf16d;",
      selectName : "القطاميه هايتس"
    } ,
  ]
  constructor(private ref: DynamicDialogRef , private translate:TranslateService) {
    translate.setDefaultLang('ar')
  }
  showDialog() {
    this.visible = true;
}
  closeDialog() {
    this.ref.close();
  }
  addChip(event: any) {
    if (this.values.length == Number(this.max)) {
      this.values.push('+3');
    }
  }
  direction(lang:string){
    this.translate.use(lang);
    if(this.dir === true){
      this.dir= false
      this.dirc = "ltr"
    }else{
      this.dir = true
      this.dirc = "rtl"
    }
  }
  activeBtn(){
    if(this.clickBtn == false){
      this.click = false
      this.bgColor = "bg-blue"
      this.clickBtn = true
    }
  }

  add(){
    this.closeDialog()
  }
}

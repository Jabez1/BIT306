import { Component } from '@angular/core';
import { WorkType } from '../fwa.model';
import { FWAService } from '../fwa.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-fwaform',
  templateUrl: './fwaform.component.html',
  styleUrls: ['./fwaform.component.css']
})

export class FwaFormComponent {
  readonly WorkTypes = WorkType;
  readonly WorkTypeKeys = Object.keys(WorkType);
  constructor(public fwaService: FWAService){}

  getVal(key: any){
    return WorkType[key as keyof typeof WorkType];
  }

  onFWASubmit(form: NgForm){
    if (form.invalid){
      return;
    }
    this.fwaService.addFWA(form.value.workType, form.value.description, form.value.reason)
  }
}

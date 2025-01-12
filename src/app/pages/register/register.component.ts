import { Component } from '@angular/core';
import { JobsService } from '../../service/jobs.service';

@Component({
  selector: 'app-register',
  standalone: false,

  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  employeeObj: any = {
    "EmployerId": 0,
    "CompanyName": "",
    "EmailId": "",
    "MobileNo": "",
    "PhoneNo": "",
    "CompanyAddress": "",
    "City": "",
    "State": "",
    "PinCode": "",
    "LogoURL": "",
    "GstNo": ""
  }

  constructor(private job: JobsService) { }

  register() {
    this.job.registerEmployer(this.employeeObj).subscribe((res: any) => {
      if (res.result) {
        alert(res.message)
      }
      else {
        alert(res.message)
      }
    })
  }
}

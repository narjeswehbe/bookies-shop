import { Component } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'bk-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(public dialog: MatDialog) {}

 open()
 {

  let dialogRef = this.dialog.open(LoginFormComponent, {
    height: '100%',
    width: '500px',
    position : {
      top: '0px',
      right: '0px',
    }
  
  });
 }
}

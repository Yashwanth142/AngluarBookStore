import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/Userservice/user.service';
import { AdminService } from 'src/app/services/adminService/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  bgColor: boolean = false;

  loginForm!: FormGroup;
  signupForm!: FormGroup

  isChecked = false;
  showPassword: boolean = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private adminService: AdminService,
    private snackBar: MatSnackBar, private route: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })

    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      number: ['', [Validators.required, Validators.minLength(10)]]
    })
  }

  loginBgColor() {
    this.bgColor = !this.bgColor
  }

  signupBgColor() {
    this.bgColor = !this.bgColor
    console.log(this.bgColor);
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  
  changeUser() {
    this.isChecked = !this.isChecked;
    console.log(this.isChecked);
  }

  signup() {
    if (this.signupForm.valid) {
      let reqdata = {
        fullName: this.signupForm.value.name,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
        phone: this.signupForm.value.number,
      }
      console.log('signup', reqdata);
      if (this.isChecked != true){
        console.log("user");
        this.userService.signupService(reqdata).subscribe((result: any) => {
          console.log(result);
          this.snackBar.open('User Account created Successfully!', 'ok', {
            duration: 2000
          });
        })
      }else{
        console.log("admin");
        this.adminService.Adminsignup(reqdata).subscribe((result: any) => {
          console.log(result);
          this.snackBar.open('Admin Account created Successfully!', 'ok', {
            duration: 2000
          });
        })
      }
      
    }else {
      this.snackBar.open('Enter valid details !', 'ok', {
        duration: 2000
      });
    }
  }

  login() {
    if (this.loginForm.valid) {
      let reqdata = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      }
      if (this.isChecked != true) {
        console.log("user");
        this.userService.loginService(reqdata).subscribe((result: any) => {
          console.log(result);
          this.snackBar.open('Login Successfull !', 'ok', {
            duration: 2000
          });
          console.log(result.result);
          localStorage.setItem('token', result.result.accessToken)
          //this.route.navigateByUrl('/home');
        })
      } else {
        console.log("admin");

        this.adminService.adminLogin(reqdata).subscribe((result: any) => {
          console.log(result);
          this.snackBar.open('Logged as Admin !', 'ok', {
            duration: 2000
          });
          localStorage.setItem('token', result.result.accessToken)
          //this.route.navigateByUrl('/AdminDashBoard');
        })
      }
    }  else {
      this.snackBar.open('Enter valid details !', 'ok', {
        duration: 2000
      });
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/clases/user';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public user: User
  constructor(
    private loginService: LoginService,
    private router: Router) {
    this.user = new User();
    }

  ngOnInit(): void {
  }

  public submit(): void {
    this.loginService.login(this.user).subscribe(
    (data: number) => {
    localStorage.setItem('userName', this.user.name);
    localStorage.setItem('personalToken',`${ data }`);
   
   this.router.navigate(['/profile-page']).then(()=>{window.location.reload();});
    },
    (error: Error) => {
      console.error("Error al realizar el acceso- login");
    }
    )
    }
   
}

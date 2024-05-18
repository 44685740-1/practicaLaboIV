import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { GithubAPIService } from './services/github-api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private http : GithubAPIService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  mostrarUsuario(){
     this.http.getUser();
  }

  loguear() {
    if (this.loginForm.valid) {
      const mail = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      if (mail === 'ahuitzcaracciolo@gmail.com' && password === 'elgaturro') {
        Swal.fire({
          title: 'Good job!',
          text: 'You clicked the button!',
          icon: 'success'
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      }
    } else {
      console.log('Form is invalid');
    }
  }
}


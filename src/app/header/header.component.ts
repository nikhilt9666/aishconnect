import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showFiller = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  uploadfile(){
    this.router.navigate(['/upload-file']);
    
  }
  backToHome(){
    this.router.navigate(['']);

  }

}

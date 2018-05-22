import {
  Component,
  OnInit
} from '@angular/core';
import {
  MenuItem
} from 'primeng/primeng';
import {
  Router
} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  storage: any;
  items: MenuItem[];
  showLogin: boolean = false;
  constructor(private router: Router) {
    this.showLogin = false;

    var data = localStorage.getItem('exp');
    if (data != null) {
      var expDate = new Date(Number.parseInt(data)*1000);
      var now = new Date();
      this.showLogin = ((+now - +expDate) > 0);
      if( this.showLogin)
      router.navigate(['/logout']);
    } else {
      this.showLogin = true;
      router.navigate(['/logout']);
    }
  }

  ngOnInit() {
    this.items = JSON.parse(atob(localStorage.getItem('MenuItem')));
    this.storage= localStorage;
  }

}
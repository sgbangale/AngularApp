import { Component } from '@angular/core';
import { UiBlockService } from './shared/ui-block.service';

@Component({
  selector: 'app-root',
  template: `
  <div style="height:10px;" [style.display]="uiService.blockUI?'none':'block'" ></div>
  <p-progressBar mode="indeterminate" [style]="{'height': '10px'}"  [style.display]="uiService.blockUI?'block':'none'"></p-progressBar>  
  <p-blockUI [blocked]="uiService.blockUI">  
  </p-blockUI>
  <p-growl></p-growl>
  <router-outlet></router-outlet>  
  `,
  styles: []
})
export class AppComponent {
  
  constructor(public uiService : UiBlockService) {    
  }
}

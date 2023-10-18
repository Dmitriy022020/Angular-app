import {Component} from '@angular/core';
import {routes} from "../../app-routing.module";
import {Routes} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  protected readonly routes: Routes = routes;
}

import { Component} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { faDungeon } from '@fortawesome/free-solid-svg-icons';
import { faMountainSun } from '@fortawesome/free-solid-svg-icons';
import { faShield } from '@fortawesome/free-solid-svg-icons';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-game-of-thrones-houses';

  data : any;

  selectedHouse:any;
  houseName = ""
  region = ""
  coatOfArms = ""
  words = ""

  selected: boolean = false
  fadeAway: boolean = false

  faDungeon = faDungeon
  faMountainSun = faMountainSun
  faShield = faShield
  faQuoteRight = faQuoteRight
  faQuoteLeft = faQuoteLeft
  faSun = faSun
  faMoon = faMoon

  light: boolean = false

  constructor(@Inject(DOCUMENT) private document: Document ,private _http: HttpClient){
    
  }

  ngOnInit(){
    this.fetchData().subscribe(res=> this.data = res)
  }

  fetchData(){
    return this._http.get('https://www.anapioficeandfire.com/api/houses/')
  }


  getHouse(){
    this.fadeAway = true
    setTimeout(()=> {
      this.houseName = ""
      this.region = ""
      this.coatOfArms = ""
      this.words = ""
    },900)
    setTimeout(()=> {
      this.selected = false
      this.fadeAway = false
      this.selected = true
      this.houseName = this.selectedHouse.name
      this.region = this.selectedHouse.region
      this.coatOfArms = this.selectedHouse.coatOfArms
      this.words = this.selectedHouse.words
    }, 1000)
  }

  toggleTheme(){
    this.light = !this.light
    this.document.body.classList.toggle("light");
  }
}

import { Component} from '@angular/core';
import {HttpClient} from '@angular/common/http'

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

  constructor(private _http: HttpClient){
    
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
}

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
  
  selectedHouseName:string = ""
  region = ""
  coatOfArms = ""
  words = ""

  constructor(private _http: HttpClient){
    
  }

  ngOnInit(){
    this.fetchData().subscribe(res=> this.data = res)
  }

  fetchData(){
    return this._http.get('https://www.anapioficeandfire.com/api/houses')
  }


  getHouse(){
    console.log(this.selectedHouse)
    this.region = this.selectedHouse.region
    this.coatOfArms = this.selectedHouse.coatOfArms
    this.words = this.selectedHouse.words
  }
}

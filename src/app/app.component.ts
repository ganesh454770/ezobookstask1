import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ezobooks';

  public image: any = []

  constructor(private http: HttpClient) {

  }

  getData() {
    const Url = 'https://db.ezobooks.in/kappa/image/task'
    this.http.get(Url).subscribe((res) => {
      this.image = res;

      console.log(this.image)
    })
  }
  ngOnInit(): void {

    //const url : string = 'https://db.ezobooks.in/kappa/image/task'
    //this.http.get(url).subscribe((res) => {
     // this.items = res;
    //})

    this.getData()
  }
}

import { Component, OnInit, } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent implements OnInit {
  title = 'fortune_telling';

  strings: string []=[]
  
  constructor(private httpService: HttpService){}
      
  ngOnInit(){
     this.httpService.getData().subscribe((data: any) => this.strings=data.stringList);
  }
}

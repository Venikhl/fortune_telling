import { Component, OnInit, } from '@angular/core';
import { Sign } from '../entities/Sign';
import { HttpSignService } from '../http-sign.service';

@Component({
  selector: 'app-zodiac-signs',
  templateUrl: './zodiac-signs.component.html',
  styleUrls: ['./zodiac-signs.component.css'],
  providers: [HttpSignService]
})
export class ZodiacSignsComponent implements OnInit {

  signs: Sign[]=[];

  constructor(private httpSignService: HttpSignService) { }

  ngOnInit(){
    this.httpSignService.getData().subscribe((data: any) => this.signs=data.signList);
 }

}
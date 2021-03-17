import { PruebaService } from './../../services/prueba.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  public Data: any;

  constructor(private pruebaServices: PruebaService) { }

  ngOnInit(): void {
    this.Data = this.pruebaServices.getData();
    this.Data.forEach(element => {
        console.log(element.id+' - '+element.email)
    });
  }
}

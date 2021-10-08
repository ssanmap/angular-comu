import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  @Input() title: string = 'titulo hijo'
  @Input() callback: any;
  @Output() carga = new EventEmitter<any>();

  arreglo = [{nombre: 'seba', edad: 22}]
  constructor() { }

  ngOnInit(): void {
    this.cargaDatos()
  }
  cargaDatos() {
    //return
    let palabra =  'cangando ......';
    this.carga.emit(this.arreglo);
  }

}

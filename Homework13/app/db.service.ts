import { Injectable } from '@angular/core';

@Injectable()
export class DbService {

  private data: any[] = [
    {"id":"1","name":"John Masamalo","stuID":"985858","email":"jmasamalo@mum.edu"},
    {"id":"2","name":"Bennett Masamalo","stuID":"111111","email":"abc@mum.edu"},
    {"id":"3","name":"Graham Masamalo","stuID":"222222","email":"xyz@mum.edu"},
    {"id":"4","name":"Ethan Masamalo","stuID":"333333","email":"uvw@mum.edu"}
  ];

  constructor() { }

  getData() {
      return this.data;
  }

  getStudent(id){
    return this.data[id-1];
  }

}

import { Injectable } from '@angular/core';

@Injectable()
export class ComponentCreaterService {
  private elementTobeCreated: any;

  public get getElementTobeCreated () {
    return this.elementTobeCreated;
  }

  public set setElementTobeCreated (element: any) {
    this.elementTobeCreated = element;
  }

  constructor() {}

}

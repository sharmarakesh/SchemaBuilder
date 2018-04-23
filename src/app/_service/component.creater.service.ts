import { Injectable } from '@angular/core';

@Injectable()
export class ComponentCreaterService {
  private elementTobeCreated: any = [];

  public getElementTobeCreated (): any {
    return this.elementTobeCreated;
  }

  public setElementTobeCreated (element: any) {
    this.elementTobeCreated.push(element);
  }

  constructor() {}

}

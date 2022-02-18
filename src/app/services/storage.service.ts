import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storage = localStorage;

  constructor() { }


  

  public obtenerItem(itemKey: string): string {
    let item: any = this.storage.getItem(itemKey);
    if (item == undefined) {
      item = '';
    }
    return item;
  }

  public limpiarStorage(): void {
    this.storage.clear();
  }

}
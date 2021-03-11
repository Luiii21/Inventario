import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private http: HttpClient) {
  }

  getItems(): Observable<any> {
    const url = `https://inventarioapp-2f2a2-default-rtdb.firebaseio.com/products.json`;
    return this.http.get(url);
  }

  filterItems(parameter: string): any[] {

    const filterObj: any[] = [];
    const term = parameter.toLowerCase();

    this.getItems().subscribe(resp => {
      const toFilterArray = resp;

      Object.values(toFilterArray).forEach((product: any) => {
        const name = product.productName.toLowerCase();
        const type = product.productGender.toLowerCase();

        if (name.indexOf(term) >= 0 || type.indexOf(term) >= 0) {
          filterObj.push(product);
        }
      });
    }).unsubscribe();
    return filterObj;
  }
}

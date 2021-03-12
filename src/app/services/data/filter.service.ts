import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private testObj: any;
  private url = `https://inventarioapp-2f2a2-default-rtdb.firebaseio.com/products.json`;

  constructor(private http: HttpClient) {
  }


  getItems(): Observable<any> {
    return this.http.get(`${this.url}`).pipe(
      map(this.createArray)
    );
  }


  filterItems(parameter: any): Observable<any> {
    return this.getItems().pipe((map((data: any) => {
      return data.filter(x => {
        // tslint:disable-next-line:forin
        for (const i in parameter) {
          return x[`${i}`].includes(parameter[i]);
        }
      });
    })));
  }

  // tslint:disable-next-line:typedef
  registerItem(product: any) {
    return this.http.post(`${this.url}`, product);
  }


  // tslint:disable-next-line:typedef
  private createArray(productsResp: object) {
    const products: any[] = [];
    Object.keys(productsResp).forEach(k => {
      const product: any = productsResp[k];
      products.push(product);
    });

    if (productsResp === null) {
      return [];
    }

    return products;
  }
}

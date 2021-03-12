import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private testObj: any;

  constructor(private http: HttpClient) {
  }

  getItems(): Observable<any> {
    const url = `https://inventarioapp-2f2a2-default-rtdb.firebaseio.com/products.json`;
    return this.http.get(url);
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
}

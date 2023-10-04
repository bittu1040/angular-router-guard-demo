import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class DataService {
  constructor() {}

  getData() {
    return of('resolve route guard').pipe(delay(3000));
  }
}

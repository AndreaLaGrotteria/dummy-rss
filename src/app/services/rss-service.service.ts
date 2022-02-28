import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as xml2js from 'xml2js';

import { HttpClient } from '@angular/common/http';


@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
}

@Injectable({
  providedIn: 'root'
})
export class RssServiceService {

  constructor(private http: HttpClient) { }

  fetchFromUrl(url: string): Observable<any>{
    return this.http.get(url, {responseType: "text"}).
    pipe(map(res => {
      var r;
      xml2js.parseString( res, function (err, result) {
        r = result["feed"]["entry"];
      })
      return r;
    }));
  }
}

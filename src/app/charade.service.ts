import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Charade {
  id: string;
  pergunta: string;
  resposta: string;
}

@Injectable({
  providedIn: 'root'
})
export class CharadeService {

  url = 'http://lucasreno.kinghost.net/charada';
  data: Charade[];
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(this.url);
  }
}

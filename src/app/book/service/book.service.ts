import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Book} from '../../book';
import {HttpClient} from '@angular/common/http';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${API_URL}/books`);
  }
  create(data): Observable<Book> {
    return this.http.post(`${API_URL}/books`, data);
  }
  delete(id): Observable<Book> {
    return this.http.delete(`${API_URL}/books/${id}`);
  }
  findById(id): Observable<Book> {
    return this.http.get<Book>(`${API_URL}/books/${id}`);
  }
  update(id, data): Observable<Book> {
    return this.http.put(`${API_URL}/books/${id}`, data);
  }
}

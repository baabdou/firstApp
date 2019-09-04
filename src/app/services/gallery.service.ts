import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { }

  getLocations(keyword: string, size: number, currentPage: number) {
    const LOC_URL = "https://pixabay.com/api/?key=13490918-6e4d77f98d1738f6fe17cf8fd&q="+keyword+"&per_page="+size+"&page="+currentPage;

    return this.http.get(LOC_URL);
  }

}

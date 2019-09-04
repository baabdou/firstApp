import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  keyword: string;
  currentPage: number = 1;
  size: number = 10;
  totalPages: number;
  dataImages=[];

  constructor(private gelleryService: GalleryService) { }

  ngOnInit() {
  }

  onLoadImages() {
    this.dataImages = [];
    this.currentPage = 1;
    this.totalPages = 0;
    this.doSearch();
  }

  doSearch() {
    this.gelleryService.getLocations(this.keyword, this.size, this.currentPage).subscribe( data => {
      data['hits'].forEach(image => {
        this.dataImages.push(image);
      });
      this.totalPages = data['totalHits'] / this.size;
    }, error => {
      console.log(error);
    });
  }

  loadData(evt) {
    if(this.currentPage < this.totalPages) {
      console.log(this.currentPage+"/"+this.totalPages);
      ++this.currentPage;
      this.doSearch();
      evt.target.complete();
    }
    if(this.currentPage >= this.totalPages) {
      evt.target.disabled = true;
    }
    
  }

}

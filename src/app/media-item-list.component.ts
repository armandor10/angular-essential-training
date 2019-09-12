import { Component, OnInit } from '@angular/core';
import { MediaItemService } from './media-item.service';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent {
  medium = '';
  mediaItems;
  
  constructor(private mediaItemService: MediaItemService){}
  
  ngOnInit(){
    this.getMediaItems(this.medium);
  }

  onMediaItemDelete(mediaItem) {
    this.mediaItemService.delete(mediaItem)
      .subscribe(() => {
        this.getMediaItems(this.medium);
      });
  }

  getMediaItems(medium: string){
    this.medium = medium;
    this.mediaItemService.get(medium)
    .subscribe(mediaItems => {
      //console.log(mediaItems);
      this.mediaItems = mediaItems;
    });
  }

}

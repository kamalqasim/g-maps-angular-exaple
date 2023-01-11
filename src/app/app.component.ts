import { Component, OnInit, Pipe, PipeTransform  } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
declare var google: any;






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'g-maps-one';
  options: any;

  overlays: any;

  dialogVisible: any;

  markerTitle: any;

  selectedPosition: any;

  infoWindow: any;

  draggable: any;
  constructor (private primengConfig: PrimeNGConfig) {}
  ngOnInit() {
    this.primengConfig.ripple = true;
    this.options = {
        center: {lat:  40.665113, lng: -73.8559644},
        zoom: 10
    };

    this.initOverlays();

    this.infoWindow = new google.maps.InfoWindow();
  }

  handleMapClick(event: any) {
      this.dialogVisible = true;
      this.selectedPosition = event.latLng;
  }

  handleOverlayClick(event: any) {
    console.log(event);
      let isMarker = event.overlay.getTitle != undefined;

      if (isMarker) {
          let title = event.overlay.getTitle();
          this.infoWindow.setContent('' + title + '');
          this.infoWindow.open(event.map, event.overlay);
          event.map.setCenter(event.overlay.getPosition());

      }
  }

  handleOverlayListClick(event: any, li: any) {
      const items = document.getElementsByClassName("active-li");
      
      for (let i = 0; i < items.length; i++) {
        console.log(items[i]);
        items[i].classList.remove('active-li');
      }
      li.target.classList.add('active-li');
      let isMarker = event.getTitle != undefined;

      if (isMarker) {
          let title = event.getTitle();
          this.infoWindow.setContent('' + title + '');
          this.infoWindow.open(event.map, event);
          event.map.setCenter(event.getPosition());

      }
  }

  addMarker() {
    const newTitle  = '<strong style="min-height: 30px; border: 1px solid gray; margin-top: 10px; padding: 5px; display: block; border-radius: 3px;"> ' + this.markerTitle + '</strong>';
    this.overlays.push(new google.maps.Marker({position:{lat: this.selectedPosition.lat(), lng: this.selectedPosition.lng()}, title: newTitle}));
    this.markerTitle = null;
    this.dialogVisible = false;
  }

  handleDragEnd(event: any) {
  }

  initOverlays() {
      if (!this.overlays||!this.overlays.length) {
          this.overlays = [
              new google.maps.Marker({position: {lat: 40.647402018441134, lng: -73.93369263795677}, title: '<strong style="min-height: 30px; border: 1px solid gray; margin-top: 10px; padding: 5px; display: block; border-radius: 3px;"> Test ++ </strong>'}),
          ];
      }
  }

  zoomIn(map: any) {
      map.setZoom(map.getZoom()+1);
  }

  zoomOut(map: any) {
      map.setZoom(map.getZoom()-1);
  }

  clear() {
      this.overlays = [];
  }
}

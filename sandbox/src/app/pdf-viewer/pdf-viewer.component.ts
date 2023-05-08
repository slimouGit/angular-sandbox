import * as pdfjsLib from 'pdfjs-dist';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})


export class PdfViewerComponent implements OnInit { 
 
  
  constructor() { }

  ngOnInit(): void { 
    setTimeout(()=>{  
    // this.canvas = this.pdfCanvas;  
    // console.log("CANVAS ", this.pdfCanvas);
  }, 3000);
      
  }


}


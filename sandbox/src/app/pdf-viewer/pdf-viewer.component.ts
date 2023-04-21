import * as pdfjsLib from 'pdfjs-dist';
import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})


export class PdfViewerComponent implements OnInit {
  
  @ViewChild('pdfCanvas', {static: false, read: ElementRef}) pdfCanvas: ElementRef;
  pdfDoc: any;
  pageNum = 1;
  pageRendering = false;
  pageNumPending: number;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  scale = 1.5;  
 
  
  constructor() { }

  ngOnInit(): void { 
    setTimeout(()=>{  
    // this.canvas = this.pdfCanvas;  
    // console.log("CANVAS ", this.pdfCanvas);
  }, 3000);
      
  }

  ngAfterViewInit() {
    console.log(
      "Ist da ein text ",
     document.getElementById("comed-text")
    );
    console.log(
      "Ist da ein kann was ",
     document.getElementById("comed-canvas")
    );
    this.loadPdf('https://www.africau.edu/images/default/sample.pdf');  
    setTimeout(()=>{  
      
      this.loadCanvas();
      
    }, 3000);
  }

  loadCanvas() {
    if(!this.pdfCanvas){
      console.log("CANVAS kann nix! ");
    }else {
      console.log("CANVAS kann was? ", this.pdfCanvas);
    }
  }


  loadPdf(url: string) {
    console.log("LOAD PDF");    
    // Set up worker source and load PDF
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.5.207/pdf.worker.min.js';
    pdfjsLib.getDocument(url).promise.then((u: any) => console.log("DU U du ", u));
    // console.log("PDF ", typeof(pdf));
    
    pdfjsLib.getDocument(url).promise.then((pdfDoc_: any) => {
      // Save the loaded PDF document
      this.pdfDoc = pdfDoc_;
      // Render the first page
      this.renderPage(this.pageNum);
    });
  }
  
  renderPage(num: number) {
    this.pageRendering = true;
    this.pdfDoc.getPage(num).then((page: any) => {
      const viewport = page.getViewport({ scale: this.scale });
      this.canvas.height = viewport.height;
      this.canvas.width = viewport.width;
      const renderContext = {
        canvasContext: this.ctx,
        viewport,
      };
      const renderTask = page.render(renderContext);
      renderTask.promise.then(() => {
        this.pageRendering = false;
        if (this.pageNumPending !== null) {
          this.renderPage(this.pageNumPending);
          this.pageNumPending = null;
        }
      });
    });
  }

}


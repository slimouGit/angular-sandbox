import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NgxExtendedPdfViewerService, pdfDefaultOptions} from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-example-pdf-viewer',
  templateUrl: './example-pdf-viewer.component.html',
  styleUrls: ['./example-pdf-viewer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplePdfViewerComponent {
  /** In most cases, you don't need the NgxExtendedPdfViewerService. It allows you
   *  to use the "find" api, to extract text and images from a PDF file,
   *  to print programmatically, and to show or hide layers by a method call.
   */

  annotations:any;
  constructor(private pdfService: NgxExtendedPdfViewerService) {
    pdfDefaultOptions.doubleTapZoomFactor = '150%'; // The default value is '200%'
    pdfDefaultOptions.maxCanvasPixels = 4096 * 4096 * 5; // The default value is 4096 * 4096 pixels,
    this.openEditor();
  }

  savePdf(): void { 
    console.log("DOWNLOAD PDF");
  }

  saveAnnotation(): void {
    console.log("PAGES ", this.pdfService.numberOfPages());
    const annotations = this.pdfService.getSerializedAnnotations();
    if (annotations) {
      annotations.forEach(a => a.color = [255, 0, 0]);
    }

    this.pdfService.removeEditorAnnotations();
    console.log("Save Annotation ", annotations);
    if (annotations) {
      annotations.forEach(a => {
        this.scroll(a.pageIndex + 1, 0)
        this.pdfService.addEditorAnnotation(a);
      });
    }
  }

  pdfLoaded():void{
    alert("PDF LOADED");
  }

  hideAnnotations(): void {
    this.annotations = this.pdfService.getSerializedAnnotations();
    this.pdfService.removeEditorAnnotations();
  }

  showAnnotations(): void {
    if (this.annotations) {
      this.annotations.forEach(a => {
        this.scroll(a.pageIndex + 1, 0)
        this.pdfService.addEditorAnnotation(a);
      });
    }
  }

  scroll(pageIndex: number, top: number): void {
    this.pdfService.scrollPageIntoView(pageIndex, {top})
  }

  private openEditor() {
    setTimeout(function () {
      document.getElementById('editorInk').click();
    }, 3000);
  }

}

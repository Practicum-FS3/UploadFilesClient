import { Component } from '@angular/core';
import { FileUploadService } from '../services/uploadFile.services';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {
  selectedFile: File | null = null;
  fileId: number | undefined;
  id:number|null=null;

  constructor(private fileUploadService: FileUploadService) { }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (this.selectedFile) {
      this.fileUploadService.uploadFile(this.selectedFile).subscribe(
        response => console.log('Upload successful', response),
        error => console.log('Upload error', error)
      );
    }
  }

  onDownload(idString: string) {
    this.id=Number(idString)
    this.fileUploadService.getFile(this.id).subscribe(
      response => {
        const blob = new Blob([response], { type: response.type });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = this.selectedFile?.name || 'download';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      },
      error => console.log('Download error', error)
    );
  }
}

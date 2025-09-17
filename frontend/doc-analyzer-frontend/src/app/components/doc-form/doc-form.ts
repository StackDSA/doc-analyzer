import { Component } from '@angular/core';
import { FileUploadService } from '../../services/file-upload-service';

@Component({
  selector: 'app-doc-form',
  providers: [FileUploadService],
  templateUrl: './doc-form.html',
  styleUrl: './doc-form.scss',
})
export class DocForm {
  constructor(private fileUploadService: FileUploadService) {}

  selectedFile?: File;
  message = '';

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (!this.selectedFile) {
      this.message = 'Please select a file first';
      console.log(this.message);
      return;
    }

    this.fileUploadService.uploadAndExtract(this.selectedFile).subscribe({
      next: (res) => {
        this.message = 'Text extracted successfully';
        console.log(res.text); // raw PDF text here
      },
      error: (err) => {
        this.message = 'Extraction failed';
        console.error(err);
      },
    });
  }
}

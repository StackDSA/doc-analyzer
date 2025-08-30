import { Component } from '@angular/core';
import { FileUploadService } from '../../services/file-upload-service';

@Component({
  selector: 'app-doc-form',
  providers: [FileUploadService],
  templateUrl: './doc-form.html',
  styleUrl: './doc-form.scss'
})
export class DocForm {
  constructor(private fileUploadService: FileUploadService) {}

  onCLickSubmit(): void {
    this.fileUploadService.uploadFile();
  }
}

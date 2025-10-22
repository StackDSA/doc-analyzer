import { Component } from '@angular/core';
import { FileUploadService } from '../../services/file-upload-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-field',
  imports: [CommonModule],
  providers: [FileUploadService],
  templateUrl: './text-field.html',
  styleUrl: './text-field.css'
})
export class TextField {
  textPresent: boolean = false;
  
  constructor(private fileUploadService: FileUploadService) {}
  
}

import { Component } from '@angular/core';
import { DocAnalyzerService } from '../../services/doc-analyzer.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.html',
  styleUrls: ['./upload.css'],
  imports: [CommonModule, FormsModule],
  providers: [DocAnalyzerService]
})
export class UploadComponent {
  selectedFile: File | null = null;
  uploadedDocId: string | null = null;
  summary: string | null = null;
  question: string = '';
  answer: string | null = null;
  error: string | null = null;

  constructor(private docService: DocAnalyzerService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] ?? null;
  }

  upload() {
    if (!this.selectedFile) return;

    this.docService.uploadPDF(this.selectedFile).subscribe({
      next: (res: any) => {
        this.uploadedDocId = res.docId;
        this.summary = res.summary; // backend should return summary
      },
      error: (err) => this.error = err.error?.message || 'Upload failed'
    });
  }

  askQuestion() {
    if (!this.uploadedDocId || !this.question) return;

    this.docService.analyzeDoc(this.uploadedDocId, this.question).subscribe({
      next: (res: any) => this.answer = res.answer,
      error: (err) => this.error = err.error?.message || 'Analysis failed'
    });
  }

  deleteDoc() {
    if (!this.uploadedDocId) return;

    this.docService.deleteDoc(this.uploadedDocId).subscribe({
      next: () => {
        this.uploadedDocId = null;
        this.summary = null;
        this.answer = null;
      },
      error: (err) => this.error = err.error?.message || 'Delete failed'
    });
  }
}

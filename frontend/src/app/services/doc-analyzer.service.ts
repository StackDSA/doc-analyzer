import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocAnalyzerService {
  private baseUrl = 'http://localhost:3000'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  uploadPDF(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file); // 'file' must match Multer field name

    return this.http.post(`${this.baseUrl}/upload`, formData);
  }

  analyzeDoc(docId: string, question: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/ask`, { docId, question });
  }

  deleteDoc(docId: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/delete`, { docId });
  }
}

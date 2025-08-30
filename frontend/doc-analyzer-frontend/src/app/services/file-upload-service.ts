import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient) { }

  apiUrl = 'http://localhost:3000/';

  uploadFile(): void {
    this.http.get(this.apiUrl).subscribe((response) => {
      alert('File uploaded successfully');
    }, (error) => {
      alert('File upload failed');
    });
  }
}

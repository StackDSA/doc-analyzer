import { Component } from '@angular/core';
import { UploadComponent } from './components/upload/upload';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [HttpClientModule, UploadComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'doc-analyzer-frontend';
}

import { Component } from '@angular/core';
import { DocForm } from './components/doc-form/doc-form';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [DocForm, HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'doc-analyzer-frontend';
}

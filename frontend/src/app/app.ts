import { Component } from '@angular/core';
import { DocForm } from './components/doc-form/doc-form';
import { HttpClientModule } from '@angular/common/http';
import { TextField } from "./components/text-field/text-field";

@Component({
  selector: 'app-root',
  imports: [DocForm, HttpClientModule, TextField],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'doc-analyzer-frontend';
}

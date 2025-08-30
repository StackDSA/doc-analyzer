import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocForm } from './doc-form';

describe('DocForm', () => {
  let component: DocForm;
  let fixture: ComponentFixture<DocForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

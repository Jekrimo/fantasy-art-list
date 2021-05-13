import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewArtworkComponent } from './add-new-artwork.component';

describe('AddNewArtworkComponent', () => {
  let component: AddNewArtworkComponent;
  let fixture: ComponentFixture<AddNewArtworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewArtworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewArtworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

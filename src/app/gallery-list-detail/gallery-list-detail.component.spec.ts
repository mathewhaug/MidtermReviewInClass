import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryListDetailComponent } from './gallery-list-detail.component';

describe('GalleryListDetailComponent', () => {
  let component: GalleryListDetailComponent;
  let fixture: ComponentFixture<GalleryListDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryListDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechPanelListingComponent } from './tech-panel-listing.component';

describe('TechPanelListingComponent', () => {
  let component: TechPanelListingComponent;
  let fixture: ComponentFixture<TechPanelListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechPanelListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechPanelListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

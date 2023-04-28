import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechPanelDetailsPageComponent } from './tech-panel-details-page.component';

describe('TechPanelDetailsPageComponent', () => {
  let component: TechPanelDetailsPageComponent;
  let fixture: ComponentFixture<TechPanelDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechPanelDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechPanelDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDuvidasFrequentesComponent } from './main-duvidas-frequentes.component';

describe('MainDuvidasFrequentesComponent', () => {
  let component: MainDuvidasFrequentesComponent;
  let fixture: ComponentFixture<MainDuvidasFrequentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainDuvidasFrequentesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainDuvidasFrequentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

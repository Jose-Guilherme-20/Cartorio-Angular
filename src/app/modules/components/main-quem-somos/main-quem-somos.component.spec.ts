import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainQuemSomosComponent } from './main-quem-somos.component';

describe('MainQuemSomosComponent', () => {
  let component: MainQuemSomosComponent;
  let fixture: ComponentFixture<MainQuemSomosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainQuemSomosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainQuemSomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

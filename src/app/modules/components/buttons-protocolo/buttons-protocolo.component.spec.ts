import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsProtocoloComponent } from './buttons-protocolo.component';

describe('ButtonsProtocoloComponent', () => {
  let component: ButtonsProtocoloComponent;
  let fixture: ComponentFixture<ButtonsProtocoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsProtocoloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsProtocoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

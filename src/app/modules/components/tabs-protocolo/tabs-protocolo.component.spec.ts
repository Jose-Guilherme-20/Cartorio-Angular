import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsProtocoloComponent } from './tabs-protocolo.component';

describe('TabsProtocoloComponent', () => {
  let component: TabsProtocoloComponent;
  let fixture: ComponentFixture<TabsProtocoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsProtocoloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsProtocoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

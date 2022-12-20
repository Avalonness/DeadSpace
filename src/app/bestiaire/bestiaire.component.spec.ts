import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestiaireComponent } from './bestiaire.component';

describe('BestiaireComponent', () => {
  let component: BestiaireComponent;
  let fixture: ComponentFixture<BestiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestiaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

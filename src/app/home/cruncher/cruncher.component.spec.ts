import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CruncherComponent } from './cruncher.component';

describe('CruncherComponent', () => {
  let component: CruncherComponent;
  let fixture: ComponentFixture<CruncherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CruncherComponent]
    });
    fixture = TestBed.createComponent(CruncherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

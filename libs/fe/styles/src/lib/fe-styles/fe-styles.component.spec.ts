import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeStylesComponent } from './fe-styles.component';

describe('FeStylesComponent', () => {
  let component: FeStylesComponent;
  let fixture: ComponentFixture<FeStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeStylesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

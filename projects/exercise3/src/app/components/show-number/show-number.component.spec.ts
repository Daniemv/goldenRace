import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { DataService } from '../../core/services/data/data.service';

import { ShowNumberComponent } from './show-number.component';

describe('ShowNumberComponent', () => {
  let component: ShowNumberComponent;
  let fixture: ComponentFixture<ShowNumberComponent>;
  let dataService: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowNumberComponent],
      providers: [DataService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ShowNumberComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When ngOnInit', () => {
    it('should update showedNumber every second', fakeAsync(() => {
      spyOn(dataService, 'getNumbers')
      fixture.detectChanges();
      expect(component.showedNumber).toBeGreaterThanOrEqual(0); // first number always is 0
      tick(1000); // simulate 1 second
      expect(component.showedNumber).toBeGreaterThanOrEqual(0);
      expect(component.showedNumber).toBeLessThanOrEqual(10);
      tick(1000);
      expect(component.showedNumber).toBeGreaterThanOrEqual(0);
      expect(component.showedNumber).toBeLessThanOrEqual(10);
    }));
  });
});

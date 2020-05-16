import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovieManagerPage } from './movie-manager.page';

describe('MovieManagerPage', () => {
  let component: MovieManagerPage;
  let fixture: ComponentFixture<MovieManagerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieManagerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieManagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

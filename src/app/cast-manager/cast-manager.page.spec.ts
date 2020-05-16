import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CastManagerPage } from './cast-manager.page';

describe('CastManagerPage', () => {
  let component: CastManagerPage;
  let fixture: ComponentFixture<CastManagerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastManagerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CastManagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

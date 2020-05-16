import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActorManagerPage } from './actor-manager.page';

describe('ActorManagerPage', () => {
  let component: ActorManagerPage;
  let fixture: ComponentFixture<ActorManagerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorManagerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActorManagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

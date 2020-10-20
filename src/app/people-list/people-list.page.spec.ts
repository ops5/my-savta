import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PeopleListPage } from './people-list.page';

describe('PeopleListPage', () => {
  let component: PeopleListPage;
  let fixture: ComponentFixture<PeopleListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PeopleListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

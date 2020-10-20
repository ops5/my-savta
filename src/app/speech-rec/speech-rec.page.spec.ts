import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpeechRecPage } from './speech-rec.page';

describe('SpeechRecPage', () => {
  let component: SpeechRecPage;
  let fixture: ComponentFixture<SpeechRecPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeechRecPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpeechRecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

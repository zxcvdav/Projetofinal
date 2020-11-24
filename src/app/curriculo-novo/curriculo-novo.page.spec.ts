import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CurriculoNovoPage } from './curriculo-novo.page';

describe('CurriculoNovoPage', () => {
  let component: CurriculoNovoPage;
  let fixture: ComponentFixture<CurriculoNovoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurriculoNovoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CurriculoNovoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

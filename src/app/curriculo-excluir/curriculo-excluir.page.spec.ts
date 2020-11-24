import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CurriculoExcluirPage } from './curriculo-excluir.page';

describe('CurriculoExcluirPage', () => {
  let component: CurriculoExcluirPage;
  let fixture: ComponentFixture<CurriculoExcluirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurriculoExcluirPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CurriculoExcluirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

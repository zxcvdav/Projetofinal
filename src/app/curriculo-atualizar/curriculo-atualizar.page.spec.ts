import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CurriculoAtualizarPage } from './curriculo-atualizar.page';

describe('CurriculoAtualizarPage', () => {
  let component: CurriculoAtualizarPage;
  let fixture: ComponentFixture<CurriculoAtualizarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurriculoAtualizarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CurriculoAtualizarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

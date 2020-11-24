import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CurriculosPage } from "./curriculosPage";

describe('CurriculosPage', () => {
  let component: CurriculosPage;
  let fixture: ComponentFixture<CurriculosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurriculosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CurriculosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

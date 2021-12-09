import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoclienteComponent } from './listadocliente.component';

describe('ListadoclienteComponent', () => {
  let component: ListadoclienteComponent;
  let fixture: ComponentFixture<ListadoclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoclienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

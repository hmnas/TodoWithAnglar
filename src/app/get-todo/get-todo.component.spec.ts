import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTodoComponent } from './get-todo.component';

describe('GetTodoComponent', () => {
  let component: GetTodoComponent;
  let fixture: ComponentFixture<GetTodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetTodoComponent]
    });
    fixture = TestBed.createComponent(GetTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

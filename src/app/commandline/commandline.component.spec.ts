import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandlineComponent } from './commandline.component';

describe('CommandlineComponent', () => {
  let component: CommandlineComponent;
  let fixture: ComponentFixture<CommandlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

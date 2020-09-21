import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageBtnComponent } from './homepage-btn.component';

describe('HomepageBtnComponent', () => {
  let component: HomepageBtnComponent;
  let fixture: ComponentFixture<HomepageBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

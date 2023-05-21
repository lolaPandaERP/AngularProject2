import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentionlegalesComponent } from './mentionlegales.component';

describe('MentionlegalesComponent', () => {
  let component: MentionlegalesComponent;
  let fixture: ComponentFixture<MentionlegalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentionlegalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentionlegalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

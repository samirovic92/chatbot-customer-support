import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatStarterComponent } from './chat-starter.component';

describe('ChatStarterComponent', () => {
  let component: ChatStarterComponent;
  let fixture: ComponentFixture<ChatStarterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatStarterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatStarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

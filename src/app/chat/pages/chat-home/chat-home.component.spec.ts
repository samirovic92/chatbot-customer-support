import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ChatHomeComponent} from './chat-home.component';
import {provideNoopAnimations} from '@angular/platform-browser/animations';

describe('ChatHomeComponent', () => {
  let component: ChatHomeComponent;
  let fixture: ComponentFixture<ChatHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ChatHomeComponent
      ],
      providers: [
        provideNoopAnimations(),
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ChatHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

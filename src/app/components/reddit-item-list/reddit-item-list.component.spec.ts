import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditItemListComponent } from './reddit-item-list.component';

describe('RedditItemListComponent', () => {
  let component: RedditItemListComponent;
  let fixture: ComponentFixture<RedditItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedditItemListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedditItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

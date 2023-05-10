import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopTvPage } from './top-tv.page';

describe('TopTvPage', () => {
  let component: TopTvPage;
  let fixture: ComponentFixture<TopTvPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TopTvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

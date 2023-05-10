import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopularTvPage } from './popular-tv.page';

describe('PopularTvPage', () => {
  let component: PopularTvPage;
  let fixture: ComponentFixture<PopularTvPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PopularTvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopMoviePage } from './top-movie.page';

describe('TopMoviePage', () => {
  let component: TopMoviePage;
  let fixture: ComponentFixture<TopMoviePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TopMoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

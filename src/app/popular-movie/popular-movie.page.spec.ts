import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopularMoviePage } from './popular-movie.page';

describe('PopularMoviePage', () => {
  let component: PopularMoviePage;
  let fixture: ComponentFixture<PopularMoviePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PopularMoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

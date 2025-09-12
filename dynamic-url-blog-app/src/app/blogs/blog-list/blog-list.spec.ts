import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogList } from './blog-list';
import { provideRouter } from '@angular/router';
import { By } from '@angular/platform-browser';
import { BLOGS } from '../blog-data';

describe('BlogList Component', () => {
  let fixture: ComponentFixture<BlogList>;
  let component: BlogList;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogList],
      providers: [
        provideRouter([]) 
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BlogList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render blog cards for each blog', () => {
    const cards = fixture.debugElement.queryAll(By.css('.card'));
    expect(cards.length).toBe(BLOGS.length);
  });

  it('should display the correct blog title and description', () => {
    const card = fixture.debugElement.query(By.css('.card'));
    const title = card.query(By.css('h2')).nativeElement.textContent;
    const desc = card.query(By.css('p')).nativeElement.textContent;

    expect(title).toContain(BLOGS[0].title);
    expect(desc).toContain(BLOGS[0].description.slice(0, 60));
  });

  
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { BlogDetail } from './blog-detail';
import { BLOGS } from '../blog-data';
import { RouterTestingModule } from '@angular/router/testing';

describe('BlogDetail Component', () => {
  let component: BlogDetail;
  let fixture: ComponentFixture<BlogDetail>;

  function setupTest(id: string | null) {
    TestBed.configureTestingModule({
      imports: [BlogDetail, RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => (key === 'id' ? id : null)
              }
            }
          }
        }
      ]
    });
    fixture = TestBed.createComponent(BlogDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }

  it('should create component', () => {
    setupTest('1');
    expect(component).toBeTruthy();
  });

  it('should load blog when id exists', () => {
    const expectedBlog = BLOGS[0]; // first blog has id=1
    setupTest(expectedBlog.id.toString());

    expect(component.blog).toEqual(expectedBlog);

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain(expectedBlog.title);
  });

  it('should show "Blog not found" when id does not exist', () => {
    setupTest('999'); // non-existent id
    expect(component.blog).toBeUndefined();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Blog not found');
  });
});

import { Injectable } from '@angular/core';
import { interval, map, startWith, Observable, Subject, merge } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Quote {
  private quotes = [
    'Simplicity is the soul of efficiency. — Austin Freeman',
    'First, solve the problem. Then, write the code. — John Johnson',
    'Code never lies, comments sometimes do. — Ron Jeffries',
    'Optimism is an occupational hazard of programming. — Kent Beck',
    'Make it work, make it right, make it fast. — Kent Beck',
    'Programs must be written for people to read, and only incidentally for machines to execute. — Harold Abelson',
    'Talk is cheap. Show me the code. — Linus Torvalds',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand. — Martin Fowler',
    'Premature optimization is the root of all evil. — Donald Knuth',
    'If debugging is the process of removing bugs, then programming must be the process of putting them in. — Edsger Dijkstra',
    'Experience is the name everyone gives to their mistakes. — Oscar Wilde',
    'Walking on water and developing software from a specification are easy if both are frozen. — Edward V. Berard',
    'Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code. — Dan Salomon',
    'Deleted code is debugged code. — Jeff Sickel',
    'The best way to get a project done faster is to start sooner. — Jim Highsmith',
  ];

  private next$ = new Subject<void>();

  public randomQuote$(): Observable<string> {
    const timer$ = interval(6000).pipe(startWith(0));
    return merge(timer$, this.next$).pipe(map(() => this.random()));
  }

  triggerNext() {
    this.next$.next();
  }

  private random() {
    const i = Math.floor(Math.random() * this.quotes.length);
    return this.quotes[i];
  }
}

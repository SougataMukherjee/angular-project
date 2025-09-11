import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Quote as Q } from '../../services/quote';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="card">
      <h3>Random Quote</h3>
      <p class="small" *ngIf="quote$ | async as q; else loading">{{ q }}</p>
      <ng-template #loading><p class="small">Loading…</p></ng-template>

      <div style="margin-top:12px;">
        <button class="btn" (click)="next()">Next</button>
      </div>
    </section>
  `
})
export class Quote implements OnInit {
  quote$!: Observable<string>;

  constructor(private qs: Q) {}

  ngOnInit() {
    this.quote$ = this.qs.randomQuote$();
  }

  next() { this.qs.triggerNext(); }
}

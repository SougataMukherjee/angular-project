# Quick Guide

### create a new app

```bash
ng new your-app --standalone --routing --style=scss
```

### run the dev server

```bash
ng serve --open
```

### run unit test

```bash
ng test
```

### generate a new component

```bash
ng g c components/c-name
```

### generate a new service

```bash
ng g s services/s-name
```

# Quick Recap

1. SSR vs Client

SSR (Server Side Rendering): HTML is rendered on the server (Angular Universal). Faster first paint.
Client: Rendering happens in the browser after JS loads (default Angular).

2. Templates vs TemplateUrl

template lets you define inline HTML, templateUrl loads HTML from a separate file.

```bash
@Component({
  selector:'app-demo',
  template:`<h1>Hello</h1>`
})

```

3. Decorator & Selector & Standalone

Decorator adds metadata to classes.
Selector defines the custom HTML tag for the component.
standalone are create components without modules. They're not default

```bash
@Component({
    selector:'app-demo',
    standalone:true,
    template:`<h2>Demo</h2>`
    })

```

4. Directives (Types)

Classes that add behavior to elements.
Structural: change DOM layout (*ngIf, *ngFor)
Attribute: change appearance/behavior ([style], [class])

```bash
<h2 *ngIf="cond">show</h2>
<li *ngFor="let x of users">{{x.name}}</li>

```

5. Condition and Loop

```bash
@if(cond){<div>..</div>} @else if{<div>Else</div>}

@switch(color){
  @case('red'){<h1>Red</h1>}
  @default{<h1>Default</h1>}
}

@for(user of users; track user.name; let i=$index){
  @if($first){<h2>{{i+1}} first user {{user.name}}</h2>}
  @empty{<h2>No user found</h2>}
}

```

6. Two-Way Binding
   Use [(ngModel)] to bind both ways

```bash
<input [(ngModel)]="username">

```

7. Dynamic Style
   Bind style or class properties dynamically.

```bash
<h2 [style.backgroundColor]="cond ? 'lightgreen' : 'pink'">Dynamic</h2>

```

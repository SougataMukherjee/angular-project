import { AbstractControl, ValidationErrors } from '@angular/forms';

/**
 * A set of email patterns (examples):
 *  - basic RFC-ish pattern
 *  - stricter corporate (no subdomains)
 *  - disposable email block (simple)
 *
 * Keep patterns small & readable — expand as needed.
 */
export const EMAIL_PATTERNS: RegExp[] = [
  // Basic permissive email regex (good general purpose)
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,

  // Stricter: allow only alphanumeric + dots for local part and common domains
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,

  // Example: block disposable domains (very small sample list)
  // We'll test that the domain is NOT in this disposable list.
];

const DISPOSABLE_DOMAINS = [
  'mailinator.com',
  '10minutemail.com',
  'tempmail.com'
];

/**
 * Custom email validator: ensure email matches at least one pattern
 * AND is not using a blocked disposable domain.
 */
export function multiPatternEmailValidator(control: AbstractControl): ValidationErrors | null {
  const value = (control.value ?? '').trim();
  if (!value) return { required: true };

  const matchesPattern = EMAIL_PATTERNS.some((re) => re.test(value));
  if (!matchesPattern) {
    return { emailPattern: 'Email does not match allowed patterns' };
  }

  const domain = value.split('@')[1]?.toLowerCase();
  if (domain && DISPOSABLE_DOMAINS.includes(domain)) {
    return { disposableEmail: 'Disposable email domains are not allowed' };
  }

  return null;
}

import { trigger, state, transition, style, animate } from '@angular/animations';

export const itemAnim = trigger('item', [
  state('in', style({ 'border-left-width': '8px' })),
  state('out', style({ 'border-left-width': '3px' })),
  transition('out => in', animate('300ms ease-in')),
  transition('in => out', animate('300ms ease-out'))
]);


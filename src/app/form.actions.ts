import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const FormActions = createActionGroup({
  source: 'Form',
  events: {
    'Load Forms': emptyProps(),
    
    
  }
});

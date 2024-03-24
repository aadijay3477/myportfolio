import { AppModule } from './app/app.module'; // Make sure this import is present
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

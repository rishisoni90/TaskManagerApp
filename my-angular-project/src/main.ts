import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';  // Import the AppModule you just created

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

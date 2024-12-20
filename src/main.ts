import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import SmartechPushCordova, { SmartechPushPlugin } from 'smartech-push-cordova';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

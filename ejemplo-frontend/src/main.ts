import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Router } from '@angular/router';

bootstrapApplication(App, appConfig)
  .then((appRef) => {
    const router = appRef.injector.get(Router);
    const redirect = sessionStorage.getItem('redirectPath');
    if (redirect) {
      sessionStorage.removeItem('redirectPath');
      router.navigateByUrl(redirect, { replaceUrl: true });
    }
  })
  .catch((err) => console.error(err));

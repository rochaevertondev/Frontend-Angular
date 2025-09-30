import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...appConfig.providers, // mantém os providers que já tinha no appConfig
    provideAnimations()     // adiciona o suporte a animações
  ]
})
.catch((err) => console.error(err));

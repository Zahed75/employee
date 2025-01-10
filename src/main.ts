import { bootstrapApplication } from '@angular/platform-browser';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import {tokenInterceptor} from './app/interceptor/token.interceptor';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([tokenInterceptor]))
  ],
}).catch((err) => console.error(err));

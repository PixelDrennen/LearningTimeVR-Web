import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderbarComponent } from './headerbar/headerbar.component';
import { FilebuttonComponent } from './filebutton/filebutton.component';
import { LoginComponent } from './pages/login/login.component';
import { AccountComponent } from './pages/account/account.component';
import { environment } from 'environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAnalytics, getAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideFunctions, getFunctions } from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { providePerformance, getPerformance } from '@angular/fire/performance';
import { provideStorage, getStorage } from '@angular/fire/storage';

import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AuthService } from './services/auth.service';

import { MatDialogModule } from '@angular/material/dialog';
import { DialogModule } from '@angular/cdk/dialog';
import { ClassesComponent } from './pages/classes/classes.component';
import { ClassComponent } from './lessonplans/elements/class/class.component';
import { LessonModuleComponent } from './lessonplans/elements/lesson-module/lesson-module.component';
import { ContentClusterComponent } from './lessonplans/elements/content-cluster/content-cluster.component';
import { ContentComponent } from './lessonplans/elements/content/content.component';
import { CreateComponent } from './lessonplans/pages/create/create.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkVirtualScrollViewport } from "@angular/cdk/scrolling";
import { LessonModuleListComponentComponent } from './dataComponents/lesson-module-list-component/lesson-module-list-component.component';
import { LessonmoduleModalComponent } from './modals/lessonmodule-modal/lessonmodule-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    HeaderbarComponent,
    FilebuttonComponent,
    LoginComponent,
    AccountComponent,
    ClassesComponent,
    ClassComponent,
    LessonModuleComponent,
    ContentClusterComponent,
    ContentComponent,
    CreateComponent,
    LessonModuleListComponentComponent,
    LessonmoduleModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DialogModule,
    ScrollingModule,
    CdkVirtualScrollViewport,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideStorage(() => getStorage()),
    FormsModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    ScreenTrackingService, UserTrackingService, AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

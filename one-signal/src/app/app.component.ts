import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {TabsPage} from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      // OneSignal Code start:
      // Enable to debug issues:
      /*
      window["plugins"].OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});

      const notificationOpenedCallback = (jsonData)=> {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
      };


      window["plugins"].OneSignal
        .startInit("bb8c0b30-38d4-4a9b-a961-8c88e1ca6896", "508911833017")
        .handleNotificationOpened(notificationOpenedCallback)
        .endInit();
        */

    });
  }
}

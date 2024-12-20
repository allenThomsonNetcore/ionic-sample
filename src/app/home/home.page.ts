import { Component, OnInit } from '@angular/core';
import { ActionPerformed, PushNotificationSchema, PushNotifications, Token } from '@capacitor/push-notifications';
import SmartechPushCordova from 'smartech-push-cordova';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  constructor() {}
  ngOnInit(): void {
    console.log("new app is comign ")
    PushNotifications.requestPermissions().then((result) => {
      if (result.receive === 'granted') {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
      }
    });

    // On success, we should be able to receive notifications
    PushNotifications.addListener('registration', (token: Token) => {
      SmartechPushCordova.setDevicePushToken(token.value);
      alert('Push registration success, token: ' + token.value);
    });
    PushNotifications.addListener('registrationError', (error: any) => {
      alert('Error on registration: ' + JSON.stringify(error));
    });

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener('pushNotificationReceived', (notification: PushNotificationSchema) => {
      SmartechPushCordova.handlePushNotification(notification)
      
      alert('Push received: ' + JSON.stringify(Notification));
     
    

    });
    throw new Error('Method not implemented.');
  }


//   async registerPushNotification(){
//     let permStatus = await PushNotifications.checkPermissions();
//     alert(JSON.stringify(permStatus))
//     if(permStatus.receive=='prompt'){
//       permStatus = await PushNotifications.requestPermissions();
//     }
//     if(permStatus.receive!=='granted'){
//       alert('User Denied permissions!');

//     }
//     if(permStatus.receive==='granted'){
//       try{
//         await PushNotifications.register();

//       }
//       catch(e){
//         alert(JSON.stringify(e))
//       }
//     }
//   }
//   getDeliveredNotifications=async()=>{
// const notificationList = await PushNotifications.getDeliveredNotifications
// alert('delivered notifications'+JSON.stringify(notificationList));
//   }

}

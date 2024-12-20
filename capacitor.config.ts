import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'capApp',
  webDir: 'www',
  server: {
    androidScheme:'https'
  },
  plugins:{
    PushNotifications:{
    presentationOptions:["badge","sound","alert"]
  },
},
};

export default config;

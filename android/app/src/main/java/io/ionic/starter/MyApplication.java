package io.ionic.starter;

import android.app.Application;

import com.netcore.android.logger.SMTDebugLevel;
import com.netcore.cordova.SmartechBasePlugin;

public class MyApplication extends Application {
  @Override
  public void onCreate() {
    super.onCreate();
    SmartechBasePlugin smartechBasePlugin = SmartechBasePlugin.getInstance();
    smartechBasePlugin.init(this);
    smartechBasePlugin.setDebugLevel(SMTDebugLevel.Level.DEBUG);
  }
}

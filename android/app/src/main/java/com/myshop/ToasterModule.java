package com.myshop;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import android.widget.Toast;

public class ToasterModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    public ToasterModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Override
    public String getName() {
        return "ToastModule";
    }

    @ReactMethod
    public void show(String message) {
        Toast.makeText(reactContext, message, Toast.LENGTH_SHORT).show();
    }
}


package com.myshop;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class DropdownModule extends ReactContextBaseJavaModule {
    public DropdownModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "DropdownModule";
    }

    @ReactMethod
    public void showDropdown(String title, String[] options, Boolean[] checkboxValues) {
        // Implement the code to show a dropdown with checkboxes
        // Emit events to send back the selected options and checkbox values
        WritableMap event = Arguments.createMap();
        event.putString("title", title);
        event.putArray("options", Arguments.fromArray(options));
        event.putArray("checkboxValues", Arguments.fromArray(checkboxValues));

        getReactApplicationContext()
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit("showDropdown", event);
    }
}



import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./features/navigation/Navigation";
import { Provider } from "react-redux";
import Store from "./store/Store";
import {
  ReactReduxFirebaseProvider,
  createFirebaseInstance,
} from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import firebase from "./config/fbConfig";
if (__DEV__) {
  import("./ReactotronConfig");
}
import Reactotron from "reactotron-react-native";
import { YellowBox } from "react-native";

//HIDE YELLOW BOX
YellowBox.ignoreWarnings(["Setting a timer"]);

// Reactotron.log("Awake !");

// PRELOAD ASSETS
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";

// ASSETS LOADER
function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts) {
  return fonts.map((font) => Font.loadAsync(font));
}

export default function App() {
  // INIT ASSETS LOAD STATE

  const [isReady, setisReady] = useState(false);

  const _loadAssetsAsync = async () => {
    const imageAssets = cacheImages([
      require("./assets/images/Rantapp-Slogo.png"),
      require("./assets/images/Rantapp-txt.png"),
      require("./assets/images/josh9.jpeg"),
    ]);

    const fontAssets = cacheFonts([
      { "OpenSans-Regular": require("./assets/font/OpenSans-Regular.ttf") },
      { "OpenSans-Bold": require("./assets/font/OpenSans-Bold.ttf") },
      { "OpenSans-Light": require("./assets/font/OpenSans-Light.ttf") },
    ]);

    await Promise.all([...imageAssets, ...fontAssets]);
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={_loadAssetsAsync}
        onFinish={() => setisReady(true)}
        onError={console.warn}
      />
    );
  }

  // react-redux-firebase config
  const rrfConfig = {
    userProfile: "users",
    enableClaims: true,
    useFirestoreForProfile: true,
  };

  const rrfProps = {
    // React-redux-firebase props
    firebase,
    config: rrfConfig,
    dispatch: Store.dispatch,
    createFirestoreInstance,
  };

  return (
    <Provider store={Store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

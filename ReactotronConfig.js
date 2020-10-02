import Reactotron from "reactotron-react-native";
// import { reactotronRedux } from 'reactotron-redux'

Reactotron.configure({ host: "192.168.3.10" }) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!

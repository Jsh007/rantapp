import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";

// General utils
import LottieView from "lottie-react-native";
import React, { useState } from "react";
import { View } from "react-native";
import { Chip } from "react-native-paper";
import { useSelector } from "react-redux";
// Auth Stuffs
import { isEmpty, isLoaded } from "react-redux-firebase";
import AboutApp from "../app-settings/AboutApp";
import GroupCheckPoint from "../auth/group/GroupCheckPoint";
import SubscribeCheckPoint from "../auth/subscribe/SubscribeCheckPoint";
import PasswordReset from "../auth/user/PasswordReset";
import SignIn from "../auth/user/SignIn";
import SignOut from "../auth/user/SignOut";
import SignUp from "../auth/user/SignUp";
import ChatIndex from "../chat/ChatIndex";
import RantButton from "../common/custom/buttons/Button";
import Container from "../common/custom/containers/Container";
// STYLED COMPONENTS
import ImageBackgroundcard from "../common/custom/containers/ImageBackgroundCard";
import { Label } from "../common/custom/text/text";
// import { styles } from "../common/style/styles";
import { styles } from "../common/style/styles";
import {
  btnShadow,
  LogoS,
  NavBurger,
  topTabsOptions,
} from "../common/variables";
import ModPendingPosts from "../mod/ModPendingPosts";
import ModPendingStatus from "../mod/ModPendingStatus";
import ModPendingUsers from "../mod/ModPendingUsers";
import PaymentForm from "../payment/PaymentForm";
import DefaultPostFeed from "../posts/DefaultPostFeed";
import PostDetails from "../posts/PostDetails";
import PremiumPostFeed from "../posts/PremiumPostFeed";
import UserEditCommentsList from "../users/activity/UserEditCommentsList";
import UserEditPostsList from "../users/activity/UserEditPostsList";
import UserEditStalkersList from "../users/activity/UserEditStalkersList";
import UserEditStalkingList from "../users/activity/UserEditStalkingList";
import Alerts from "../users/alert/Alerts";
import UserEditGallery from "../users/editProfile/UserEditGallery";
import UserEditProfile from "../users/editProfile/UserEditProfile";
import UserEditStatus from "../users/status/UserEditStatus";
import ShowUserActiveSubscription from "../users/subscription/ShowUserActiveSubscription";
import ShowUserSubscriptionHistory from "../users/subscription/ShowUserSubscriptionHistory";
import ShowUserTransactions from "../users/subscription/ShowUserTransactions";
import UserDeleteAccount from "../users/UserDeleteAccount";
import UserProfile from "../users/UserProfile";

// LOTTIE LOADER
export function AuthLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth))
    return (
      <View style={styles.container}>
        <View style={styles.loader}>
          <LottieView
            source={require("../../assets/loading-dots.json")}
            autoPlay
            loop
          ></LottieView>
        </View>
      </View>
    );
  return children;
}

const Navigation = () => {
  // const navigationState = useNavigationState();
  // Reactotron.log(navigationState);
  // Reactotron.display({
  //   name: "NAVIGATION STATE",
  //   preview: "Who's there?",
  //   value: navigationState,
  // });

  // Auth data
  const profile = useSelector((state) => state.firebase.profile);
  // MAIN DEFAULT NAVIGATION COMPONENT
  const [modStatus, setmodStatus] = useState(true); //TODO: Set modStatus as a firebase custom claim and monitor it to grant mod access. same for admin(userType), subscription
  const auth = useSelector((state) => state.firebase.auth);

  // Subscription Stack
  const subscriptionStack = createStackNavigator();
  const subscriptionStackScreens = () => (
    <subscriptionStack.Navigator>
      <subscriptionStack.Screen
        name="SubscribeNotice"
        component={SubscribeCheckPoint}
      />
      <subscriptionStack.Screen name="PaymentForm" component={PaymentForm} />
    </subscriptionStack.Navigator>
  );

  // appaccountStackNav - See above for important instructions
  const appaccountStackNav = createStackNavigator();
  const appaccountStackNavScreens = () => (
    <appaccountStackNav.Navigator
      screenOptions={({ navigation, route }) => ({
        headerTitle: "",
        headerLeft: (props) => <NavBurger {...props} navigation={navigation} />,
        headerRight: (props) => <LogoS {...props} />,
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
      })}
    >
      <appaccountStackNav.Screen
        name="DeleteAccount"
        component={UserDeleteAccount}
      />
    </appaccountStackNav.Navigator>
  );
  // appSignoutStackNav - See above for important instructions
  const appSignoutStackNav = createStackNavigator();
  const appSignoutStackNavScreens = () => (
    <appSignoutStackNav.Navigator
      screenOptions={({ navigation, route }) => ({
        headerTitle: "",
        headerLeft: (props) => <NavBurger {...props} navigation={navigation} />,
        headerRight: (props) => <LogoS {...props} />,
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
      })}
    >
      <appSignoutStackNav.Screen name="Signout" component={SignOut} />
    </appSignoutStackNav.Navigator>
  );
  // AppinfoStack - See above for important instructions
  const appinfoStackNav = createStackNavigator();
  const appinfoStackNavScreens = () => (
    <appinfoStackNav.Navigator
      screenOptions={({ navigation, route }) => ({
        headerTitle: "",
        headerLeft: (props) => <NavBurger {...props} navigation={navigation} />,
        headerRight: (props) => <LogoS {...props} />,
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
      })}
    >
      <appinfoStackNav.Screen name="About" component={AboutApp} />
    </appinfoStackNav.Navigator>
  );
  // PROFILESTACKNAV - See above for important instructions
  const profileStackNav = createStackNavigator();
  const profileStackNavScreens = () => (
    <profileStackNav.Navigator
      screenOptions={({ navigation, route }) => ({
        headerTitle: "",
        headerLeft: (props) => <NavBurger {...props} navigation={navigation} />,
        headerRight: (props) => <LogoS {...props} />,
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
      })}
    >
      <profileStackNav.Screen name="Profile" component={UserProfile} />
    </profileStackNav.Navigator>
  );

  //POSTFEED NAVS AND THEIR SCREENS
  const rantBaseStackNav = createStackNavigator();
  const rantBaseStackNavScreens = () => (
    <rantBaseStackNav.Navigator
      screenOptions={({ navigation, route }) => ({
        headerTitle: "",
        headerLeft: (props) => <NavBurger {...props} navigation={navigation} />,
        headerRight: (props) => <LogoS {...props} />,
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
      })}
    >
      <rantBaseStackNav.Screen name="RantBase" component={DefaultPostFeed} />
      <rantBaseStackNav.Screen name="RantPostDetail" component={PostDetails} />
    </rantBaseStackNav.Navigator>
  );

  const groupFeedStackNav = createStackNavigator();
  const groupFeedStackNavScreens = () => (
    <groupFeedStackNav.Navigator
      screenOptions={({ navigation, route }) => ({
        headerTitle: "",
        headerLeft: (props) => <NavBurger {...props} navigation={navigation} />,
        headerRight: (props) => <LogoS {...props} />,
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
      })}
    >
      <groupFeedStackNav.Screen name="GroupFeed" component={PremiumPostFeed} />
      <groupFeedStackNav.Screen
        name="GroupCheckPoint"
        component={GroupCheckPoint}
      />
      <groupFeedStackNav.Screen
        name="GroupPostDetail"
        component={PostDetails}
      />
    </groupFeedStackNav.Navigator>
  );

  const chatFeedStackNav = createStackNavigator();
  const chatFeedStackNavScreens = () => (
    <chatFeedStackNav.Navigator
      screenOptions={({ navigation, route }) => ({
        headerTitle: "",
        headerLeft: (props) => <NavBurger {...props} navigation={navigation} />,
        headerRight: (props) => <LogoS {...props} />,
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
      })}
    >
      <chatFeedStackNav.Screen name="ChatFeed" component={ChatIndex} />
    </chatFeedStackNav.Navigator>
  );

  const alertFeedStackNav = createStackNavigator();
  const alertFeedStackNavScreens = () => (
    <alertFeedStackNav.Navigator
      screenOptions={({ navigation, route }) => ({
        headerTitle: "",
        headerLeft: (props) => <NavBurger {...props} navigation={navigation} />,
        headerRight: (props) => <LogoS {...props} />,
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
      })}
    >
      <alertFeedStackNav.Screen name="AlertsFeed" component={Alerts} />
    </alertFeedStackNav.Navigator>
  );

  // MAIN BOTTOMTABS NAV
  const feedBottomNav = createMaterialBottomTabNavigator();
  const feedBottomNavScreens = () => (
    <feedBottomNav.Navigator
      activeColor="#EF894A"
      inactiveColor="#3c3c3d"
      barStyle={{ backgroundColor: "#ECEBEB", height: 60 }}
      shifting="true"
      labeled="true"
    >
      <feedBottomNav.Screen
        name="RantFeed"
        children={rantBaseStackNavScreens}
        options={{
          tabBarLabel: "Rant Feed",
          tabBarIcon: ({ color = "#383839" }) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={30}
            />
          ),
        }}
      />
      <feedBottomNav.Screen
        name="GroupFeed"
        children={groupFeedStackNavScreens}
        barStyle={{ backgroundColor: "#694fad" }}
        options={{
          tabBarLabel: "Group Feed",
          tabBarBadge: "15",
          tabBarIcon: ({ color = "#383839" }) => (
            <MaterialCommunityIcons
              name="file-document-box-multiple-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <feedBottomNav.Screen
        name="ChatFeed"
        children={chatFeedStackNavScreens}
        options={{
          tabBarLabel: "Chat Feed",
          tabBarBadge: "15",
          tabBarBadgeColor: "red",
          tabBarIcon: ({ color = "#383839" }) => (
            <Ionicons name="ios-chatbubbles" size={30} color={color} />
          ),
        }}
      />
      <feedBottomNav.Screen
        name="AlertsFeed"
        children={alertFeedStackNavScreens}
        options={{
          tabBarLabel: "Notifications",
          tabBarBadge: "15",
          tabBarIcon: ({ color = "#383839" }) => (
            <MaterialCommunityIcons
              name="bell-outline"
              color={color}
              size={30}
            />
          ),
        }}
      />
    </feedBottomNav.Navigator>
  );

  // USER SETTINGS SPECIFIC NAVS

  /* USER SETTINGS SCREENS/CHILDREN */
  // Begining of UserActivitywrapper stack

  const userActivityWrapperStack = createStackNavigator();
  const userActivityWrapperStackScreens = () => (
    <userActivityWrapperStack.Navigator
      screenOptions={({ navigation, route }) => ({
        headerTitle: "",
        headerLeft: (props) => <NavBurger {...props} navigation={navigation} />,
        headerRight: (props) => <LogoS {...props} />,
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
      })}
    >
      <userActivityWrapperStack.Screen
        name="Activity"
        children={userActivityTopTabScreens}
      />
    </userActivityWrapperStack.Navigator>
  );

  // End of userActivityWrapperStack
  const userActivityTopTab = createMaterialTopTabNavigator();
  const userActivityTopTabScreens = () => (
    <userActivityTopTab.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 13, fontWeight: "bold", textAlign: "center" },
        activeTintColor: "#fff",
        inactiveTintColor: "#3c3c3d",
        tabStyle: {
          width: 100,
          paddingVertical: 0,
        },
        indicatorStyle: {
          backgroundColor: "#F17122",
          marginRight: 2,
          marginLeft: 2,
          borderRadius: 8,
          height: 60,
        },
        style: {
          // backgroundColor: "powderblue",
          // marginTop: 50,
          height: 60,
        },
      }}
    >
      <userActivityTopTab.Screen name="Posts" component={UserEditPostsList} />
      <userActivityTopTab.Screen
        name="Comment"
        component={UserEditCommentsList}
      />
      <userActivityTopTab.Screen
        name="Stalkers"
        component={UserEditStalkersList}
      />
      <userActivityTopTab.Screen
        name="Stalking"
        component={UserEditStalkingList}
      />
    </userActivityTopTab.Navigator>
  );
  // Begining of UserProfile wrapper

  const userProfileEditWrapperStack = createStackNavigator();
  const userProfileEditWrapperStackScreens = () => (
    <userProfileEditWrapperStack.Navigator
      screenOptions={({ navigation, route }) => ({
        headerTitle: "",
        headerLeft: (props) => <NavBurger {...props} navigation={navigation} />,
        headerRight: (props) => <LogoS {...props} />,
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
      })}
    >
      <userProfileEditWrapperStack.Screen
        name="EditProfile"
        children={userProfileEditTopTabScreens}
      />
    </userProfileEditWrapperStack.Navigator>
  );

  // End of userProfileEditWrapperStack

  const userProfileEditTopTab = createMaterialTopTabNavigator();
  const userProfileEditTopTabScreens = () => (
    <userProfileEditTopTab.Navigator tabBarOptions={topTabsOptions}>
      <userProfileEditTopTab.Screen
        name="Gallery"
        component={UserEditGallery}
      />
      <userProfileEditTopTab.Screen
        name="Profile"
        component={UserEditProfile}
      />
    </userProfileEditTopTab.Navigator>
  );

  // EditStatus stack
  const userStatusStack = createStackNavigator();
  const userStatusStackScreens = () => (
    <userStatusStack.Navigator
      screenOptions={({ navigation, route }) => ({
        headerTitle: "",
        headerLeft: (props) => <NavBurger {...props} navigation={navigation} />,
        headerRight: (props) => <LogoS {...props} />,
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
      })}
    >
      <userStatusStack.Screen name="EditStatus" component={UserEditStatus} />
    </userStatusStack.Navigator>
  );

  // Beginging of userSubscriptionWrapper
  const userSubscriptionWrapperStack = createStackNavigator();
  const userSubscriptionWrapperStackScreens = () => (
    <userSubscriptionWrapperStack.Navigator
      screenOptions={({ navigation, route }) => ({
        headerTitle: "",
        headerLeft: (props) => <NavBurger {...props} navigation={navigation} />,
        headerRight: (props) => <LogoS {...props} />,
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
      })}
    >
      <userSubscriptionWrapperStack.Screen
        name="Subscription"
        children={userSubscriptionTopTabScreens}
      />
    </userSubscriptionWrapperStack.Navigator>
  );

  // End of userSubscriptionWrapperStack

  const userSubscriptionTopTab = createMaterialTopTabNavigator();
  const userSubscriptionTopTabScreens = () => (
    <userSubscriptionTopTab.Navigator tabBarOptions={topTabsOptions}>
      <userSubscriptionTopTab.Screen
        name="Active"
        component={ShowUserActiveSubscription}
      />
      <userSubscriptionTopTab.Screen
        name="History"
        component={ShowUserSubscriptionHistory}
      />
      <userSubscriptionTopTab.Screen
        name="Transactions"
        component={ShowUserTransactions}
      />
    </userSubscriptionTopTab.Navigator>
  );

  // MOD SETTINGS SPECIFIC NAVS

  // MOD TOP TABS
  // Begining of WorkDesk wrapper
  const modWorkDeskWrapperStack = createStackNavigator();
  const modWorkDeskWrapperStackScreens = () => (
    <modWorkDeskWrapperStack.Navigator
      screenOptions={({ navigation, route }) => ({
        headerTitle: "",
        headerLeft: (props) => <NavBurger {...props} navigation={navigation} />,
        headerRight: (props) => <LogoS {...props} />,
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
      })}
    >
      <modWorkDeskWrapperStack.Screen
        name="WorkDesk"
        children={modWorkDeskTopTabScreens}
      />
    </modWorkDeskWrapperStack.Navigator>
  );

  // End of modWorkDeskWrapperStack

  const modWorkDeskTopTab = createMaterialTopTabNavigator();
  const modWorkDeskTopTabScreens = () => (
    <modWorkDeskTopTab.Navigator tabBarOptions={topTabsOptions}>
      <modWorkDeskTopTab.Screen name="Posts" component={ModPendingPosts} />
      <modWorkDeskTopTab.Screen name="Status" component={ModPendingStatus} />
      <modWorkDeskTopTab.Screen name="Users" component={ModPendingUsers} />
    </modWorkDeskTopTab.Navigator>
  );

  // CUSTOM SETTINGS DRAWER with back button appended
  function CustomDrawerContentBtn(props) {
    return (
      <DrawerContentScrollView {...props}>
        <Label
          labelTopPadding={0}
          size={"22px"}
          weight={"bold"}
          color={"#000"}
          labelBottomMargin={"40px"}
          textCase={"uppercase"}
        >
          Settings
        </Label>
        <DrawerItemList {...props} />
        <Container
          backgroundColor={"#fff"}
          width={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <RantButton
            title="Back"
            onPress={() => {
              const parentNav = props.navigation.dangerouslyGetParent();
              parentNav.openDrawer();
            }}
            backgroundColor={"#303030"}
            width={"80%"}
            height={"50px"}
            borderRadius={"60px"}
            textColor={"#fff"}
            fontWeight={"bold"}
            fontSize={"16px"}
            customStyle={btnShadow}
            buttonMarginTop={"80px"}
            buttonPaddingTop={"10px"}
            buttonPaddingBottom={"10px"}
          />
        </Container>
      </DrawerContentScrollView>
    );
  }

  // CUSTOM SETTINGS DRAWER with profile picture and name prepended
  function CustomDrawerContentPimg(props) {
    return (
      <DrawerContentScrollView {...props}>
        {!isEmpty(profile) && (
          <Container width={"80%"} containerMarginBottom={"30px"}>
            <ImageBackgroundcard
              containerMarginBottom={"10px"}
              width={"100px"}
              height={"100px"}
              source={require("../../assets/images/josh9.jpeg")}
              style={{
                borderRadius: 60,
              }}
              imageStyle={{
                borderRadius: 60,
                resizeMode: "cover",
              }}
            />
            <Chip
              icon="account"
              style={{
                marginBottom: 5,
                backgroundColor: "#000",
              }}
              textStyle={{
                color: "#FDB026",
              }}
            >
              <Label
                color={"#fff"}
                textCase={"capitalize"}
                weight={"normal"}
                labelMargin={"0px"}
              >
                {profile.lastName} {profile.firstName}
              </Label>
            </Chip>
            <Container
              containerPaddingLeft={"10px"}
              containerPaddingRight={"10px"}
              containerPaddingBottom={"10px"}
              flexDirection={"row"}
              radius={"30px"}
            >
              <MaterialCommunityIcons
                name="account-badge"
                size={24}
                color="#fff"
              />
              {profile.modStatus && (
                <Label
                  color={"#fff"}
                  textCase={"capitalize"}
                  weight={"normal"}
                  labelMargin={"0px"}
                >
                  Moderator
                </Label>
              )}
            </Container>
          </Container>
        )}
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  }

  /* SETTINGS DRAWERS */

  //USER SETTINGS DRAWER
  const userSettingsDrawer = createDrawerNavigator();
  const userSettingsDrawerScreens = () => (
    <userSettingsDrawer.Navigator
      drawerContent={(props) => <CustomDrawerContentBtn {...props} />}
      drawerContentOptions={{
        activeBackgroundColor: "#F17122",
        activeTintColor: "#fff",
        itemStyle: {
          marginVertical: 10,
          borderWidth: 1,
          borderColor: "#3c3c3d",
        },
      }}
    >
      <userSettingsDrawer.screen
        name="Activity"
        children={userActivityTopTabScreens}
      />
      <userSettingsDrawer.Screen
        name="EditProfile"
        children={userProfileEditTopTabScreens}
      />
      <userSettingsDrawer.Screen
        name="StatusUpdate"
        children={userStatusStackScreens}
      />
      <userSettingsDrawer.Screen
        name="Subscription"
        children={userSubscriptionTopTabScreens}
      />
    </userSettingsDrawer.Navigator>
  );

  //MOD SETTINGS DRAWER
  const modSettingsDrawer = createDrawerNavigator();
  const modSettingsDrawerScreens = () => (
    <modSettingsDrawer.Navigator
      drawerContent={(props) => <CustomDrawerContentBtn {...props} />}
      drawerContentOptions={{
        activeBackgroundColor: "#F17122",
        inactiveBackgroundColor: "#f1f1f1",
        activeTintColor: "#fff",
        marginTop: 100,
        itemStyle: {
          marginVertical: 10,
          borderColor: "#3c3c3d",
        },
        labelStyle: {
          fontSize: 17,
          fontWeight: "bold",
        },
      }}
    >
      <modSettingsDrawer.Screen
        name="Activity"
        children={userActivityWrapperStackScreens}
        options={{
          drawerIcon: ({ size, color }) => {
            return (
              <MaterialCommunityIcons
                name="account-clock"
                size={34}
                color={color}
              />
            );
          },
        }}
      />
      <modSettingsDrawer.Screen
        name="EditProfile"
        children={userProfileEditWrapperStackScreens}
        options={{
          drawerIcon: ({ size, color }) => {
            return (
              <MaterialCommunityIcons
                name="account-edit"
                size={34}
                color={color}
              />
            );
          },
        }}
      />
      <modSettingsDrawer.Screen
        name="StatusUpdate"
        children={userStatusStackScreens}
        options={{
          drawerIcon: ({ size, color }) => {
            return (
              <MaterialCommunityIcons
                name="account-network"
                size={34}
                color={color}
              />
            );
          },
        }}
      />
      <modSettingsDrawer.Screen
        name="WorkDesk"
        children={modWorkDeskWrapperStackScreens}
        options={{
          drawerIcon: ({ size, color }) => {
            return (
              <MaterialCommunityIcons
                name="check-network"
                size={34}
                color={color}
              />
            );
          },
        }}
      />
      <modSettingsDrawer.Screen
        name="Subscription"
        children={userSubscriptionWrapperStackScreens}
        options={{
          drawerIcon: ({ size, color }) => {
            return (
              <MaterialCommunityIcons
                name="account-multiple-plus"
                size={34}
                color={color}
              />
            );
          },
        }}
      />
    </modSettingsDrawer.Navigator>
  );

  //ROOT APPDRAWER
  const appDrawerNav = createDrawerNavigator();
  //ROOTAUTHSTACK NAV
  const userAuthNav = createStackNavigator();

  // ROOT SIDEDARWER
  const appDrawerNavScreens = () => (
    <appDrawerNav.Navigator
      drawerContent={(props) => <CustomDrawerContentPimg {...props} />}
      drawerContentOptions={{
        activeBackgroundColor: "#EA8D54",
        activeTintColor: "#fff",
        inactiveTintColor: "#fff",
        marginTop: 50,
        itemStyle: {
          marginVertical: 10,
          borderColor: "#DB7D42",
        },
        labelStyle: {
          fontSize: 17,
          fontWeight: "bold",
        },
      }}
      drawerStyle={{
        backgroundColor: "#F17122",
      }}
    >
      <appDrawerNav.Screen
        name="Feed"
        children={feedBottomNavScreens}
        options={{
          drawerIcon: ({ size, color }) => {
            return (
              <MaterialCommunityIcons name="text" size={34} color={color} />
            );
          },
        }}
      />
      <appDrawerNav.Screen
        name="Profile"
        children={profileStackNavScreens}
        options={{
          drawerIcon: ({ size, color }) => {
            return (
              <MaterialCommunityIcons
                name="account-badge"
                size={34}
                color={color}
              />
            );
          },
        }}
      />
      {modStatus ? (
        <appDrawerNav.Screen
          name="Settings"
          children={modSettingsDrawerScreens}
          options={{
            drawerIcon: ({ size, color }) => {
              return (
                <MaterialCommunityIcons
                  name="settings"
                  size={34}
                  color={color}
                />
              );
            },
          }}
        />
      ) : (
        <appDrawerNav.Screen
          name="Settings"
          children={userSettingsDrawerScreens}
          options={{
            drawerIcon: ({ size, color }) => {
              return (
                <MaterialCommunityIcons
                  name="settings"
                  size={34}
                  color={color}
                />
              );
            },
          }}
        />
      )}
      <appDrawerNav.Screen
        name="DeleteAccount"
        children={appaccountStackNavScreens}
        options={{
          drawerIcon: ({ size, color }) => {
            return (
              <MaterialCommunityIcons
                name="alpha-x-box"
                size={34}
                color={color}
              />
            );
          },
        }}
      />
      <appDrawerNav.Screen
        name="About"
        children={appinfoStackNavScreens}
        options={{
          drawerIcon: ({ size, color }) => {
            return (
              <MaterialCommunityIcons name="apps-box" size={34} color={color} />
            );
          },
        }}
      />
      <appDrawerNav.Screen
        name="Signout"
        children={appSignoutStackNavScreens}
        options={{
          drawerIcon: ({ size, color }) => {
            return (
              <MaterialCommunityIcons name="logout" size={34} color={color} />
            );
          },
        }}
      />
    </appDrawerNav.Navigator>
  );

  // AUTHSTACK - A stackNav with; SignIn, SignUp, ForgotPassword

  const userAuthNavScreens = () => (
    <userAuthNav.Navigator>
      <userAuthNav.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <userAuthNav.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: true, title: "" }}
      />
      <userAuthNav.Screen name="ForgotPassword" component={PasswordReset} />
    </userAuthNav.Navigator>
  );

  // Check if loading, then render loading screen else proceed to Nav, Then check for UserToken, if yes; goto AppDrawer else
  // goto Authstack Nav
  // const userToken = useSelector((state) => state.firebase.auth.uid);
  const rantNavigation = createStackNavigator();
  return (
    <AuthLoaded>
      <rantNavigation.Navigator
        headerMode="screen"
        screenOptions={({ navigation, route }) => ({
          // headerTitle: "",
          headerShown: false,
          // headerTitle: () => "<NavBurger {...props} navigation={props.navigation} />",
          // headerLeft: (props) => (
          //   <NavBurger {...props} navigation={navigation} />
          // ),
          // headerRight: (props) => <LogoS {...props} />,
        })}
      >
        {!isEmpty(auth.uid) ? (
          <rantNavigation.Screen
            name="rantAppRoot"
            component={appDrawerNavScreens}
            options={({ navigation, route }) => ({
              // headerTitle: "",
              // headerLeft: (props) => (
              //   <NavBurger {...props} navigation={navigation} />
              // ),
            })}
          />
        ) : (
          <rantNavigation.Screen
            name="userAuth"
            component={userAuthNavScreens}
            options={{ headerShown: false }}
          />
        )}
      </rantNavigation.Navigator>
    </AuthLoaded>
  );
};

export default Navigation;

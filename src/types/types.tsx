import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Welcome: undefined;
  First: undefined;
  GetStarted: undefined;
  SignIn: undefined;
  SignUp: undefined;
  VerificationCode: undefined;
  Congrat: undefined;
  Tabs: undefined;
  Home: undefined;
  Profile: undefined;
  Cart: undefined;
  Menu: undefined;
  MyAccount: undefined;
  Address: undefined;
  Settings: undefined;
  OpeningPage: undefined;
};

export type WelcomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Welcome"
>;
export type FirstScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "First"
>;
export type GetStartedScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "GetStarted"
>;
export type SignInScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "SignIn"
>;
export type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "SignUp"
>;
export type VerificationCodeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "VerificationCode"
>;
export type CongratScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Congrat"
>;
export type TabsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Tabs"
>;
export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Home"
>;
export type MenuScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Menu"
>;
export type CartScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Cart"
>;
export type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Profile"
>;
export type MyAccountScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "MyAccount"
>;
export type AddressScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Address"
>;
export type SettingsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Settings"
>;
export type OpeningPageScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "OpeningPage"
>;

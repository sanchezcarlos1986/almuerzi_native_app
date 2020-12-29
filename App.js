import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Meals, Modal, Login, Register, AuthLoading} from '~/screens';

const OnBoardingNavigator = createStackNavigator(
  {
    Login: Login,
    Register: Register,
  },
  {
    initialRouteName: 'Register',
    headerMode: 'none',
  },
);

const AppNavigator = createStackNavigator(
  {
    Meals: {
      screen: Meals,
    },
  },
  {
    initialRouteName: 'Meals',
  },
);

const RootStack = createStackNavigator(
  {
    Main: AppNavigator,
    Modal: Modal,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

const BaseStack = createSwitchNavigator(
  {
    AuthLoading,
    OnBoarding: OnBoardingNavigator,
    Root: RootStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

export default createAppContainer(BaseStack);

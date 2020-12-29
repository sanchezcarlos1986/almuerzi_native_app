import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Meals, Modal, Login, Register} from '~/screens';

const OnBoardingNavigator = createStackNavigator(
  {
    Login: Login,
    Register: Register,
  },
  {
    initialRouteName: 'Register',
    // headerMode: 'none',
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
    OnBoarding: OnBoardingNavigator,
    Root: RootStack,
  },
  {
    initialRouteName: 'OnBoarding',
  },
);

export default createAppContainer(BaseStack);

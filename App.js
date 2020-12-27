import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Meals, Modal} from '~/screens';

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

export default createAppContainer(RootStack);

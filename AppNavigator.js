import React, {Component} from 'react';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from 'react-navigation';
import Gride from './containers/GrideScreen'
import ListeView from './containers/ListeViewScreen'

export default createBottomTabNavigator(
		{
			ListeView: ListeView,
			Gride: Gride,
		},
		{
			navigationOptions: ({ navigation }) => ({
				tabBarIcon: ({ focused, tintColor }) => {
					const { routeName } = navigation.state;
					let iconName;
					if (routeName === 'Gride') {
						iconName = `rocket`;
					} else if (routeName === 'ListeView') {
						iconName = `home`;
					}

					return <Ionicons name={iconName} size={25} color={tintColor} />;
				},
			}),
			tabBarOptions: {
				activeTintColor: 'tomato',
				inactiveTintColor: 'gray',
			},
		}
);
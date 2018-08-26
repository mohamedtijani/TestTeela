import React, {PureComponent} from 'react';
import {View, FlatList, StatusBar, StyleSheet, Text, Dimensions} from 'react-native';
import Product from './../components/Product';
import {get, extractData} from './../api/request';

const {width, height} = Dimensions.get('window');

export default class GrideScreen extends PureComponent {

	state = {
		products: []
	}

	async componentWillMount() {
		const res = await get('https://my-json-server.typicode.com/blueyo/demo/db')
		const data = await extractData(res)
		if (data && data.posts) {
			this.setState({
				products: data.posts
			})
		}
	}

	_keyExtractor = (item, index) => item.id;

	_renderItem = ({ item }) => {
		return <Product product={item} direction={'column'} />
	};

	_renderHeader = ({item}) => (
			<View style={{backgroundColor: '#ffff',justifyContent:'center', alignItems:'center', height: height / 11}}>
				<Text style={{fontSize: 20, fontWeight: 'bold'}}>Gride View</Text>
			</View>
	);

	render() {
		return (
				<FlatList
						style={{backgroundColor: '#edeeef'}}
						data={this.state.products}
						keyExtractor={this._keyExtractor}
						renderItem={this._renderItem}
						ListHeaderComponent={this._renderHeader}
						numColumns={2}
				/>

		)
	}
}
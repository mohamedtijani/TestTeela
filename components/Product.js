import React, {PureComponent} from 'react';
import {View, StyleSheet, Image, Text, Dimensions, Platform} from 'react-native';
import {PropTypes} from 'prop-types';

const {width, height} = Dimensions.get('window');

const deviceWidth = width < height ? width : height;
const deviceHeight = width < height ? height : width;

const WIDTH_WIDGET = (deviceWidth - 6) / 3;
const WIDTH_IMAGE = WIDTH_WIDGET - 2;

export default class Product extends PureComponent {
	render() {
		const {product, direction} = this.props;
		return (
				<View style={[ProductStyle.container, {flexDirection: direction}]}>
					<View style={ProductStyle.imageContainer}>
						<Image style={ProductStyle.imageContainer} sorce={{uri: product.imaage}}/>
					</View>
					<View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
						<Text style={{fontSize: 18}}>{product.name ? product.name : ''}</Text>
						<Text style={{fontSize: 18}}>$ {product.price ? product.price : ''}</Text>
					</View>
					<View style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
						<Text style={{color: '#9B9B9B', fontSize: 11}}>{`SKU: ${product.sku ? product.sku : ''}`}</Text>
					</View>
				</View>
		)
	}
}

Product.propTypes = {
	product: PropTypes.object.isRequired,
	direction: PropTypes.string
}

const ProductStyle = StyleSheet.create({
	container: {
		flex: 1,
		height: deviceHeight / 3.5,
		margin: 4,
		backgroundColor: '#ffff'
	},
	imageContainer: {
		width: WIDTH_IMAGE,
		height: WIDTH_IMAGE
	}
});

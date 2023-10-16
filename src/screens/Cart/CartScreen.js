import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors} from '../../utils';
import {scale} from '../../utils/Matrix';
import CBack from '../../components/CBack';
import {useDispatch, useSelector} from 'react-redux';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {decreaseQuantity, increaseQuantity} from '../../redux/slices/CartSlice';

const CartScreen = () => {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const onDown = i => {
    dispatch(decreaseQuantity(i));
  };

  const onUp = i => {
    dispatch(increaseQuantity(i));
  };

  return (
    <SafeAreaView style={styles.container}>
      <CBack title={'Cart'} />
      {/* Product List */}
      <View style={styles.list}>
        <ScrollView>
          {/* Cart List */}
          {cartItems.map((product, index) => {
            return (
              <View style={styles.card} key={index}>
                <Image source={product.tumbnailImage} style={styles.img} />
                <View style={{width: '40%'}}>
                  <Text style={styles.name}>{product.name}</Text>
                  <Text style={styles.price}>${product.price}</Text>
                  <View style={styles.qtyContainer}>
                    <TouchableOpacity
                      style={styles.qtyBtn}
                      onPress={() => onDown(product)}>
                      <AntDesign name="up" size={scale(12)} color={'#8F959E'} />
                    </TouchableOpacity>
                    <Text style={styles.qty}>{product.quantity}</Text>
                    <TouchableOpacity
                      style={styles.qtyBtn}
                      onPress={() => onUp(product)}>
                      <AntDesign
                        name="down"
                        size={scale(12)}
                        color={'#8F959E'}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                    flex: 1,
                    height: '100%',
                  }}>
                  <TouchableOpacity
                    style={[styles.qtyBtn, {margin: scale(16)}]}>
                    <Octicons name="trash" size={scale(12)} color={'#8F959E'} />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
      {/* Delivery add */}
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '90%',
            alignSelf: 'center',
          }}>
          <Text style={styles.heading}>Delivery Address</Text>
          <TouchableOpacity>
            <AntDesign name="right" color={Colors.black} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  card: {
    width: '90%',
    elevation: 5,
    height: scale(120),
    shadowColor: '#000',
    shadowRadius: 3.84,
    alignSelf: 'center',
    shadowOpacity: 0.25,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: scale(6),
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    shadowOffset: {width: 0, height: 2},
  },
  name: {
    color: Colors.black,
  },
  price: {
    fontSize: scale(12),
    color: '#8F959E',
  },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  qty: {
    color: Colors.black,
  },
  qtyBtn: {
    height: scale(26),
    width: scale(26),
    borderRadius: scale(13),
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#DEDEDE',
  },
  img: {
    width: scale(100),
    height: scale(100),
    resizeMode: 'contain',
  },
  list: {
    height: scale(260),
  },
  heading: {
    color: Colors.black,
    fontSize: scale(17),
    marginVertical: scale(20),
    fontWeight: 'bold',
  },
});

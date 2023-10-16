import {
  Text,
  View,
  Image,
  FlatList,
  StatusBar,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../../utils';
import React, {useState} from 'react';
import {scale} from '../../utils/Matrix';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation, useRoute} from '@react-navigation/native';
import { addToCart } from '../../redux/slices/CartSlice';
import { useDispatch } from 'react-redux';

const DetailScreen = () => {
  const route = useRoute();
  const {item} = route.params;
  const dispatch = useDispatch()
  const navigation = useNavigation();
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const truncatedText = item.description
    .split(' ')
    .slice(0, showFullDescription ? undefined : 50)
    .join(' ');

  const renderSizes = ({item, index}) => {
    return (
      <View style={styles.sizeBox} key={index}>
        <Text style={{fontSize: scale(17), color: Colors.black}}>{item}</Text>
      </View>
    );
  };

  const renderImg = ({item, index}) => {
    return <Image source={item} style={styles.imgs} key={index} />;
  };

  const goback = () => {
    navigation.goBack();
  };

  const goToCart = () => {
    navigation.navigate('Cart');
  };

  const addTocart = () => {
    dispatch(addToCart({...item,quantity: 1 }));
    navigation.navigate('Cart')
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent hidden backgroundColor={'transparent'} />
      <ScrollView>
        <View>
          <Image source={item.tumbnailImage} style={styles.img} />

          <View style={styles.header}>
            <TouchableOpacity style={styles.headerBtn} onPress={goback}>
              <AntDesign
                name="arrowleft"
                size={scale(25)}
                color={Colors.black}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerBtn} onPress={goToCart}>
              <Fontisto name="opencart" size={scale(25)} color={Colors.black} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Heading */}
        <View style={styles.headingContainer}>
          <View style={{width: '70%'}}>
            <Text style={styles.label}>Men's Printed Pullover Hoodie</Text>
            <Text style={styles.value}>{item.name}</Text>
          </View>
          <View s>
            <Text style={styles.label}>Price</Text>
            <Text style={styles.value}>${item.price}</Text>
          </View>
        </View>
        {/* Images */}
        <View style={{padding: scale(20)}}>
          <FlatList
            data={item.otherImages}
            renderItem={renderImg}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        {/* Sizes */}
        <View style={{padding: scale(20)}}>
          <View>
            <Text style={styles.value}>Size</Text>
            <TouchableOpacity>
              <Text>Size Guide</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={item.sizes}
            renderItem={renderSizes}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{padding: scale(20)}}>
          <Text style={styles.value}>Description</Text>
          <Text style={styles.desc}>
            {showFullDescription ? item.description : truncatedText}
            {item.description.length > 50 && (
              <TouchableOpacity onPress={toggleDescription}>
                <Text style={{color: Colors.black}}>
                  {showFullDescription ? 'Read Less' : 'Read More'}
                </Text>
              </TouchableOpacity>
            )}
          </Text>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.BtnContainer} onPress={addTocart}>
        <Text style={styles.addTxt}>Add to Cart</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  img: {
    height: scale(400),
    width: '100%',
    resizeMode: 'stretch',
  },
  label: {
    fontSize: scale(14),
    color: '#8F959E',
  },
  value: {
    fontSize: scale(22),
    color: Colors.black,
    fontWeight: 'bold',
  },
  sizeBox: {
    height: scale(60),
    width: scale(60),
    borderRadius: scale(10),
    backgroundColor: '#F5F6FA',
    marginRight: scale(9),
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgs: {
    width: scale(77),
    height: scale(77),
    marginRight: scale(9),
    resizeMode: 'contain',
  },
  desc: {
    color: '#8F959E',
    fontSize: scale(15),
    justifyContent: 'center',
    textAlignVertical: 'center',
  },
  header: {
    width: '100%',
    height: scale(60),
    padding: scale(20),
    position: 'absolute',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerBtn: {
    width: scale(50),
    height: scale(50),
    alignItems: 'center',
    borderRadius: scale(25),
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  headingContainer: {
    padding: scale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  BtnContainer: {
    width: '100%',
    height: scale(50),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.appBG,
  },
  addTxt: {
    fontSize: scale(17),
    color: Colors.white,
    fontWeight: 'bold',
  },
});

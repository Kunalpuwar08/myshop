import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Colors} from '../../utils';
import {scale} from '../../utils/Matrix';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CInput from '../../components/CInput';
import Voice from '@react-native-voice/voice';
import {ProductList} from '../../assets/dummyData';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = React.useState('');
  const [isMicStarted, setIsMicStarted] = React.useState(false);

  const brandName = [
    {name: 'Adidas'},
    {name: 'Nike'},
    {name: 'Fila'},
    {name: 'Puma'},
  ];

  React.useEffect(() => {
    const initVoice = async () => {
      try {
        // await Voice.requestPermissions();
        await Voice.isAvailable();
      } catch (e) {
        console.error(e);
      }
    };

    initVoice();
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStart = e => {};
  const onSpeechEnd = e => {};
  const onSpeechResults = e => {
    setSearchText(e.value[e.value.length - 1]);
    console.log(e, 'result');
  };

  const startRecognizing = async () => {
    setIsMicStarted(true);
    try {
      await Voice.start('en-US');
    } catch (e) {
      console.log(e);
    }
  };

  const stopRecognizing = async () => {
    setIsMicStarted(false);

    try {
      await Voice.stop();
      await Voice.destroy();
    } catch (e) {
      console.log(e);
    }
  };

  const renderCard = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.productCard}
        onPress={() => navigation.navigate('Detail', {item})}>
        <Image
          source={item.tumbnailImage}
          style={{height: scale(203), width: '100%', resizeMode: 'stretch'}}
        />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </TouchableOpacity>
    );
  };

  const navigateToCart = () => {
    navigation.navigate('Cart')
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* header */}
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.btn}>
            <MaterialIcons
              name="segment"
              size={scale(20)}
              color={Colors.black}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={navigateToCart}>
            <Fontisto name="opencart" size={scale(20)} color={Colors.black} />
          </TouchableOpacity>
        </View>

        <View style={{padding: 20}}>
          <Text style={styles.helloTxt}>Hello</Text>
          <Text style={styles.welcomeTxt}>Welcome to Laza.</Text>
        </View>

        <View style={styles.searchContainer}>
          <CInput
            placeholder={'Search...'}
            otherStyle={{width: '80%'}}
            inputStyle={styles.input}
            value={searchText}
            onChangeText={txt => setSearchText(txt)}
          />
          <TouchableOpacity
            style={styles.micBtn}
            onPress={
              isMicStarted ? () => stopRecognizing() : () => startRecognizing()
            }>
            <Ionicons
              name={isMicStarted ? 'stop-outline' : 'mic-outline'}
              size={scale(28)}
              color={Colors.white}
            />
          </TouchableOpacity>
        </View>

        {/* Choose brand */}
        <View style={styles.chooseBrandContainer}>
          <View style={styles.chooseBrandHeader}>
            <Text style={styles.heading}>Choose Brand</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllTxt}>View All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={brandName}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <TouchableOpacity style={styles.brandCard} key={index}>
                <Text style={styles.brandTitle}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* New Arraival */}
        <View style={styles.chooseBrandContainer}>
          <View style={styles.chooseBrandHeader}>
            <Text style={styles.heading}>New Arraival</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllTxt}>View All</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={ProductList}
            renderItem={renderCard}
            numColumns={2}
            columnWrapperStyle={{
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  headerContainer: {
    padding: scale(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    width: scale(45),
    height: scale(45),
    alignItems: 'center',
    borderRadius: scale(22),
    justifyContent: 'center',
    backgroundColor: '#F5F6FA',
  },
  helloTxt: {
    fontWeight: 'bold',
    fontSize: scale(28),
    color: Colors.black,
  },
  welcomeTxt: {
    color: '#8F959E',
    fontSize: scale(15),
  },
  input: {
    padding: scale(8),
    borderBottomWidth: 0,
    borderRadius: scale(10),
    backgroundColor: '#F5F6FA',
  },
  micBtn: {
    width: scale(57),
    height: scale(57),
    alignItems: 'center',
    borderRadius: scale(10),
    justifyContent: 'center',
    backgroundColor: Colors.appBG,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(20),
    justifyContent: 'space-between',
  },
  chooseBrandContainer: {
    marginVertical: scale(15),
    paddingHorizontal: scale(20),
  },
  chooseBrandHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: scale(17),
    color: Colors.black,
  },
  viewAllTxt: {
    color: '#8F959E',
    fontSize: scale(13),
  },
  brandCard: {
    height: scale(50),
    width: scale(100),
    alignItems: 'center',
    marginRight: scale(12),
    borderRadius: scale(10),
    justifyContent: 'center',
    marginVertical: scale(12),
    backgroundColor: '#F5F6FA',
  },
  brandTitle: {
    fontWeight: 'bold',
    fontSize: scale(15),
    color: Colors.black,
  },
  productName: {
    fontWeight: '500',
    fontSize: scale(12),
    color: Colors.black,
    marginVertical: scale(4),
  },
  price: {
    fontWeight: 'bold',
    color: Colors.black,
    fontSize: scale(14),
  },
  productCard: {
    width: '48%',
    height: scale(257),
    marginVertical: scale(8),
  },
});

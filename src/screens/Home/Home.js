import {
  SafeAreaView,
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

const Home = () => {
  const [searchText, setSearchText] = React.useState('');
  const [isMicStarted, setIsMicStarted] = React.useState(false);
  React.useEffect(() => {
    const initVoice = async () => {
      try {
        await Voice.requestPermissions(); 
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

  const onSpeechStart = e => {
    console.log(e);
  };
  const onSpeechEnd = e => {
    console.log(e);
  };
  const onSpeechResults = e => {
    console.log(e);
    setSearchText(e.value);
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

  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.btn}>
          <MaterialIcons name="segment" size={scale(20)} color={Colors.black} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
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
        />
        <TouchableOpacity
          style={styles.micBtn}
          onPress={
            isMicStarted ? () => stopRecognizing() : () => startRecognizing()
          }>
          <Ionicons name="mic-outline" size={scale(28)} color={Colors.white} />
        </TouchableOpacity>
      </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: scale(20),
  },
  btn: {
    height: scale(45),
    width: scale(45),
    backgroundColor: '#F5F6FA',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  helloTxt: {
    fontSize: scale(28),
    color: Colors.black,
    fontWeight: 'bold',
  },
  welcomeTxt: {
    fontSize: scale(15),
    color: '#8F959E',
  },
  input: {
    borderBottomWidth: 0,
    backgroundColor: '#F5F6FA',
    padding: scale(8),
    borderRadius: scale(10),
  },
  micBtn: {
    height: scale(57),
    width: scale(57),
    borderRadius: scale(10),
    backgroundColor: Colors.appBG,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(20),
  },
});

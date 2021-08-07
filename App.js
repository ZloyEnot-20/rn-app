import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Carousel from './components/carousel';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topBlock}>
        <Image style={styles.image} source={require('./assets/plane.png')} />
      </View>
      <View style={styles.bottomBlock}>
        <View style={styles.infoBlock}>
          <View style={styles.wrapper}>
            <View style={styles.directions}>
              <View style={styles.origin}>
                <Text>1 Aug, 2020</Text>
                <Text style={styles.directionInitials}>SVO</Text>
                <Text>Moscow</Text>
              </View>
              <View
                style={[
                  styles.origin,
                  { justifyContent: 'center', alignItems: 'center' },
                ]}
              >
                <View style={styles.arrow}></View>
              </View>
              <View style={styles.origin}>
                <Text>11:45</Text>
                <Text style={styles.directionInitials}>JFK</Text>
                <Text>New York</Text>
              </View>
            </View>
            <View style={styles.prices}>
              <View style={styles.priceBlock}>
                <View
                  style={[
                    styles.priceBlockInfo,
                    { borderRightColor: 'white', borderRightWidth: '1px' },
                  ]}
                >
                  <Text style={styles.priceBlockInfoFonts}>Price</Text>
                  <Text
                    style={[styles.priceBlockInfoFonts, { fontSize: '20px' }]}
                  >
                    23 311 ₽
                  </Text>
                </View>
                {/* <View style={styles.highLine}></View> */}
                <View style={styles.priceBlockInfo}>
                  <Text style={styles.priceBlockInfoFonts}>Boarding</Text>
                  <Text
                    style={[styles.priceBlockInfoFonts, { fontSize: '20px' }]}
                  >
                    19:20
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Carousel />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    boxSizing: 'border-box',
    overflow: 'hidden',
  },
  topBlock: {
    height: '45%',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  bottomBlock: {
    height: '55%',
    borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px',
    overflow: 'hidden',
  },
  infoBlock: {
    // top: -25,
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px',
  },
  wrapper: {
    padding: 30,
    paddingBottom: 0,
  },
  arrow: {
    borderColor: '#A7A7A7',
    padding: '7px',
    display: 'inline-block',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: '3px',
    borderBottomWidth: '3px',
    borderLeftWidth: 0,
    transform: 'rotate(-45deg)',
  },
  directions: {
    flexDirection: 'row',
  },
  origin: {
    flex: 1,
    textAlign: 'center',
  },
  directionInitials: {
    fontSize: '36px',
    fontWeight: 400,
  },
  prices: {
    paddingTop: '17px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceBlock: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderColor: 'green',
    backgroundColor: '#1157A7',
    height: '90px',
    borderRadius: '15px',
  },
  priceBlockInfo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceBlockInfoFonts: {
    fontSize: '13px',
    fontStyle: 'normal',
    fontFamily: 'SF Pro Text',
    color: '#FFFFFF',
    opacity: 0.7
  },
  highLine: {
    borderWidth: '1px',
    borderColor: '#FFFFFF',
    height: '50px',
  },
});

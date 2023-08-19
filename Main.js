import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Pressable } from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'hsl(219, 4%, 4%);', // Set black background
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white', // Set white font color
  },
  sectionSubtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    alignItems:'center',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width:120
  },
  card1: {
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    gap:5
  },
  card2: {
    flexDirection:'row',
    padding:0,
    justifyContent:'center'
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white', // Set white font color
  },
  cardDescription: {
    fontSize: 16,
    color: 'white', // Set white font color
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  mapImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  number:{
    fontSize:35
  },
  logo:{
    fontSize:20,
    marginBottom:20
  },
  Desc:{
    color:'white',
    fontSize:10,
    marginTop:10
  },
  buttonWrapper: {
    alignItems: 'center',
  },
  home__button: {
    borderWidth: 2,
    borderColor: 'hsl(158, 89%, 30%)',
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  buttonGlow: {
    borderWidth: 2,
    borderColor: 'hsl(158, 98%, 43%)',
    width: 90,
    height: 90,
    borderRadius: 43,
    shadowColor: 'hsl(158, 98%, 43%)',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 7,
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

const MainComponent = () => {
  return (
    <ScrollView style={styles.main}>
      <View style={styles.section}>
        <View style={styles.card1}>
          <Text style={[styles.cardTitle,{marginBottom:30}]}>Autonomous car</Text>
          <Text style={styles.cardTitle}>POSRCHE</Text>
          <Text style={[styles.cardDescription,{color:'blue'}]}>
            <Text style={{ fontSize: 24 }}>⚡</Text> Electric car
          </Text>
        </View>
        <Image
          source={require('./img/home.png')}
          style={styles.image}
        />
        <View style={styles.card2} >
        <View style={styles.card}>
          <View style={styles.cardTitle}>
            <Text style={styles.logo}>🌡</Text>
            </View>
            <View>
            <Text style={[styles.number,{color:'white' }]}>24°C</Text>
            </View>
            <View>
          <Text style={styles.Desc}>TEMPERATURE</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardTitle}>
            <Text style={styles.logo}>⚪</Text>
            </View>
            <View>
            <Text style={[styles.number,{color:'white' }]}>873</Text>
            </View>
            <View>
          <Text style={styles.Desc}>MILEAGE</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardTitle}>
            <Text style={styles.logo}>⚡</Text>
            </View>
            <View>
            <Text style={[styles.number,{color:'white' }]}>94%</Text>
            </View>
            <View>
          <Text style={styles.Desc}>BATTERY</Text>
          </View>
        </View>
        
        </View>
        <Pressable onPress={() => alert('Started')} >
        <View  style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.home__button} >
            <Text style={{ fontSize: 18, color: 'white' }}>START</Text>
          </TouchableOpacity>
          <View style={styles.buttonGlow}></View>
        </View></Pressable>

    
      </View>

      <View style={styles.section}>
        <Image
          source={require('./img/about.png')}
          style={styles.image}
        />
        <View style={styles.card}>
          <Text style={styles.cardTitle}>2.500+</Text>
          <Text style={styles.cardDescription}>Supercharges placed along popular routes</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Machines With Future Technology</Text>
          <Text style={styles.cardDescription}>
            See the future with high-performance electric cars produced by renowned brands.
            They feature futuristic builds and designs with new and innovative platforms
            that last a long time.
          </Text>
          <TouchableOpacity   style={styles.button}>
            <Text style={{ fontSize: 18 }}>Know more</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Choose Your Electric Car Of The Porsche Brand</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>More Features</Text>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('./img/features.png')}
            style={styles.image}
          />
          <View style={styles.card}>
            <Text style={styles.cardTitle}>800v</Text>
            <Text style={styles.cardDescription}>Turbo Charging</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>350</Text>
            <Text style={styles.cardDescription}>Km Range</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>480</Text>
            <Text style={styles.cardDescription}>Km Travel</Text>
          </View>
        </View>
        <Image
          source={require('./img/map.svg')}
          style={styles.mapImage}
        />
      </View>

      <View style={styles.section} id="featured">
      </View>

      <View style={styles.section} id="offer">
      </View>

      <View style={styles.section} id="logos">
      </View>
    </ScrollView>
  );
};

export default MainComponent;

import React from 'react';
import {View, Dimensions, StyleSheet, Text,Image, TouchableOpacity, FlatList, TextInput, SafeAreaView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import data from '../assets/data';
import Octicons from 'react-native-vector-icons/Octicons';
Octicons.loadFont();

const {height, width} = Dimensions.get('window');
 
export default function Home() {

  const Featured = ({item}) => {
    return (
      <View
        style={[
          styles.featured,
          {
             marginRight: item.id === '4' ? 20 : 0
          },
        ]}>
        <Image source={item.image} style={styles.featuredImage} />
        <Text style={styles.featuredText}>{item.name}</Text>
      </View>
    )
  }
  const Popular = ({item}) => {
    return (
    <TouchableOpacity 
    style={[
      styles.popular, 
      {
      marginLeft: item.id === '1' ? 20 : 0,
      },
    ]}>
      <Image source={item.image} style={styles.popularImage} />
      <Text style={styles.popularTitle}>{item.name}</Text>
      <View style={styles.action}>
      <View style={styles.rating}>
       <Octicons name="star" size={15} style={styles.star} color="black"/>
       <Octicons name="star" size={15} style={styles.star} color="black"/>
       <Octicons name="star" size={15} style={styles.star} color="black"/>
       <Octicons name="star" size={15} style={styles.star} color="black"/>
    
      </View>
      <View style={styles.button}>
        <Feather name="chevron-right" size={15} />
      </View>
      </View>
    </TouchableOpacity>
    )
    }
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <SafeAreaView>
        <View style={styles.container}>
         <View>
           <Text style={styles.title}> Good Morning </Text>
         <View style={styles.subHeader}>
           <Text style={styles.subtitle}>Ben</Text>
           <Feather 
           name="coffee" 
           size={24} 
           style={{
           marginLeft: 10,
           color: '#565656'
            }}
          />
           </View>
        </View>
        <Feather name="grid" size={20} style={{color: '#565656'}} />
        </View>
        </SafeAreaView>
        <View style={styles.wrapper}>
          <View style={styles.search}>
          <Feather 
          name="search" 
          size={24} 
          style={{
            marginRight: 10,
            color: '#c8c8c8',
          }}
          />
        <TextInput placeholderTextColor="#d8d8d8" placeholder="Search" />
        </View>
    </View>
    <View style={styles.wrapper}>
      <Text style={styles.headerText}>Popular</Text>
    </View>
    <View>
      <FlatList 
      data={data} 
      keyExtractor={data => data.id} 
      horizontal 
      showsHorizontalScrollIndicator={false} 
      renderItem={Popular}
      />
    </View>
    <View style={styles.wrapper}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={styles.headerText}>Featured Items</Text>
      <Text style={styles.headerSubText}> See All</Text>
    </View>
  </View>
  <View>
     <FlatList data={data}
        keyExtractor={(data) => data.id} 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        renderItem={Featured} />
    </View>
    </View>
  );
}

const styles  = StyleSheet.create({
  container: {
     marginTop: 20,
     paddingHorizontal: 20,
     flexDirection: 'row',
     justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    color: '#247652',
    fontWeight: 'bold',
  },
  subHeader: {
     flexDirection: 'row',
     alignItems: 'center',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#565656',
  },
  wrapper: {
   paddingHorizontal: 20,
   marginVertical: 20,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f3f3',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 40,
  },
  headerText: {
    fontWeight: 'bold',
    color: '#2e2e2e',
    fontSize: 18,
  },
  popular: {
    marginTop: 50,
    paddingLeft: 10,
    paddingRight: 20,
    marginRight: 60,
    backgroundColor: '#f8f8f7',
    height: height / 4,
    width: height / 5.5,
    borderRadius: 20,
    paddingBottom: 20,
    justifyContent: 'flex-end',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 2,
    shadowOpacity: 0.08,
    marginBottom: 20,
  },
  popularImage: {
    width: 150,
    height: 180,
    resizeMode: 'contain',
    position: 'absolute',
    top: -60,
    right: -70,
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 2,
    shadowOpacity: 0.08,
  },
  popularTitle: {
    color: '#606060',
    fontWeight: 'bold',
    fontSize: 16,
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,

  },
 rating: {
   flexDirection: 'row',
 },
 star: {
   color: '#ffd206',
   marginRight: 2,
 },
button: {
  width: 25,
  height: 25,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
},
headerSubText: {
  fontWeight: 'bold',
  color: '#2e2e2e',
  fontSize: 12,
},
featured: {
  backgroundColor: '#f8f8f7',
  marginLeft: 20,
  width: width / 3 - 25,
  height: width / 3,
  alignItems: 'center',
  justifyContent: 'flex-end',
  paddingBottom: 10,
  marginBottom: 20,
  marginTop: 30,
  borderRadius: 20,
  shadowColor: '#000',
  shadowOffset: {
    width: 2,
    height: 2,
  },
  shadowRadius: 2,
  shadowOpacity: 0.08,
  marginBottom:  20,
},
featuredImage: {
width: 60,
height: 100,
resizeMode: 'contain',
position: 'absolute',
top: -25,
}, 
featuredText: {
  textAlign: 'center',
  fontSize: 12,
}
});

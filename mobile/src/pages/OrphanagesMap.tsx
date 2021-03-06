import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import mapMarker from '../images/map-marker.png';

const { width, height } = Dimensions.get('window');

export default function OrphanagesMap() {
  const navigation = useNavigation();  

  function handleNavigationToOrphanageDetails() {
    navigation.navigate('OrphanageDetails');
  }

  function handleNavigateToCreateOrphanage(){
    navigation.navigate('SelectMapPosition')
  }



  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
        latitude: -23.9822029,
        longitude: -46.3013031,
        latitudeDelta: 0.008,
        longitudeDelta: 0.008,
      }}
      >
        <Marker
          icon={mapMarker}
          coordinate={{
            latitude: -23.9822029,
            longitude: -46.3013031,
          }}
        >
          <Callout tooltip onPress={handleNavigationToOrphanageDetails}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}> Lar das meninas </Text>
            </View>
          </Callout>
        </Marker>
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}> 1 orfanato encontrado </Text>

        <TouchableOpacity style={styles.createOrphanageButton} onPress={handleNavigateToCreateOrphanage}>
          <Feather name="plus" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width,
    height
  },
  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center',
  },
  calloutText: {
    fontFamily: 'Nunito_700Bold',
    color: '#0089a5',
    fontSize: 14,
  },
  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 32,

    backgroundColor: '#FFF',
    borderRadius: 20,
    height: 46,
    paddingLeft: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    elevation: 5,
  },
  footerText: {
    fontFamily: 'Nunito_700Bold',
    color: '#8FA7B3'
  },
  createOrphanageButton: {
    width: 56,
    height: 56,
    backgroundColor: '#15C3D6',
    borderRadius: 20,
    
    justifyContent: 'center',
    alignItems: 'center',
  },
});

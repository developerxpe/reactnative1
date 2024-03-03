import React from "react";
import {
  Text, SafeAreaView, FlatList, StyleSheet, ScrollView,
} from 'react-native';
import PatikaStore from "./components/PatikaStore/patistore";
import SearchBar from "./components/PatikaStore/SearchBar";
import json from './patistore.json';
import banner_data from './banner_data.json';
import BannerComponent from './components/PatikaStore/BannerComponent';


function App() {

  const renderPati = ({ item }: { item: any }) => <PatikaStore patika={item} />;

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.headerText}>PATIKASTORE</Text>
      <SearchBar />
      <FlatList
        keyExtractor={(item) => item.u_id.toString()}
        data={json}
        numColumns={2}
        renderItem={renderPati}
        ListFooterComponent={
          <ScrollView showsHorizontalScrollIndicator={false}>
            {banner_data.map((banner_urun) => (
            <BannerComponent banner_urun={banner_urun} />
            ))}
          </ScrollView>
        }


      />
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'purple',
    marginLeft: 10,
  },

});

export default App;

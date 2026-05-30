import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import productsData from '../data/products.json';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      setProducts(Array.isArray(productsData) ? productsData : []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const getImageSource = (image) => {
    if (typeof image !== 'string') return image;
    if (image.startsWith('http')) {
      return { uri: image };
    }

    if (image.endsWith('headphones.png')) {
      return require('../assets/headphones.png');
    }

    return { uri: image };
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image
        source={getImageSource(item.image)}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>{item.name}</Text>

      <Text style={styles.subtitle}>{item.description}</Text>

      <Text style={styles.country}>{item.country}</Text>

      <View style={styles.colors}>
        <View style={[styles.color, { backgroundColor: '#1E40AF' }]} />
        <View style={[styles.color, { backgroundColor: '#22C55E' }]} />
        <View style={[styles.color, { backgroundColor: '#64748B' }]} />
      </View>

      <Text style={styles.price}>${item.price}</Text>

      <Text style={styles.stock}>
        Stock: {item.stock}
      </Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#2563EB" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={true}
        scrollEnabled={true}
        nestedScrollEnabled={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  list: {
    padding: 15,
    paddingBottom: 50,
    backgroundColor: '#F5F5F5',
  },

  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 4,
  },

  image: {
    width: 250,
    height: 180,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1D4ED8',
    marginTop: 10,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
    textAlign: 'center',
  },

  country: {
    marginTop: 5,
    color: '#888',
  },

  colors: {
    flexDirection: 'row',
    marginTop: 15,
  },

  color: {
    width: 18,
    height: 18,
    borderRadius: 9,
    marginHorizontal: 5,
  },

  price: {
    marginTop: 20,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
  },

  stock: {
    marginTop: 5,
    color: '#6B7280',
  },
});
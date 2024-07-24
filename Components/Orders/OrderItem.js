import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const OrderItem = ({ orderItem }) => {
  const total = orderItem.cartItems.reduce(
    (acc, currentItem) => (acc += currentItem.quantity * currentItem.price),
    0
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.dateText}>{orderItem.createdAt}</Text>
        <Text style={styles.totalText}>Total: ${total.toFixed(2)}</Text>
      </View>
      <FlatList
        data={orderItem.cartItems}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemDetails}>
              ${item.price.toFixed(2)} x {item.quantity} unidad/es
            </Text>
          </View>
        )}
        keyExtractor={item => item.slug}
        style={styles.flatList}
      />
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  dateText: {
    fontSize: 16,
    color: '#555',
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  flatList: {
    marginTop: 10,
  },
  itemContainer: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  itemDetails: {
    fontSize: 14,
    color: '#666',
  },
});

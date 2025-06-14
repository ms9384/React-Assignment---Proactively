import React, { useState, useCallback } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter, useFocusEffect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colours from '@/utils/colours';

const overviewTemplate = [
  {
    key: 'steps',
    label: 'Steps',
    updated: 'Updated',
    value: '-',
    unit: 'steps',
    background: '#E9F0FF',
    colour: '#4F65CB',
    route: '/steps',
    storeKey: 'stepsCount',
  },
  {
    key: 'bmi',
    label: 'BMI',
    updated: 'Updated',
    value: '-',
    unit: 'kg/m²',
    background: '#FBFFC8',
    colour: '#7B8400',
    route: '/bmi',
    storeKey: 'bmiValue',
  },
  {
    key: 'sleep',
    label: 'Sleep',
    updated: 'Updated',
    value: '-',
    unit: 'hours',
    background: '#FFECC8',
    colour: '#B27500',
    route: '/sleep',
    storeKey: 'sleepHours',
  },
];

export default function HealthOverview() {
  const router = useRouter();
  const [cards, setCards] = useState(overviewTemplate);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const updated = await Promise.all(
          overviewTemplate.map(async card => {
            const stored = await AsyncStorage.getItem(card.storeKey);
            return {
              ...card,
              value: stored ?? card.value,
            };
          })
        );
        setCards(updated);
      })();
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Health Overview</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {cards.map(card => (
          <TouchableOpacity
            key={card.key}
            style={[styles.card, { backgroundColor: card.background }]}
            onPress={() => router.push(card.route)}
          >
            <View style={styles.cardHeader}>
              <Text style={styles.cardLabel}>{card.label}</Text>
              <FontAwesome
                name="angle-right"
                size={18}
                color={card.colour}
              />
            </View>
            <Text style={[styles.updated, { color: card.colour }]}>
              {card.updated}
            </Text>
            <View style={styles.valueRow}>
              <Text style={[styles.value, { color: card.colour }]}>
                {card.value}
              </Text>
              {card.unit && (
                <Text style={styles.unit}>{card.unit}</Text>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.separator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    paddingHorizontal: 20, 
    paddingTop: 20, 
    backgroundColor: '#fff' 
  },
  
  title: { 
    fontSize: 18, 
    fontFamily: 'Inter-SemiBold', 
    color: '#222', 
    marginBottom: 12 
  },
  
  scrollContent: { 
    paddingRight: 12, 
  },

  card: { 
    width: 155, 
    borderRadius: 12, 
    padding: 16, 
    marginRight: 12, 
  },

  cardHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },

  cardLabel: { 
    fontSize: 16, 
    fontFamily: 'Inter-Medium', 
    color: colours.black 
  },

  updated: { 
    fontSize: 14, 
    fontFamily: 'Inter-Medium', 
    marginTop: 4 
  },

  valueRow: { 
    flexDirection: 'row', 
    alignItems: 'flex-end', 
    marginTop: 8 
  },

  value: { 
    fontSize: 24, 
    fontFamily: 'Inter-Bold' 
  },

  unit: { 
    fontSize: 14, 
    fontFamily: 'Inter-Medium', 
    color: '#666', 
    marginLeft: 4, 
    marginBottom: 3.5, 
  },

  separator: { 
    height: 1, 
    backgroundColor: '#ECECEC', 
    marginTop: 25, 
    marginBottom: 15,
  },

});

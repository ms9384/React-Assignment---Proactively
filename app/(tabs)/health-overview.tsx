// src/app/(tabs)/health-overview.tsx
import React, { useState, useCallback } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter, useFocusEffect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colours from '@/utils/colours';
import { scale, verticalScale } from '@/utils/scale';

const overviewTemplate = [
  {
    key: 'steps',
    label: 'Steps',
    updated: 'Updated',
    value: '-',
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
            return { ...card, value: stored ?? card.value };
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
                size={scale(18)}
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
              {card.unit && <Text style={styles.unit}>{card.unit}</Text>}
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
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(20),
    backgroundColor: '#fff',
    marginRight: scale(8),
  },

  title: {
    fontSize: scale(18),
    fontFamily: 'Inter-SemiBold',
    color: '#222',
    marginBottom: verticalScale(8),
    marginTop: verticalScale(-15),
  },

  scrollContent: {
    paddingRight: scale(12),
  },
  card: {
    width: scale(155),
    borderRadius: scale(12),
    padding: scale(16),
    marginRight: scale(12),
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardLabel: {
    fontSize: scale(16),
    fontFamily: 'Inter-Medium',
    color: colours.black,
  },
  updated: {
    fontSize: scale(14),
    fontFamily: 'Inter-Medium',
    marginTop: verticalScale(4),
  },
  valueRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: verticalScale(8),
  },
  value: {
    fontSize: scale(24),
    fontFamily: 'Inter-Bold',
  },
  unit: {
    fontSize: scale(14),
    fontFamily: 'Inter-Medium',
    color: '#666',
    marginLeft: scale(4),
    marginBottom: verticalScale(3.5),
  },
  separator: {
    height: verticalScale(1),
    backgroundColor: '#ECECEC',
    marginTop: verticalScale(25),
    marginBottom: verticalScale(15),
  },
});

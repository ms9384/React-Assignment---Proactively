import React, { useState, useMemo } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

type Task = {
  id: string;
  title: string;
  author: string;
  date: string;
  completed: boolean;
};

const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Achieve 30k steps every week for blood sugar',
    author: 'Laurie Simons',
    date: 'Sep 5, 2024',
    completed: false,
  },

  {
    id: '2',
    title: 'Take up health Coaching',
    author: 'Laurie Simons',
    date: 'Sep 5, 2024',
    completed: false,
  },

  {
    id: '3',
    title: 'Go to a nearby gym and workout for 30 mins',
    author: 'Laurie Simons',
    date: 'Sep 5, 2024',
    completed: false,
  },

  {
    id: '4',
    title: 'Complete 2 courses of Dr. Laurie Simons',
    author: 'Laurie Simons',
    date: 'Aug 30, 2024',
    completed: true,
  },
];

export default function ToDos() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const completedCount = useMemo(
    () => tasks.filter(t => t.completed).length,
    [tasks]
  );
  const totalCount = tasks.length;
  const progress = completedCount / totalCount;

  const toggleTask = (id: string) => {
    setTasks(ts =>
      ts.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const renderItem = ({ item }: { item: Task }) => (
    <View style={[styles.card, item.completed && styles.cardCompleted]}>
      <TouchableOpacity
        style={[
          styles.checkbox,
          item.completed && styles.checkboxChecked,
        ]}
        onPress={() => toggleTask(item.id)}
      >
        {item.completed && (
          <FontAwesome name="check" size={14} color="#fff" />
        )}
      </TouchableOpacity>
      <View style={styles.cardText}>
        <Text
          style={[
            styles.taskTitle,
            item.completed && styles.taskTitleCompleted,
          ]}
        >
          {item.title}
        </Text>
        <Text style={styles.taskMeta}>
          {item.author} • {item.date}
        </Text>
      </View>
    </View>
  );

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.heading}>Let’s check off your to‑dos</Text>

      <View style={styles.progressInfo}>
        <Text style={styles.progressText}>
          {completedCount}/{totalCount} Completed
        </Text>
        <View style={styles.progressBarBg}>
          <View
            style={[
              styles.progressBarFill,
              { flex: progress },
            ]}
          />
          <View
            style={[
              styles.progressBarEmpty,
              { flex: 1 - progress },
            ]}
          />
        </View>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={t => t.id}
        renderItem={renderItem}
        scrollEnabled={false}    
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        contentContainerStyle={{ paddingTop: 12 }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
  },

  heading: {
    marginTop: -20,
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    marginBottom: 12,
    color: '#222222',
  },

  progressInfo: {
    marginBottom: 16,
  },

  progressText: {
    fontSize: 14,
    color: '#707070',
    marginBottom: 6,
    fontFamily:'Inter-Regular'
  },

  progressBarBg: {
    flexDirection: 'row',
    height: 13,
    borderRadius: 24,
    overflow: 'hidden',
  },

  progressBarFill: {
    backgroundColor: '#77C69F'
  },

  progressBarEmpty: {
    backgroundColor: '#F1F8F4',
  },

  card: {
    flexDirection: 'row',
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ECECEC',
    alignItems: 'flex-start',
  },

  cardCompleted: {
    backgroundColor: '#FFFFFF',
  },
  
  checkbox: {
    width: 22.4,
    height: 22.4,
    borderRadius: 5,
    borderWidth: 2.75,
    borderColor: '#BCBDBA',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginTop: 4,
  },

  checkboxChecked: {
    backgroundColor: '#49A275',
    borderColor: '#49A275',
  },

  cardText: {
    flex: 1,
  },

  taskTitle: {
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Inter-Medium',
  },

  taskTitleCompleted: {
    color: '#707070',
  },

  taskMeta: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#707070',
    marginTop: 5,
  },
});

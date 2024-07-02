import { Image, StyleSheet, Platform } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#89CFF0', dark: '##89CFF0' }}
      headerImage={
        <Image
          source={require('@/assets/images/Me.jpeg')}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">About Me</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
        <ThemedText>
          Hello, I am a student from Compton Early College Highschool my passions are
          collecting Action figures, hotwheels, and playing video games. My favorite
          animal are felines like cats, tigers, cheetahs ,etc. I am also part of my 
          schools roboitcs and coding club. My favorite sport is volleyball. I am 
          new to the TXT program but I hope to well. :D
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

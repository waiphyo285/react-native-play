import React, { useState } from 'react';
import { Card, useTheme } from 'react-native-paper';
import { View, Text, StyleSheet, Image } from 'react-native';
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';
import AtomCard from '../../atomics/atoms/Card';
import AtomButton from '../../atomics/atoms/Button';

const DiceGame = () => {
  const { colors } = useTheme();
  const rotate = useSharedValue(0);
  const translateY = useSharedValue(-200);
  const [result, setResult] = useState({ computer: 0, player: 0, winner: '' });
  const [config, setConfig] = useState({ showDice: false, showPlayBtn: true });

  const rollDice = () => {
    setConfig({ showDice: false, showPlayBtn: false });
    setResult({ computer: 0, player: 0, winner: '' });
    translateY.value = -320;
    rotate.value = 0;

    const playerRoll = Math.floor(Math.random() * 6) + 1;
    const computerRoll = Math.floor(Math.random() * 6) + 1;

    setTimeout(() => {
      setConfig(prev => ({ ...prev, showDice: true }));
      translateY.value = withTiming(0, { duration: 3000 });
      rotate.value = withTiming(720, { duration: 3000 });

      setTimeout(() => {
        let winner = "It's a tie round!";

        if (playerRoll > computerRoll) {
          winner = 'You are winner!';
        } else if (playerRoll < computerRoll) {
          winner = 'You are not winner!';
        }

        setConfig(prev => ({ ...prev, showPlayBtn: true }));
        setResult({ computer: computerRoll, player: playerRoll, winner });
      }, 3000);
    }, 500);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }, { rotate: `${rotate.value}deg` }],
    };
  });

  return (
    <View style={styles.container}>
      <View style={[styles.gradient, { backgroundColor: colors.secondary }]}></View>

      {config.showDice && (
        <Animated.View style={animatedStyle}>
          <Image source={require('../../assets/games/roll-dice.png')} style={styles.diceImage} />
        </Animated.View>
      )}

      {result.winner ? (
        <AtomCard style={{ ...styles.resultCard, backgroundColor: colors.primary }}>
          <Card.Content>
            <Text style={styles.resultText}>🧑 Player: {result.player}</Text>
            <Text style={styles.resultText}>🤖 Computer: {result.computer}</Text>
            <Text style={styles.resultText}>🍻 {result.winner}</Text>
          </Card.Content>
        </AtomCard>
      ) : null}

      {config.showPlayBtn && (
        <AtomButton text={result.winner ? 'Roll Again' : 'Roll Dice'} onPress={rollDice} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
    opacity: 0.5,
  },
  diceImage: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  resultCard: {
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
  },
  resultText: {
    fontSize: 20,
    marginVertical: 8,
  },
});

export default DiceGame;

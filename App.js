import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  const [ opponent, setOpponent ] = useState(null);
  const [ result, setResult ] = useState(null);


  const hands = {
    pedra: '✊🏿',
    papel: '🖐🏿',
    tesoura: '✌🏿'
  };//Obj

  const choices = Object.keys(hands);//array

  function move (choice){
    const index = Math.floor(Math.random() * choices.length);

    const pc = choices[index];

    const win1 = choice == 'pedra' && pc == 'tesoura';
    const win2 = choice == 'papel' && pc == 'pedra';
    const win3 = choice == 'tesoura' && pc == 'papel';

    if (choice == pc) {
      setResult('Empate');
    }else if (win1 || win2 || win3){
      setResult('Vitória!');
    }else{
      setResult('Derrota')
    }

    setOpponent(pc);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>JokenPô</Text>

      <View style={styles.tabela}>
        <View>
          <Text style={styles.a}>Oponente</Text>
          <Text style={styles.a}>{opponent == null ? '?' : hands[opponent]}</Text>
          <Text style={styles.a}>X</Text>
          <Text style={styles.a}>Você</Text>
          <View style={styles.emoji}>
            { choices.map((item) => (
              <TouchableOpacity key = {item} onPress={() => move(item)} style={styles.button}>
                <Text style={styles.a}>
                  {hands[item]}
                </Text>
              </TouchableOpacity>))}
          </View>
        </View>
        <Text style={styles.b}>{result}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD895',
    alignItems: 'center',
    padding: 60,//Todos os lados

  },
  tabela:{
    flex: 1,
    justifyContent: 'space-around'
  },
  emoji: {
    flexDirection: 'row',
    gap: 10,
  },
  titulo: {
    fontSize: 30,
    fontWeight: '500',
    color: '#73410B',
  },
  a: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,

  },
  b: {
    fontSize: 24,
    color: '#73410B',
    textAlign: 'center',
    fontWeight:'800',
  },
  button: {
    borderWidth: 2,
  },
});

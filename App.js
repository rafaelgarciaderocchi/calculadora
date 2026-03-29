import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [numero1, setNumero1] = useState(0);
  const [simbolo, setSimbolo] = useState("");
  const [resultado, setResultado] = useState("0");

  function Calcular(valor, acao) {
    if (acao === "limpar") {
      setResultado("0");
      setNumero1(0);
      setSimbolo("");
    } 
    else if (acao === "num") {
      setResultado(resultado === "0" ? String(valor) : resultado + valor);
    } 
    else if (acao === "op") {
      setNumero1(parseFloat(resultado)); 
      setSimbolo(valor); 
      setResultado("0");
    } else if (acao === "apagar") {
      setResultado(resultado.length > 1 ? resultado.slice(0, -1) : "0");
    } else if (acao === "=") {
      if (simbolo === "+") {
        setResultado(String(numero1 + parseFloat(resultado)));
      } 
      if (simbolo === "-") {
        setResultado(String(numero1 - parseFloat(resultado)));
      } 
      if (simbolo === "*") {
        setResultado(String(numero1 * parseFloat(resultado)));
      } 
      if (simbolo === "/") {
        setResultado(String(numero1 / parseFloat(resultado)));
      }

      setNumero1(0); 
      setSimbolo("");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora</Text>
      <View style={styles.display}>
        <Text style={{fontSize: 30}}>{resultado}</Text>
      </View> 
      <View style={styles.botoes}>
        <View style={styles.divisoes_dos_botoes}>
          <TouchableOpacity style={styles.botao} onPress={() => Calcular(null, "apagar")}>
            <Text>⌫</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => Calcular(null, "limpar")}>
            <Text>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao_2} onPress={() => Calcular("/", "op")}>
            <Text>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divisoes_dos_botoes}>
          <TouchableOpacity style={styles.botao} onPress={() => Calcular(7, "num")}>
            <Text>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => Calcular(8, "num")}>
            <Text>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => Calcular(9, "num")}>
            <Text>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => Calcular("*", "op")}>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divisoes_dos_botoes}>
          <TouchableOpacity style={styles.botao} onPress={() => Calcular(4, "num")}>
            <Text>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => Calcular(5, "num")}>
            <Text>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => Calcular(6, "num")}>
            <Text>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => Calcular("-", "op")}>
            <Text>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divisoes_dos_botoes}>
          <TouchableOpacity style={styles.botao} onPress={() => Calcular(1, "num")}>
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => Calcular(2, "num")}>
            <Text>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => Calcular(3, "num")}>
            <Text>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => Calcular("+", "op")}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divisoes_dos_botoes}>
          <TouchableOpacity style={styles.botao} onPress={() => Calcular(0, "num")}>
            <Text>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => Calcular(".", "num")}>
            <Text>,</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao_2} onPress={() => Calcular(null, "=")}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>=</Text>
          </TouchableOpacity>
      </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 40,
  },
  display: {
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginTop: 20,
    width: 250,
    marginBottom: 20,
    alignItems: 'flex-end' 
  },
  divisoes_dos_botoes: {
    flexDirection: "row"
  },
  botao: {
    borderColor: "#000",
    borderWidth: 1,
    margin: 3,
    borderRadius: 30, 
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center"
  }, 
  botao_2: {
    borderColor: "#000",
    borderWidth: 1,
    margin: 3,
    borderRadius: 20,
    width: 125,
    height: 60,
    justifyContent: "center",
    alignItems: "center"
  }
});

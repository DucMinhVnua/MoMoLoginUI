import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#ff1493" />
      <SafeAreaView style={styles.container}>
        <View style={styles.container1}>
          <Text style={styles.textLoiChao}>Xin Chào!</Text>
          <Text style={styles.textTieuDe}>Nguyễn Đức Minh</Text>
          <Text style={styles.textTieuDe}>098541526</Text>
        </View>
        <View style={styles.container2}>
          <View>
            <View style={styles.viewIcon}>
              <Foundation name="lock" size={25} color="#a9a9a9"/>
            </View>
            <TextInput
              placeholder="Nhập mật khẩu"
              placeholderTextColor="#a9a9a9"
              style={styles.inputPass}
              keyboardType='numeric'
              secureTextEntry={true}
              autoFocus={true}
              maxLength={6}
            />
          </View>
          <TouchableOpacity style={styles.dangNhap}>
            <Text style={styles.dangNhapText}>
              ĐĂNG NHẬP
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container3}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>
              QUÊN MẬT KHẨU
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>
              THOÁT TÀI KHOẢN
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#ff1493',
  },
  container1: {
    paddingTop: 50,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textLoiChao: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 10
  },
  textTieuDe: {
    marginBottom: 10,
    color: '#fff',
    fontSize: 20
  },
  container2: {
    marginHorizontal: 30,
  },
  viewIcon: {
    position: 'absolute',
    zIndex: 1,
    left: "8%",
    top: "45%"
  },
  inputPass: {
    marginTop: 20,
    fontSize: 19,
    borderColor: '#DDD',
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    paddingLeft: 100
  },
  dangNhap: {
    backgroundColor: '#c71585',
    height: 60,
    marginTop: 20,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dangNhapText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 19
  },
  container3: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20
  },
  btn: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: '#fff'
  },

});

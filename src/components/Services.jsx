import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AmazonPay from '../assets/amazon-pay.png'
import SendMoney from '../assets/send-money.jpg'
import PayBills from '../assets/pay-bills.jpeg'
import ScanQR from '../assets/scan-qr.jpeg'
import Service1 from '../assets/service1.jpeg'

const Services = () => {
  return (
    <ScrollView horizontal style={styles.container}>
        <View style={styles.serviceContainer}>
            <View style={styles.row}>
            <View style={styles.innerContainer}>
              <Image source={AmazonPay} style={styles.imgStyle}/>
              <Text style={styles.title}>Amazome Pay</Text>
            </View>
            <View style={styles.innerContainer}>
              <Image source={SendMoney} style={styles.imgStyle}/>
              <Text style={styles.title}>Send Money</Text>
            </View>
            </View>
            <View style={styles.row}>
            <View style={styles.innerContainer}>
              <Image source={ScanQR} style={styles.imgStyle}/>
              <Text style={styles.title}>Scen QR</Text>
            </View>
            <View style={styles.innerContainer}>
              <Image source={PayBills} style={styles.imgStyle}/>
              <Text style={styles.title}>Pay Bills</Text>
            </View>
            </View>
        </View>
        <View style={styles.outerCotainer}>
            <Text style={styles.recentSearch}>Keep Shopping</Text>
            <Image source={Service1} style={styles.serviceImg}/>
        </View>
    </ScrollView>
  )
}

export default Services

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container:{
        marginTop: -20,
        paddingHorizontal:10
    },
    serviceContainer:{
        backgroundColor: '#ffffff',
        borderRadius:5,
        elevation:5
    },
    imgStyle:{
        height:50,
        width:50,
        borderRadius:50
    },
    innerContainer:{
        padding:10,
        alignItems: 'center',
        paddingTop:15,
    },
    title:{
        fontSize:10,
        color: 'black',
        marginTop:2
    },
    serviceImg:{
        width: '100%',
        height: 120
    },
    outerCotainer:{
        backgroundColor: 'white',
        marginLeft: 5,
        borderRadius: 5,
        elevation: 5,
        padding:5,
        width:140
    },
    recentSearch:{
        fontSize:13,
        color: 'black',
        marginBottom: 8
    }
})

import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import BarcodeZxingScan from "react-native-barcode-zxing-scan";

const Apap = () => {
  const barcodeScanned = (data) => {
    console.log("Barcode ", data);
  };

  const handleClick = () => {
    console.log('a');
    BarcodeZxingScan.showQrReader(barcodeScanned);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => handleClick()}
        style={{
          margin: 20,
          backgroundColor: "blue",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 30 }}>SCAN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Apap;
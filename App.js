import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Communications from "react-native-communications";
import Icon from "react-native-vector-icons/FontAwesome";

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  const handleSendTextMessage = () => {
    Communications.text(phoneNumber, "se envio su numero 35148478");
  };

  const handleSendEmail = () => {
    Communications.email(
      [emailAddress],
      null,
      null,
      "IsmaelZaret409@accitesz.com, a sido capturado correctamente",
    
    );
  };
   return (
    <View>
      <Text style={{ fontSize: 24, textAlign: "center", marginVertical: 20 }}>
        APP  Comunicaciones
      </Text>
      <TextInput
        placeholder="Ingrese un número de teléfono"
        style={{
          padding: 10,
          marginHorizontal: 20,
          marginBottom: 10,
          borderWidth: 1,
          borderColor: "black",
        }}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TouchableOpacity
        onPress={handleSendTextMessage}
        style={{
          backgroundColor: "red",
          padding: 10,
          borderRadius: 5,
          marginHorizontal: 20,
        }}
      >
        <Icon
          name="envelope-o"
          size={20}
          color="red"
          style={{ marginRight: 5 }}
        />
        <Text style={{ color: "red" }}>Mensaje</Text>
      </TouchableOpacity>
      <TextInput
        placeholder="tu direccion de correo es :"
        style={{
          padding: 10,
          marginHorizontal: 20,
          marginTop: 20,
          marginBottom: 10,
          borderWidth: 1,
          borderColor: "black",
        }}
        value={emailAddress}
        onChangeText={setEmailAddress}
      />
      <TouchableOpacity
        onPress={handleSendEmail}
        style={{
          backgroundColor: "green",
          padding: 10,
          borderRadius: 5,
          marginHorizontal: 20,
        }}
      >
         <Icon
          name="envelope"
          size={20}
          color="red"
          style={{ marginRight: 5 }}
        />
        <Text style={{ color: "white" }}>Email</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;




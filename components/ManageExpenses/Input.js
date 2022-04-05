import { View, Text, TextInput, StyleSheet } from "react-native";

const Input = ({ textLabel, inputConfig, style, isInvalid }) => {
   const inputStyles = [styles.input];
   //const isInvalid = false;

   if (inputConfig && inputConfig.multiline === true) {
      inputStyles.push(styles.inputMultiline);
   }

   if (isInvalid) {
      inputStyles.push(styles.errorInput);
   }

   return (
      <View style={[styles.inputContainer, style]}>
         <Text style={[styles.label, isInvalid && styles.errorLabel]}>
            {textLabel}
         </Text>
         <TextInput {...inputConfig} style={inputStyles} />
      </View>
   );
};

export default Input;

const styles = StyleSheet.create({
   inputContainer: {
      marginVertical: 5,
   },
   label: {
      color: "white",
      fontSize: 12,
      marginBottom: 3,
   },
   input: {
      backgroundColor: "#dccaff",
      borderRadius: 5,
      paddingHorizontal: 5,
   },
   inputMultiline: {
      minHeight: 100,
      textAlignVertical: "top",
   },
   errorLabel: {
      color: "#ff3838",
   },
   errorInput: {
      backgroundColor: "#ffbcbc",
   },
});

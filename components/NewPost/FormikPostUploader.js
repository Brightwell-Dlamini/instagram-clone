import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import * as Yup from "yup";
import { Formik } from "formik";
import { Divider } from "react-native-elements";
import ValidUrl from "valid-url";

const PLACEHOLDER_IMG =
  "https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=";
const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("A URL is required"),
  caption: Yup.string().max(2200, " Caption has reached the character"),
});
const FormikPostUploader = ({ navigation }) => {
  const [thumbanailUrl, setThumbanailUrl] = useState(PLACEHOLDER_IMG);

  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values) => {
        console.log(values);
        console.log("Your Post was submitted successfully");
        navigation.goBack();
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <>
          <View
            style={{
              margin: 20,
              justifyContent: "space-around",
              flexDirection: "row",
            }}
          >
            <Image
              source={{
                uri: thumbanailUrl ? thumbanailUrl : PLACEHOLDER_IMG,
              }}
              style={{ width: 100, height: 100 }}
            />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <TextInput
                placeholder="Write a caption..."
                placeholderTextColor="gray"
                multiline={true}
                onChangeText={handleChange("caption")}
                onBlur={handleBlur("caption")}
                value={values.caption}
                style={{ color: "white", fontSize: 20 }}
              ></TextInput>
            </View>
          </View>
          <Divider width={0.2} orientation="vertical" />
          <TextInput
            onChange={(e) => setThumbanailUrl(e.nativeEvent.text)}
            placeholder="Enter Image url"
            placeholderTextColor="gray"
            style={{ color: "white", fontSize: 18 }}
            onChangeText={handleChange("imageUrl")}
            onBlur={handleBlur("imageUrl")}
            value={values.imageUrl}
          ></TextInput>
          {errors.imageUrl && (
            <Text style={{ fontSize: 10, color: "red" }}>
              {errors.imageUrl}
            </Text>
          )}
          <Button onPress={handleSubmit} title="share" disabled={!!isValid} />
        </>
      )}
    </Formik>
  );
};

export default FormikPostUploader;

const styles = StyleSheet.create({});

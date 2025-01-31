import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View className="flex items-center justify-center h-full">
      <Text className="text-3xl font-pblack">index</Text>
      <Link href="/home" className="text-blue-500">
        Go to Home
      </Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});

import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Onboarding() {
  return (
      <SafeAreaView className="h-full items-center ">
         <TouchableOpacity className='w-full justify-end items-end p-5'>
            <Text className="font-JakartaBold">Skip</Text>
         </TouchableOpacity>
      </SafeAreaView>
  );
}

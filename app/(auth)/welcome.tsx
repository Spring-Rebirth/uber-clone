import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import onboarding1 from '@/assets/images/onboarding1.png';

export default function Onboarding() {
   return (
      <SafeAreaView className="h-full items-center">
         <TouchableOpacity
            className='w-full justify-end items-end p-5'
            onPress={() => {
               router.replace('/(auth)/sign-up');
            }}
         >

            <Text className="font-JakartaBold">Skip</Text>

         </TouchableOpacity>

         <View className="w-full h-auto items-center justify-start my-6">
            <Image
               className="w-full h-80"
               source={onboarding1}
               resizeMode="contain"
            />
         </View>
      </SafeAreaView>
   );
}

import { View, Text, TouchableOpacity, Image } from "react-native";
import {useRef} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Swiper from 'react-native-swiper';
import {onboarding} from "@/types/constants";

export default function Onboarding() {
    const swiperRef = useRef<Swiper>(null);

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
         <Swiper
            ref={swiperRef}
         >
             {onboarding.map(item => (
                 <View
                     className="w-full h-auto items-center justify-start my-6"
                     key={item.id}
                 >
                     <Image
                         className="w-full h-[300]"
                         source={item.image}
                         resizeMode="contain"
                     />
                 </View>
             ))}

         </Swiper>
      </SafeAreaView>
   );
}

import React, { Text, TouchableOpacity } from "react-native";
import { ReactElement } from "react";

export function CustomButton({ title }: { title: string }): ReactElement {
    return (
        <TouchableOpacity
            className={'w-11/12 h-16 rounded-full bg-blue-500 justify-center items-center \
                        my-6'}
            onPress={() => {

            }}
        >
            <Text className={'text-white text-xl'}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}
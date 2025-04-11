import { View, Image, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

export interface SearchBarProps {
    placeholder: string
    onPress?: () => void
    value: string
    onChangeText: (text: string) => void
}

const SearchBar = ({ placeholder, onPress, value, onChangeText }: SearchBarProps) => {
    return (
        <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-2'>
            <Image source={icons.search} className='size-5' resizeMode='contain' tintColor="#ab8bff" />

            <TextInput
                onPress={onPress}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor="#ffffff50"
                className='flex-1 ml-2 text-zinc-300'
            />
        </View>
    )
}

export default SearchBar
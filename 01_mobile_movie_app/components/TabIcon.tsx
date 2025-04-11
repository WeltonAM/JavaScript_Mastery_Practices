import { Text, ImageBackground, Image, View } from 'react-native'
import React from 'react'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'

export interface TabIconProps {
    focused: boolean
    icon: keyof typeof icons;
    title: string
}

const TabIcon = ({ focused, icon, title }: TabIconProps) => {
    if (focused) {
        return (
            <ImageBackground
                source={images.highlight}
                className="flex flex-row flex-1 min-w-[85px] min-h-12 mt-4 justify-center items-center rounded-full overflow-hidden"
            >
                <Image
                    source={icons[icon]}
                    tintColor='#151312'
                    className='size-4'
                />

                <Text
                    className='text-secondary text-base font-semibold ml-2'
                >
                    {title}
                </Text>
            </ImageBackground >
        )
    }

    return (
        <View className='size-full justify-center items-center mt-4 rounded-full'>
            <Image
                source={icons[icon]}
                tintColor='#A8B5DB'
                className='size-4'
            />
        </View >
    )
}

export default TabIcon
import { View, Image, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import MaskedView from '@react-native-masked-view/masked-view'
import { LinearGradient } from 'expo-linear-gradient'

export interface TrendingCardProps {
    movie: {
        movie_id: number
        title: string
        poster_url: string
    }
    index: number
}

const TrendingCard = ({ movie: { movie_id, title, poster_url }, index }: TrendingCardProps) => {
    return (
        <Link href={`/movies/${movie_id}`} asChild>
            <TouchableOpacity className="w-32 relative pl-5">
                <Image
                    source={{ uri: poster_url }}
                    className="w-32 h-48 rounded-lg"
                    resizeMode="cover"
                />

                <View className="absolute bottom-9 -left-3.5 px-2 py-1 rounded-full">
                    <Text
                        className="font-bold text-6xl ml-2 text-black absolute"
                        style={{
                            opacity: 0.7,
                            left: 10,
                            top: 6,
                            zIndex: 0,
                        }}
                    >
                        {index + 1}
                    </Text>

                    <MaskedView
                        maskElement={
                            <Text className="font-bold text-6xl ml-2 text-white">
                                {index + 1}
                            </Text>
                        }
                    >
                        <LinearGradient
                            colors={['#494957', '#FFFFFF']}
                            start={{ x: 0.5, y: 1 }}
                            end={{ x: 0.5, y: 0 }}
                            style={{ width: 56, height: 56 }}
                        />
                    </MaskedView>
                </View>

                <Text className="text-sm font-bold mt-2 text-light-200" numberOfLines={2}>
                    {title}
                </Text>
            </TouchableOpacity>
        </Link>
    )
}

export default TrendingCard

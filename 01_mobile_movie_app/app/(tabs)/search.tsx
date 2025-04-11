import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { images } from '@/constants/images'
import { useRouter } from 'expo-router';
import useFetch from '@/services/useFetch';
import { fetchPopularMovies } from '@/services/api';
import MovieCard from '@/components/MovieCard';
import { icons } from '@/constants/icons';
import SearchBar from '@/components/SearchBar';

const Search = () => {
    const router = useRouter();

    const { data: movies, loading, error } = useFetch(() => fetchPopularMovies({ query: '' }));

    return (
        <View className='flex-1 bg-primary'>
            <Image source={images.bg} className='flex-1 absolute w-full z-0' resizeMode='cover' />

            <FlatList
                data={movies}
                renderItem={({ item }) => <MovieCard {...item} />}
                keyExtractor={(item) => item.id.toString()}
                className="px-5"
                numColumns={3}
                columnWrapperStyle={{
                    justifyContent: 'flex-start',
                    gap: 16,
                    marginVertical: 16,
                }}
                contentContainerStyle={{ paddingBottom: 100 }}
                ListHeaderComponent={
                    <>
                        <View className='w-full flex-row justify-center mt-20 items-center'>
                            <Image source={icons.logo} className='w-12 h-10' />
                        </View>

                        <View className='my-5'>
                            <SearchBar placeholder='Search movies...' />
                        </View>

                        {loading && (
                            <ActivityIndicator size="large" color="#0000ff" />
                        )}
                    </>
                }
            />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({})
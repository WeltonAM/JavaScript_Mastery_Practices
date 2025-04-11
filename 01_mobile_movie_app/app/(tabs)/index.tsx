import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import TrendingCard from "@/components/TrendingCard";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchPopularMovies } from "@/services/api";
import { getTrendingMovies } from "@/services/appwrite";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import React from "react";

export default function Index() {
  const router = useRouter();

  const {
    data: trendingMovies,
    loading: trendingLoading,
    error: trendingError,
  } = useFetch(getTrendingMovies);

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchPopularMovies({ query: '' }));

  const isLoading = moviesLoading || trendingLoading;
  const isError = moviesError || trendingError;

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center bg-primary">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (isError) {
    return (
      <View className="flex-1 justify-center items-center bg-primary px-5">
        <Text className="text-red-500 text-center">{moviesError?.message || trendingError?.message}</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full h-full z-0" />

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        renderItem={({ item }) => <MovieCard {...item} />}
        columnWrapperStyle={{
          justifyContent: 'flex-start',
          gap: 20,
          paddingRight: 5,
          marginBottom: 15,
        }}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 60,
          paddingBottom: 100,
        }}
        ListHeaderComponent={() => (
          <>
            <Image source={icons.logo} className="w-12 h-10 mb-5 mx-auto" />

            <SearchBar
              placeholder="Search for a movie"
              onPress={() => router.push('/search')}
            />

            {trendingMovies && (
              <View className="mt-10">
                <Text className="text-lg text-zinc-400 font-bold mb-3">
                  Trending Movies
                </Text>

                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  ItemSeparatorComponent={() => <View className="w-4 mx-2" />}
                  data={trendingMovies}
                  renderItem={({ item, index }) => (
                    <TrendingCard movie={item} index={index} />
                  )}
                  keyExtractor={(item) => item.movie_id.toString()}
                  contentContainerStyle={{ paddingLeft: 5 }}
                />
              </View>
            )}

            <Text className="text-lg text-zinc-300 font-bold mt-8 mb-3">Latest Movies</Text>
          </>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}


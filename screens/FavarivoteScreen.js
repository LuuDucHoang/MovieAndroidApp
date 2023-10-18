import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
  Dimensions,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { getFavoriteListMovie } from "../api/moviedb";
import { MovieCard } from "../components/trendingMovies";
import { useNavigation } from "@react-navigation/native";
import { XMarkIcon } from "react-native-heroicons/solid";

var { width, height } = Dimensions.get("window");

const FavarivoteScreen = () => {
  const [movieList, setMovieList] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    getFavoriteListMovies();
  });
  const getFavoriteListMovies = async () => {
    const data = await getFavoriteListMovie();
    if (data) {
      setMovieList(data.results);
    }
  };

  const handleClick = (item) => {
    navigation.navigate("Movie", item);
  };

  return (
    <View className="flex-1 bg-neutral-800">
      <Text
        style={{
          color: "#fff",
          fontSize: 30,
          marginTop: 30,
          marginLeft: 6,
        }}
      >
        Favarivote Movie List
      </Text>
      <ScrollView
        style={{
          marginTop: 50,
          height: "100%",
          overflow: "scroll",
        }}
      >
        {movieList
          ? movieList.map((item) => {
              return (
                <View style={{ alignItems: "center" }}>
                  <MovieCard handleClick={handleClick} item={item} />
                  <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 18,
                        width: width * 0.6,
                        marginTop: 10,
                        marginBottom: 20,
                      }}
                    >
                      {item?.original_title}
                    </Text>
                
                  </View>
                </View>
              );
            })
          : ""}
      </ScrollView>
    </View>
  );
};

export default FavarivoteScreen;

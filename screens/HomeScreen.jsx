import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import ListItem from '../components/ListItem';
import Loading from '../components/Loading';
import Constants from 'expo-constants';
import axios from 'axios';

const URL = `http://newsapi.org/v2/top-headlines?country=jp&apiKey=${Constants.manifest.extra.newsApiKey}`;

export default HomeScreen = ({ navigation }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        setLoading(true);
        try {
            const response = await axios.get(URL);
            setArticles(response.data.articles);
        } catch (err) {
            console.error(err);
        }
        setLoading(false);
    };

    return (
        <SafeAreaView>
            <FlatList
                data={articles}
                renderItem={({ item }) => (
                    <ListItem
                        author={item.author}
                        title={item.title}
                        imageUrl={item.urlToImage}
                        onPress={() => {
                            navigation.navigate('Article', {
                                article: item,
                            });
                        }}
                    />
                )}
                keyExtractor={(_, index) => index.toString()}
            ></FlatList>
            {loading && <Loading />}
        </SafeAreaView>
    );
};

// 478112b12f0b4cb8bb53d18e67b88608

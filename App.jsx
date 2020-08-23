import React from 'react';
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native';
import ListItem from './components/ListItem';
import articles from './dummies/articles.json';

export default function App() {
    return (
        <SafeAreaView>
            <FlatList
                data={articles}
                renderItem={({ item }) => (
                    <ListItem
                        author={item.author}
                        title={item.title}
                        imageUrl={item.urlToImage}
                    />
                )}
                keyExtractor={(_, index) => index.toString()}
            ></FlatList>
        </SafeAreaView>
    );
}

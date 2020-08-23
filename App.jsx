import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View style={this.style.container}>
                <View style={this.style.itemContainer}>
                    <View style={this.style.leftContainer}>
                        <Image
                            style={{ height: 100, width: 100 }}
                            source={{ uri: 'https://picsum.photos/200/200' }}
                        />
                    </View>
                    <View style={this.style.rightContainer}>
                        <Text numberOfLines={3} style={this.style.text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </Text>
                        <Text style={this.style.subText}>React News</Text>
                    </View>
                </View>
            </View>
        );
    }

    style = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        itemContainer: {
            height: 100,
            width: '100%',
            borderColor: 'gray',
            borderWidth: 1,
            flexDirection: 'row',
        },
        leftContainer: {
            width: 100,
        },
        rightContainer: {
            flex: 1,
            flexDirection: 'column',
            padding: 10,
            justifyContent: 'space-between',
        },
        text: {
            fontSize: 16,
        },
        subText: {
            fontSize: 12,
            color: 'gray',
        },
    });
}

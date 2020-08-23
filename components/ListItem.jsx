import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

export default ListItem = (props) => {
    return (
        <TouchableOpacity style={style.itemContainer} onPress={props.onPress}>
            <View style={style.leftContainer}>
                {!!props.imageUrl && (
                    <Image
                        style={{ height: 100, width: 100 }}
                        source={{ uri: props.imageUrl }}
                    />
                )}
            </View>
            <View style={style.rightContainer}>
                <Text numberOfLines={3} style={style.text}>
                    {props.title}
                </Text>
                <Text style={style.subText}>{props.author}</Text>
            </View>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
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

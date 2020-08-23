import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default ArticleScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <WebView source={{ uri: 'https://expo.io' }} />;
        </SafeAreaView>
    );
};

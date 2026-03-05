import { Text, View, StyleSheet } from "react-native";

export default function SendScreenComponent() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Send Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white', // This will respect your theme if you connect it
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
})
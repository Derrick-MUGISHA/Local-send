import { Text, View, StyleSheet } from "react-native";



function getGreeting() {
  const h = new Date().getHours();
  if (h >= 5  && h < 12) return { text: "Good Morning"};
  if (h >= 12 && h < 17) return { text: "Good Afternoon"};
  if (h >= 17 && h < 21) return { text: "Good Evening"};
  return                         { text: "Good Night"};
}


export default function GreetingsScreenComponent () {
    const greeting   = getGreeting();

    return (
        <View style={styles.welcomeSection}>
        <Text style={styles.welcomeTitle}>{greeting.text}</Text>
        <Text style={styles.welcomeSubtitle}>Manage your mobile money easily</Text>
      </View>
    )
}

const styles = StyleSheet.create({
welcomeSection: { marginBottom: 20, alignItems: "center" },
welcomeTitle:   { fontSize: 24, fontWeight: "800", color: "#0F172A", letterSpacing: -0.5 },
welcomeSubtitle:{ fontSize: 14, color: "#64748B", marginTop: 4 },
})
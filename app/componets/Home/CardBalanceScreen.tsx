import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";



export  default function CardBalanceScreen() {
    const [showBalance, setShowBalance] = useState(true);

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>Total Balance</Text>
        <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
          <Ionicons
            name={showBalance ? "eye" : "eye-off"}
            size={22}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.balanceText}>
        {showBalance ? "25,400 RWF" : "••••••"}
      </Text>
      <View style={styles.simContainer}>
        <View style={styles.simBadge}>
          <Text style={styles.simText}>MTN - 078xxxx123</Text>
        </View>
        <View style={styles.simBadge}>
          <Text style={styles.simText}>Airtel - 073xxxx456</Text>
        </View>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
card: { backgroundColor: "#4F46E5", borderRadius: 20, padding: 20, marginBottom: 15, elevation: 6 },
container: { flex: 1, backgroundColor: "#F3F4F6", paddingHorizontal: 16, paddingTop: 60 },
cardHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
cardTitle: { color: "#fff", fontSize: 16, fontWeight: "600" },
balanceText: { color: "#fff", fontSize: 30, fontWeight: "700", marginTop: 10 },
simContainer: { flexDirection: "row", marginTop: 15, gap: 10 },
simBadge: { backgroundColor: "rgba(255,255,255,0.2)", paddingVertical: 6, paddingHorizontal: 12, borderRadius: 20 },
simText: { color: "#fff", fontSize: 12 },
});

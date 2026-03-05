import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";


const QUICK_ACTIONS = [
  { icon: "send",          label: "Send",     screen: "Send"    },
  { icon: "download",      label: "Receive",  screen: "Receive" },
  { icon: "call",          label: "Airtime",  screen: "Airtime" },
  { icon: "receipt",       label: "Pay Bill", screen: "PayBill" },
] as const;


export default function QuickActionsComponent() {
    const navigation = useNavigation<any>();

    return (
  <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionsRow}>
          {QUICK_ACTIONS.map((item, i) => (
            <TouchableOpacity
              key={i}
              style={styles.actionItem}
              activeOpacity={0.75}
              onPress={() => navigation.navigate(item.screen)}
            >
              <View style={styles.actionIconWrap}>
                <Ionicons name={item.icon as any} size={25} color="#4F46E5" />
              </View>
              <Text style={styles.actionLabel}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  section:      { marginBottom: 16 },
  sectionTitle: { fontSize: 17, fontWeight: "700", marginBottom: 12, color: "#0F172A" },
  actionsRow: { flexDirection: "row", justifyContent: "space-between" },
  actionItem: {
    backgroundColor: "#fff",
    width: "22%",
    paddingVertical: 16,
    alignItems: "center",
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 3,
  },
  actionIconWrap: { justifyContent: "center", alignItems: "center" },
  actionLabel: { fontSize: 11, fontWeight: "600", color: "#374151" },
});
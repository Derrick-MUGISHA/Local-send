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
                <Ionicons name={item.icon as any} size={22} color="#4F46E5" />
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
  actionsRow:   { flexDirection: "row", justifyContent: "space-between" },
  actionItem:   { alignItems: "center" },
  actionIconWrap: { width: 40, height: 40, borderRadius: 12, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(79, 70, 229, 0.1)" },
  actionLabel:    { fontSize: 12, fontWeight: "600", marginTop: 4, color: "#4F46E5" },
});
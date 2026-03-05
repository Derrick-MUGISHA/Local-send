import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, ScrollView, Text, TouchableOpacity, View, StyleSheet } from "react-native";


type Transaction = {
  id: string;
  network: "MTN" | "Airtel";
  amount: number;
  dateLabel: string;
  daysAgo: number;
  description: string;
  time: string;
};


const TRANSACTIONS: Transaction[] = [
  { id: "1", network: "MTN",    amount: -2000,  dateLabel: "Today",      daysAgo: 0, description: "Airtime",  time: "08:30 AM" },
  { id: "2", network: "Airtel", amount: -5000,  dateLabel: "Yesterday",  daysAgo: 1, description: "Airtime",  time: "03:15 PM" },
  { id: "3", network: "MTN",    amount: 10000,  dateLabel: "2 days ago", daysAgo: 2, description: "Received", time: "11:00 AM" },
  { id: "4", network: "Airtel", amount: -1500,  dateLabel: "3 days ago", daysAgo: 3, description: "Airtime",  time: "09:45 AM" },
  { id: "5", network: "MTN",    amount: -700,   dateLabel: "4 days ago", daysAgo: 4, description: "Airtime",  time: "02:20 PM" },
  { id: "6", network: "Airtel", amount: -3000,  dateLabel: "5 days ago", daysAgo: 5, description: "Airtime",  time: "06:10 PM" },
  { id: "7", network: "MTN",    amount: 25000,  dateLabel: "6 days ago", daysAgo: 6, description: "Received", time: "10:05 AM" },
  { id: "8", network: "Airtel", amount: -800,   dateLabel: "7 days ago", daysAgo: 7, description: "Airtime",  time: "04:50 PM" },
];


const NETWORK_STYLE: Record<string, { bg: string; text: string}> = {
  MTN:    { bg: "#FFCC00", text: "#1A1A1A"},
  Airtel: { bg: "#E40000", text: "#FFFFFF"},
};


const FilterChip = ({
  label,
  active,
  activeColor = "#4F46E5",
  onPress,
}: {
  label: string;
  active: boolean;
  activeColor?: string;
  onPress: () => void;
}) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.75}
    style={[
      styles.chip,
      active
        ? {
            backgroundColor: activeColor,
            borderColor: activeColor,
            shadowColor: activeColor,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.35,
            shadowRadius: 8,
            elevation: 6,
          }
        : styles.chipInactive,
    ]}
  >
    <Text style={[
      styles.chipText,
      active ? styles.chipTextActive : styles.chipTextInactive,
    ]}>
      {label}
    </Text>
  </TouchableOpacity>
);


export default function TransactionHistoryComponent() {

  const [networkFilter, setNetworkFilter] = useState("All");

  const filtered = TRANSACTIONS.filter((t) => {
    return networkFilter === "All" || t.network === networkFilter;
  });

  return (
    <View style={[styles.section, { flex: 1 }]}>

   
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>Recent Transactions</Text>
        <TouchableOpacity style={styles.seeAllBtn} activeOpacity={0.7}>
          <Text style={styles.seeAllText}>See all</Text>
          <Ionicons name="chevron-forward" size={13} color="#4F46E5" />
        </TouchableOpacity>
      </View>


      <View style={styles.filterWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={styles.filterBar}
        >
          <Text style={styles.filterLabel}></Text>
          {["All", "MTN", "Airtel"].map((v) => (
            <FilterChip
              key={"n-" + v}
              label={v}
              active={networkFilter === v}
              activeColor={v === "MTN" ? "#C49B00" : v === "Airtel" ? "#E40000" : "#4F46E5"}
              onPress={() => setNetworkFilter(v)}
            />
          ))}
        </ScrollView>
      </View>

      {filtered.length === 0 && (
        <View style={styles.emptyState}>
          <View style={styles.emptyIconWrap}>
            <Ionicons name="receipt-outline" size={32} color="#A5B4FC" />
          </View>
          <Text style={styles.emptyTitle}>No transactions found</Text>
          <Text style={styles.emptySubtext}>Try changing the filter above</Text>
        </View>
      )}

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          const ns = NETWORK_STYLE[item.network];
          const isIncoming = item.amount > 0;
          return (
            <View style={styles.txItem}>

              <View style={styles.txLeft}>
                <View style={[
                  styles.txIconWrap,
                  { backgroundColor: isIncoming ? "#DCFCE7" : "#FEE2E2" },
                ]}>
                  <Ionicons
                    name={isIncoming ? "arrow-down-outline" : "arrow-up-outline"}
                    size={18}
                    color={isIncoming ? "#16A34A" : "#DC2626"}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.txDesc}>{item.description}</Text>
                  <Text style={styles.txMeta}>{item.dateLabel} · {item.time}</Text>
                </View>
              </View>

              <View style={styles.txRight}>
                <Text style={[styles.txAmount, { color: isIncoming ? "#16A34A" : "#DC2626" }]}>
                  {isIncoming ? "+" : ""}{item.amount.toLocaleString()} RWF
                </Text>
                <View style={[styles.networkBadge, { backgroundColor: ns.bg }]}>
                  <Text style={[styles.networkText, { color: ns.text }]}>{item.network}</Text>
                </View>
              </View>

            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  section: { marginBottom: 16 },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#0F172A",
    letterSpacing: -0.3,
  },

  seeAllBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    backgroundColor: "#EEF2FF",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },

  seeAllText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#4F46E5",
  },

  filterWrapper: {
    height: 50,
    overflow: "hidden",
    marginBottom: 10,
  },

  filterBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 2,
    paddingVertical: 4,
  },

  filterLabel: {
    fontSize: 11,
    fontWeight: "800",
    color: "#94A3B8",
    marginRight: 8,
    marginLeft: 2,
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },

  chip: {
    borderRadius: 20,
    marginRight: 8,
    paddingVertical: 7,
    paddingHorizontal: 16,
    borderWidth: 1.5,
  },

  
  chipInactive: {
    backgroundColor: "#fff",
    borderColor: "#fff",
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 3,
    elevation: 1,
  },

  chipText: { fontSize: 12, fontWeight: "600" },

  chipTextActive: {
    color: "#FFFFFF",
    fontWeight: "700",
    letterSpacing: 0.2,
  },

  chipTextInactive: {
    color: "#334155",   
    fontWeight: "600",
  },

  
  txItem: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 14,
    paddingHorizontal: 15,
    borderRadius: 18,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
    borderWidth: 1,
    borderColor: "#fff",
  },

  txLeft: { flexDirection: "row", alignItems: "center", gap: 12, flex: 1 },

  txIconWrap: {
    width: 46,
    height: 46,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  txDesc: {
    fontSize: 14,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 2,
  },

  txMeta: {
    fontSize: 11,
    color: "#94A3B8",
    fontWeight: "500",
  },

  txRight: { alignItems: "flex-end", gap: 6 },

  txAmount: {
    fontSize: 14,
    fontWeight: "800",
    letterSpacing: -0.3,
  },

  networkBadge: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
  },

  networkText: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 0.4,
  },

  emptyState: {
    alignItems: "center",
    paddingVertical: 48,
    gap: 6,
  },

  emptyIconWrap: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: "#EEF2FF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },

  emptyTitle: {
    fontSize: 15,
    color: "#475569",
    fontWeight: "700",
  },

  emptySubtext: {
    fontSize: 12,
    color: "#94A3B8",
    fontWeight: "500",
  },
});
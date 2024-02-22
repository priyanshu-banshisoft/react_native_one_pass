import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  Clipboard,
} from "react-native";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
import { Ionicons } from "@expo/vector-icons";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [isFocused, setFocused] = useState(false);
  const list = [
    { name: "Facebook", logo: "https://img.icons8.com/2266EE/facebook" },
    { name: "Netflix", logo: "https://img.icons8.com/2266EE/netflix" },
    { name: "Google", logo: "https://img.icons8.com/2266EE/google" },
    { name: "Amazon", logo: "https://img.icons8.com/2266EE/amazon" },
    { name: "Microsoft", logo: "https://img.icons8.com/2266EE/microsoft" },
  ];

  const [data, setData] = useState(list);
  const searchFunction = (text) => {
    setSearch(text);
    text = text.toLowerCase();
    if (text === "") {
      setData(list);
    } else {
      let filteredData = list.filter((item) =>
        item.name.toLowerCase().match(text)
      );
      setData(filteredData);
    }
  };
  return (
    <View style={styles.container}>
      <Svg
        width={22}
        height={12}
        viewBox="0 0 22 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M2 10H20C20.55 10 21 10.45 21 11C21 11.55 20.55 12 20 12H2C1.45 12 1 11.55 1 11C1 10.45 1.45 10 2 10ZM1.5 5.57004C1.86 5.78004 2.32 5.65004 2.53 5.29004L3 4.47004L3.48 5.30004C3.69 5.66004 4.15 5.78004 4.51 5.58004C4.87 5.37004 4.99 4.92004 4.79 4.56004L4.3 3.72004H5.25C5.66 3.72004 6 3.38004 6 2.97004C6 2.56004 5.66 2.22004 5.25 2.22004H4.3L4.77 1.40004C4.98 1.04004 4.86 0.580044 4.5 0.370044C4.32574 0.27304 4.12045 0.248026 3.92799 0.300345C3.73554 0.352663 3.57117 0.478166 3.47 0.650044L3 1.47004L2.53 0.650044C2.42883 0.478166 2.26446 0.352663 2.07201 0.300345C1.87955 0.248026 1.67426 0.27304 1.5 0.370044C1.14 0.580044 1.02 1.04004 1.23 1.40004L1.7 2.22004H0.75C0.34 2.22004 0 2.56004 0 2.97004C0 3.38004 0.34 3.72004 0.75 3.72004H1.7L1.22 4.55004C1.02 4.91004 1.14 5.37004 1.5 5.57004ZM9.5 5.57004C9.86 5.78004 10.32 5.65004 10.53 5.29004L11 4.47004L11.48 5.30004C11.69 5.66004 12.15 5.78004 12.51 5.58004C12.87 5.37004 12.99 4.92004 12.79 4.56004L12.31 3.73004H13.26C13.67 3.73004 14.01 3.39004 14.01 2.98004C14.01 2.57004 13.67 2.23004 13.26 2.23004H12.3L12.77 1.41004C12.8689 1.23721 12.896 1.03247 12.8455 0.839856C12.795 0.647238 12.671 0.48213 12.5 0.380044C12.4153 0.330786 12.3217 0.298696 12.2246 0.285607C12.1275 0.272518 12.0288 0.278686 11.9341 0.303759C11.8394 0.328832 11.7505 0.372318 11.6726 0.431734C11.5947 0.49115 11.5292 0.565332 11.48 0.650044L11 1.47004L10.53 0.650044C10.4811 0.564937 10.4159 0.490367 10.338 0.430649C10.2602 0.370931 10.1712 0.327252 10.0764 0.302141C9.98149 0.27703 9.88259 0.270986 9.78537 0.284358C9.68816 0.29773 9.59456 0.330253 9.51 0.380044C9.15 0.590044 9.03 1.05004 9.24 1.41004L9.71 2.23004H8.75C8.65198 2.22872 8.55468 2.24688 8.46374 2.28348C8.3728 2.32007 8.29004 2.37437 8.22026 2.44322C8.15049 2.51206 8.09508 2.59409 8.05727 2.68453C8.01946 2.77497 7.99999 2.87202 8 2.97004C8 3.38004 8.34 3.72004 8.75 3.72004H9.7L9.22 4.55004C9.02 4.91004 9.14 5.37004 9.5 5.57004ZM22 2.97004C22 2.56004 21.66 2.22004 21.25 2.22004H20.3L20.77 1.40004C20.8689 1.22721 20.896 1.02247 20.8455 0.829856C20.795 0.637238 20.671 0.47213 20.5 0.370044C20.4153 0.320786 20.3217 0.288696 20.2246 0.275607C20.1275 0.262518 20.0288 0.268686 19.9341 0.293759C19.8394 0.318831 19.7505 0.362317 19.6726 0.421734C19.5947 0.48115 19.5292 0.555332 19.48 0.640044L19 1.47004L18.53 0.650044C18.4811 0.564937 18.4159 0.490367 18.338 0.430649C18.2602 0.370931 18.1712 0.327252 18.0764 0.302141C17.9815 0.27703 17.8826 0.270986 17.7854 0.284358C17.6882 0.29773 17.5946 0.330253 17.51 0.380044C17.15 0.590044 17.03 1.05004 17.24 1.41004L17.71 2.23004H16.76C16.6613 2.22778 16.5631 2.24523 16.4711 2.28137C16.3792 2.31751 16.2954 2.37161 16.2247 2.44051C16.1539 2.50941 16.0976 2.59173 16.059 2.68265C16.0204 2.77358 16.0004 2.87128 16 2.97004C16 3.38004 16.34 3.72004 16.75 3.72004H17.7L17.22 4.55004C17.1703 4.63513 17.1382 4.72928 17.1254 4.82697C17.1126 4.92466 17.1194 5.02391 17.1455 5.11892C17.1716 5.21392 17.2164 5.30277 17.2773 5.38023C17.3381 5.4577 17.4139 5.52223 17.5 5.57004C17.86 5.78004 18.32 5.65004 18.53 5.29004L19 4.47004L19.48 5.30004C19.69 5.66004 20.15 5.78004 20.51 5.58004C20.87 5.37004 20.99 4.92004 20.79 4.56004L20.31 3.73004H21.26C21.66 3.72004 22 3.38004 22 2.97004Z"
          fill="#FF6464"
        />
      </Svg>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-around",
        }}
      >
        <View style={styles.boxview}>
          <Text style={styles.numbertxt}>5</Text>
          <Text
            style={{
              fontSize: 14,
              color: "#545974",
              marginStart: 20,
            }}
          >
            Passwords{"\n"}Stored
          </Text>
        </View>
        <View style={styles.boxview}>
          <Text style={styles.numbertxt}>0</Text>
          <Text
            style={{
              fontSize: 14,
              color: "#545974",
              marginStart: 20,
            }}
          >
            Passwords {"\n"}Compromised
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.searchbox,
          { borderColor: isFocused ? "#FF6464" : "#F1F1F1" },
        ]}
      >
        <Ionicons name="search" size={24} color="#F1F1F1" />
        <TextInput
          style={{ width: "100%", marginHorizontal: 10 }}
          placeholder="Search..."
          value={search}
          onChangeText={(text) => searchFunction(text)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </View>
      <FlatList
        data={data}
        extraData={data}
        contentContainerStyle={{ marginHorizontal: 10 }}
        style={{ width: "100%" }}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View
            style={{
              width: "100%",
              height: 50,
              flexDirection: "row",
              marginTop: 10,
              borderColor: "#F1F1F1",
              borderRadius: 15,
              borderWidth: 2,
              alignItems: "center",
              paddingStart: 10,
            }}
          >
            <Image source={{ uri: item.logo }} height={30} width={30} />
            <Text style={{ marginStart: 10,width:'75%' }}>{item.name}</Text>
            <TouchableOpacity onPress={()=>Clipboard.setString(item.name)}>
            <Svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{justifyContent:'flex-end'}}
            >
              <G clipPath="url(#clip0_117_393)">
                <Path
                  d="M7 6V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V17C21 17.2652 20.8946 17.5196 20.7071 17.7071C20.5196 17.8946 20.2652 18 20 18H17V21C17 21.552 16.55 22 15.993 22H4.007C3.87513 22.0008 3.7444 21.9755 3.62232 21.9256C3.50025 21.8757 3.38923 21.8022 3.29566 21.7093C3.20208 21.6164 3.12779 21.5059 3.07705 21.3841C3.02632 21.2624 3.00013 21.1319 3 21L3.003 7C3.003 6.448 3.453 6 4.01 6H7ZM5.50287 8C5.22678 8 5.00294 8.22378 5.00287 8.49988L5.00012 19.4999C5.00006 19.7761 5.22393 20 5.50012 20H14.5C14.7761 20 15 19.7761 15 19.5V8.5C15 8.22386 14.7761 8 14.5 8H5.50287ZM9 6H16C16.5523 6 17 6.44772 17 7V16H18.5C18.7761 16 19 15.7761 19 15.5V4.5C19 4.22386 18.7761 4 18.5 4H9.5C9.22386 4 9 4.22386 9 4.5V6Z"
                  fill="#FF6464"
                />
              </G>
              <Defs>
                <ClipPath id="clip0_117_393">
                  <Rect width={24} height={24} fill="white" />
                </ClipPath>
              </Defs>
            </Svg>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#FFF",
    paddingTop: 50,
    paddingHorizontal: 20,
    width: "100%",
  },
  boxview: {
    width: "45%",
    backgroundColor: "#F1F1F1",
    height: 150,
    marginTop: 20,
    borderRadius: 20,
  },
  numbertxt: {
    color: "#FF6464",
    fontSize: 40,
    margin: 20,
    fontWeight: "bold",
  },
  searchbox: {
    flexDirection: "row",
    width: "95%",
    height: 40,
    borderRadius: 15,
    marginTop: 10,
    borderWidth: 2,
    alignSelf: "center",
    alignItems: "center",
    paddingStart: 10,
  },
});

export default Dashboard;

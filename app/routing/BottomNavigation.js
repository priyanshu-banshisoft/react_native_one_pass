import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import LoginScreen from "../screens/Login";
import Dashboard from "../screens/Dashboard";
import { StyleSheet ,View,TouchableOpacity} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomBottomTab from "../CustomCreate/CustomBottomTab";


const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    return (
        <View style={{ flex: 1 }}>
      <Tab.Navigator screenOptions={{headerShown: false}} tabBar={props => <CustomBottomTab {...props} />}>
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Dashboard" component={Dashboard} />
      </Tab.Navigator>
      <FAB onPress={() => console.log('FAB pressed')} />
    </View>
    );
}

const FAB = ({ onPress }) => {
    return (
      <TouchableOpacity style={styles.fab} onPress={onPress}>
        <MaterialIcons name="add" size={24} color="white" />
      </TouchableOpacity>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    fab: {
    position : 'relative',
      bottom: 16,
      right: 16,
      backgroundColor: 'blue',
      borderRadius: 30,
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf:'center'
    },
  });

export default BottomNavigation;



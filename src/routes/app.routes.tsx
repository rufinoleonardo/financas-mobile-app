import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../pages/Home";
import New from "../pages/New";
import Profile from "../pages/Profile";
import { CustomDrawer } from "../components/CustomDrawer";

const AppDrawer = createDrawerNavigator();

export default function AppRoutes() {
  return (
    <AppDrawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          paddingTop: 22,
          backgroundColor: "#FFF",
        },

        drawerActiveBackgroundColor: "#3b3dbf",
        drawerActiveTintColor: "#FFFFFF",
        drawerInactiveBackgroundColor: "#d4d4d4",
        drawerInactiveTintColor: "#181818",
      }}
    >
      <AppDrawer.Screen component={Home} name="HomePage" />
      <AppDrawer.Screen component={New} name="Registrar" />
      <AppDrawer.Screen component={Profile} name="Perfil" />
    </AppDrawer.Navigator>
  );
}

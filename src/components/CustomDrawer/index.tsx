import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useContext } from "react";
import { Image, Text, View } from "react-native";
import { authContext } from "../../contexts/auth";

export function CustomDrawer(props) {
  const { user, signOut } = useContext(authContext);

  return (
    <DrawerContentScrollView>
      <View
        style={{
          marginTop: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../../assets/Logo.png")}
          height={200}
          width={200}
          resizeMode="contain"
          style={{ marginBottom: 14 }}
        />
        <Text style={{ fontSize: 18, marginBottom: 14 }}>Bem vindo</Text>
        <Text
          numberOfLines={1}
          style={{
            fontSize: 22,
            fontWeight: "bold",
            paddingHorizontal: 12,
            marginBottom: 50,
          }}
        >
          {user.name}
        </Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label={"Sair"}
        onPress={() => signOut()}
        labelStyle={{
          textAlign: "center",
          color: "#FF5555",
          fontWeight: "900",
          marginTop: 50,
        }}
      />
    </DrawerContentScrollView>
  );
}

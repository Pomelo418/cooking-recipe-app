import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS } from "../constants/colors";

const SafeScreen = ({ children }) => { 

  /*
  This code defines a reusable component in React Native
  called SafeScreen that helps manage the safe display
  of content on devices with screen "notches," status 
  bars, or bottom navigation areas (like the iPhone X's 
  home indicator area). 
  */
  const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: insets.top, flex: 1, backgroundColor: COLORS.background }}>
      {children}
    </View>
  );
};
export default SafeScreen;
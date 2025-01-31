import { TouchableOpacity, Text, View } from "react-native";

const CustomButton = ({ title }) => {
  return (
    <TouchableOpacity>
      <View
        className={`rounded-xl min-h-[62px] flex flex-row justify-center items-center`}
      >
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

import { Text, TextInput, View } from "react-native";
import { COLORS } from "../utils";

const Input = (props) => {
    return (
        <View style={props.style}>
            {props.label &&
                <Text
                    style={{ marginLeft: 1, marginBottom: 4 }}
                    size="14"
                    weight="400"
                    color={COLORS.black}>
                    {props.label}
                </Text>
            }
            <TextInput
                {...props}
                style={{ marginLeft: 1, marginBottom: 4, borderColor: 'black', borderWidth: 1 }}
                placeholderTextColor={'rgba(144,144,144,1)'}
                autoCapitalize={false}
                autoCapitalize='none'
                autoCorrect={false}
            />
        </View>
    );
}

export default Input;
import { Image, TouchableOpacity, View } from "react-native";

const Img = (props) => {
    return (
        <View>
            <TouchableOpacity
                activeOpacity={0.9}
                {...props}
            >
                <Image
                    style={props.imageStyle}
                    source={props.source}
                />
            </TouchableOpacity>
        </View>
    );
}

export default Img;
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { COLORS } from "../utils"

const Button = (props) =>{
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            {...props}
            style={props.type == 1 ? [styles.border, props.style] : [styles.shadow, props.style]}>
            <View
                style={[styles.container, { height: props.height ? props.height : 48 }]}>
                <View style={{ flexDirection: 'row' }}>
                    {props.left &&
                        <Image
                            style={[styles.image, { marginRight: props.height ? 5 : 15, height: props.size, width: props.size }]}
                            source={props.left}
                            resizeMode='contain' />
                    }
                    {props.type == 1 ? <LabelPrimary title={props.title} /> : <Label textColor={props.textColor} title={props.title} />}
                    {props.right &&
                        <Image
                            style={[styles.image, { marginLeft: props.height ? 5 : 15, height: props.size, width: props.size }]}
                            source={props.right}
                            resizeMode='contain' />
                    }
                </View>
            </View>
        </TouchableOpacity>
    )
}

const Label = (props) => {
    return (
        <Text
            style={[{ color: props.textColor, alignSelf: 'center' }]}
            size="14"
            weight="bold"
            color={COLORS.white}>
            {props.title}
        </Text>
    )
}

const LabelPrimary = (props) => {
    return (
        <Text
            style={[{ alignSelf: 'center' }]}
            size="14"
            weight="bold"
            color={COLORS.primaryColor}>
            {props.title}
        </Text>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 4,
        justifyContent: 'center',
        height: 48,
    },
    shadow: {
        shadowColor: COLORS.primaryColor,
        shadowOpacity: 0.3,
        shadowRadius: 1,
        shadowOffset: { width: 0, height: 1 },
        backgroundColor: COLORS.primaryColor,
        borderRadius: 4,
    },
    border: {
        borderColor: COLORS.primaryColor,
        borderWidth: 1,
        backgroundColor: COLORS.white,
        borderRadius: 4,
    },
    image: {
        height: 15,
        width: 15,
        alignSelf: 'center',
    },
});

export default Button
import { TouchableOpacity, Text, View } from "react-native";
import { Image } from "react-native";

export default function ImageButton ({
    onPress,
    color,
    width,
    height,
    marginTop,
    marginLeft,
    borderRadius,
    
    

}) {
    return (
       <View style={{ 
        backgroundColor: color || "#f9f9f9",
        width:  width,
        height: height,
        marginTop: marginTop,
        marginLeft: marginLeft,
        borderRadius: borderRadius,
       
        
        
       
        
    }}>
        <TouchableOpacity  onPress={onPress}>
            <Image
             width={40}
             height={40}
             source={require("../ImageButton/logo.png")}/>
        </TouchableOpacity>
        </View>
        
    )
    
       
        


    
}
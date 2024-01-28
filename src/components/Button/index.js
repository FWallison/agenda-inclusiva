import { TouchableOpacity, Text } from "react-native";

export default function MyButton ({
    onPress,
    label,
    color,
    width,
    height,
    TextColor,
    marginTop,
    marginLeft,
    borderRadius,
    padding,
    

}) {
    return (
        <TouchableOpacity  onPress={onPress} style={{ 
            backgroundColor: color || "#f9f9f9",
            width:  width,
            height: height,
            marginTop: marginTop,
            marginLeft: marginLeft,
            borderRadius: borderRadius,
           
            
            
           
            
        }}>
            <Text style ={{
              textAlign : "center"  ,
              color: TextColor,
              padding:padding,
              
              
              
            }} >
                {label}
            </Text>
        </TouchableOpacity>
        
    )
    
       
        


    
}
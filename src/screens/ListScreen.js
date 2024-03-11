import { View, StyleSheet} from "react-native";
import MyList from "../components/List/MyList";

export default function HomeScreen() {

    return(
        <View style={styles.continer}>
            <MyList/>
        </View>

    );


    
}
const styles = StyleSheet.create({
    continer:{
        with:"100%",
    }

});
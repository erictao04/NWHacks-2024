import * as React from 'react';
import { View, Text} from 'react-native';

export default function SellScreen({navigation}) {
    return(
        <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text
                onPress={() => alert('This is the "Sell" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold'}}>Sell
            </Text>
        </View>
    )

}
import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, images } from '../constants'
import { Feather } from "@expo/vector-icons"

const Home = () => {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: Colors
        }}>
            <View style={{
                marginHorizontal: 22,
                marginTop: 12
            }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <Image
                        source={images.logo}
                        resizeMode="contain"
                        style={{
                            width: 58,
                            height: 22
                        }}
                    />
                    <View>
                        <View style={{
                            position: "absolute",
                            bottom: 16,
                            width: 16,
                            height: 16,
                            borderRadius: 8,
                            backgroundColor: COLORS.red,
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 999
                        }}>
                            
                        </View>
                        <Feather
                            name="shopping-bag"
                            size={24}
                            colo
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home
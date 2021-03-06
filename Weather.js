import React from "react";
import { View, Text, StyleSheet, StatusBar, Image } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Weather({ temp, cond, temp_min, temp_max, feels_like, icon }) {
    //한국어가 존재하면 표시, 없으면 영어로 표시
    var local_cond, local_icon;
    if(Korean[cond]?.name == null) {
        local_cond = cond;
        local_icon = `http://openweathermap.org/img/wn/${icon}@4x.png`;
    }
    else{
        local_cond = Korean[cond]?.name;
        local_icon = Korean[cond]?.ico;
    }

    return (
        <LinearGradient colors={["#68B1FF", "#82BEFF"]} style={style.container}>
            <StatusBar barStyle="light-content" />
            <View style={style.container}>
                {/* 아이콘 */}
                <FontAwesome5 name={local_icon} size={300} solid/>
                {/* 19°C */}
                <Text style={{ fontSize: 50 }}>{temp}°C</Text>
                {/* 17° / 21° | 체감온도 18° */}
                <Text style={{ fontSize: 20 }}><Text style={{ color: "blue" }}>{temp_min}°</Text> / <Text style={{ color: "red" }}>{temp_max}°</Text> | 체감온도 {feels_like}°</Text>
            </View>
            <View style={style.container}>
                {/* 맑음 */}
                <Text style={{fontSize: 50}}>{local_cond}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.PropTypes = {
    temp: PropTypes.number.isRequired
};

const Korean = {
    Clear: {
        name: "맑음",
        ico: "sun"
    },
    Thunderstorm: {
        name: "뇌우",
        ico: "bolt"
    },
    Drizzle: {
        name: "이슬비",
        ico: "cloud-rain"
    },
    Rain: {
        name: "비",
        ico: "cloud-rain"
    },
    Snow: {
        name: "눈",
        ico: "snowflake"
    },
    Clouds: {
        name: "구름",
        ico: "cloud"
    },
    Mist: {
        name: "안개",
        ico: "smog"
    }
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
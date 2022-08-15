import { View, Text } from 'react-native'
import React from 'react'
import CircularProgress from 'react-native-circular-progress-indicator';
export const CircularProgressBar = () => {
  return (
    <CircularProgress
    value={72.01}
    radius={100}
    duration={2000}
    valuePrefix={'$'}
    progressValueColor={'#5DB075'}
    progressValueStyle= {{fontSize: 34, fontWeight: '300'}}
    clockwise ={false}
    inActiveStrokeColor={'#E8E8E8'}
    inActiveStrokeOpacity={0.5}
    inActiveStrokeWidth={4}
    activeStrokeWidth={4}
    maxValue={100}
    title={'70% spent'}
    titleColor={'#BDBDBD'}
    titleStyle={{fontSize: 12}}
    progressFormatter={(value: number) => {
        'worklet';
        return value.toFixed(2); // 2 decimal places
      }}
  />
  )
}


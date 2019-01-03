import React from 'react';
import { Icon } from 'react-native'
import { accent } from '../styles'

export const purposeIcons = pressFunc => ({
  Commute: (
    <Icon
      reverse
      raised
      color={accent}
      key="briefcase"
      type="feather"
      name="briefcase"
      onPress={() => pressFunc("Commute")}
    />
  ),
  Shopping: (
    <Icon
      reverse
      raised
      color={accent}
      key="shopping-cart"
      type="feather"
      name="shopping-cart"
      onPress={() => pressFunc("Shopping")}
    />
  )
});

export const modeIcons = pressFunc => ({
  Car: (
    <Icon
      reverse
      raised
      color={accent}
      key="car"
      type="material-community"
      name="car"
      onPress={() => pressFunc("Car")}
    />
  ),
  Subway: (
    <Icon
      reverse
      raised
      color={accent}
      key="subway"
      type="material-community"
      name="subway"
      onPress={() => pressFunc("Subway")}
    />
  )
});

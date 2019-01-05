import React from 'react';
import { Icon } from 'react-native-elements'
import { accent } from '../styles'


export const CloseIcon = <Icon
                            raised
                            type = 'Ionicons'
                            name = 'ios-close'
                          />

export const purposeIcons = (pressFunc, listType) => ({
  Commute: (
    <Icon

      color={accent}
      key="briefcase"
      type="feather"
      name="briefcase"
      onPress={() => pressFunc("Commute", listType)}
    />
  ),
  Shopping: (
    <Icon

      color={accent}
      key="shopping-cart"
      type="feather"
      name="shopping-cart"
      onPress={() => pressFunc("Shopping", listType)}
    />
  )
});

export const modeIcons = (pressFunc, listType) => ({
  Car: (
    <Icon

      color={accent}
      key="car"
      type="material-community"
      name="car"
      onPress={() => pressFunc("Car", listType)}
    />
  ),
  Subway: (
    <Icon

      color={accent}
      key="subway"
      type="material-community"
      name="subway"
      onPress={() => pressFunc("Subway", listType)}
    />
  )
});

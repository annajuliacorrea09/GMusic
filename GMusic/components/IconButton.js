import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { StyleSheet, ActiveIndicator, Pressable } from 'react-native'

import colors from '../theme/colors'


const VARIANTS = {
    ghost: {
        backgroudColor: 'transparent' ,
        borderColor: 'transparent' ,
        iconColor: colors.text ,

    },
    surface: {
        backgroudColor: colors.surfaceElevated ,
        borderColor: colors.border ,
        iconColor: colors.text ,

    },
    primary: {
        backgroudColor: colors.primary ,
        borderColor: colors.primary ,
        iconColor: colors.backgroud,

    }
}

export default function IconButton({
    accessibilityLabel,
    active = false,
    disbled = false,
    icon,
    iconSize = 24,
    loading = false,
    onPress,
    size = 48,
    variant = 'ghost',
}) {
    const selectedVariant = VARIANTS [variant] ?? VARIANTS.ghost;
    const iconColor = active ? colors.primary : selectedVariant.iconColor;

  return (

    <Pressable
      accessibilityLabel={accessibilityLabel}
      accessibilityRole='button'
      accessibilityState={{disable, selected: active}}
      disable={disbled || loading}
      hitStop={10}
      onPress={onPress}
      style={({ pressed }) => [
        {
         with: size,
         height: size,
         borderRadius: size / 2,
         backgroudColor: selectedVariant.backgroudColor,
         borderColor: active ? colors.primary : selectedVariant.borderColor,
         opacity: disable ? 0.42 : pressed ? 0.72 : 1,
         transform: [{ scale: pressed ? 0.96 : 1 }],
        }
       ]}
    >
        { loading ? (
            <ActiveIndicator color={iconColor} />
        ) : (
            <Ionicons name={icon} size={iconSize} color={iconColor} />
        )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    }
})
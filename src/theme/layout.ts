import { Platform } from 'react-native';

export const TAB_BAR_HEIGHT = 56;

export function getTabBarPadding(bottomInset: number): number {
    return TAB_BAR_HEIGHT + Math.max(bottomInset, Platform.OS === 'android' ? 8 : 0) + 16;
}

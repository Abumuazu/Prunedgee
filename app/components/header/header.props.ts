import { StyleProp, TextStyle, ViewStyle } from "react-native"
import { TxKeyPath } from "../../i18n"

export interface HeaderProps {
  /**
   * Main header
   */
  headerTx?: TxKeyPath

  /**
   * header non-i18n
   */
  headerText?: string


  /**
   * What happens when you press the left icon
   */
  onLeftPress?(): void


  /**
   * What happens when you press the right icon
   */
  onRightPress?(): void

  /**
   * Container style overrides.
   */
  style?: StyleProp<ViewStyle>

  /**
   * Title style overrides.
   */
  titleStyle?: StyleProp<TextStyle>
}

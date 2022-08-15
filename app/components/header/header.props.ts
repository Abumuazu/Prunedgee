import { ReactNode } from "react"

export interface IHeaderProps {
  Left?: string | ReactNode
  Right?: string
  CenterText: string
  rightColor?: string
  leftColor?: string
  nextNavigation?(): void
  backNavigation?(): void
  CenterColor?: string
}
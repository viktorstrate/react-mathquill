declare module 'react-mathquill' {
  import * as React from 'react'

  export function addStyles(): void

  export interface StaticMathFieldProps {
    children?: string
    mathquillDidMount?: (mathField: MathField) => void
    className?: string
  }

  export interface EditableMathFieldProps {
    onChange?: (mathField: MathField) => void
    latex?: string
    config?: MathFieldConfig
    mathquillDidMount?: (mathField: MathField) => void
    className?: string
  }

  export class EditableMathField extends React.Component<
    EditableMathFieldProps
  > {
    constructor(props: EditableMathFieldProps)
  }

  export class StaticMathField extends React.Component<StaticMathFieldProps> {
    constructor(props: StaticMathFieldProps)
  }

  export interface MathFieldConfig {
    spaceBehavesLikeTab?: boolean
    leftRightIntoCmdGoes?: 'up' | 'down'
    restrictMismatchedBrackets?: boolean
    sumStartsWithNEquals?: boolean
    supSubsRequireOperand?: boolean
    charsThatBreakOutOfSupSub?: string
    autoSubscriptNumerals?: boolean
    autoCommands?: string
    autoOperatorNames?: string
    substituteTextarea?: () => void
    handlers?: {
      deleteOutOf?: (direction: Direction, mathField: MathField) => void
      moveOutOf?: (direction: Direction, mathField: MathField) => void
      selectOutOf?: (direction: Direction, mathField: MathField) => void
      downOutOf?: (mathField: MathField) => void
      upOutOf?: (mathField: MathField) => void
      edit?: (mathField: MathField) => void
      enter?: (mathField: MathField) => void
    }
    maxDepth?: number
  }

  export enum Direction {
    R,
    L,
  }

  export interface MathField {
    revert(): void
    reflow(): void
    el(): HTMLElement
    latex(): string
    latex(latexString: string): void
    text(): string
    focus(): void
    blur(): void
    write(latex: string): void
    cmd(latexString: string): void
    select(): void
    clearSelection(): void
    moveToLeftEnd(): void
    moveToRightEnd(): void
    keystroke(keys: string): void
    typedText(text: string): void
    config(newConfig: MathFieldConfig): void
  }
}

import { Schema } from './Schema'

export class StringSchema extends Schema<string> {
  protected value: string = ''

  protected transform(value: any) {
    if (typeof value === 'string') return value
    value = value.toString()
    if (typeof value === 'string') return value
    return ''
  }

  public required() {
    return this.addRule((value) => !!value)
  }
}

export function string(): StringSchema {
  return new StringSchema()
}

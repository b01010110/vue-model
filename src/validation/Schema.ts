export type ValidationRule = (value: unknown) => boolean
export type ValidationRules = ValidationRule[]

export abstract class Schema<T = any> {
  protected abstract value: T
  protected abstract transform(value: unknown): T

  protected rules: ValidationRules = []

  protected addRule(rule: ValidationRule) {
    this.rules.push(rule)
    return this
  }

  public validate(value: unknown): T {
    this.value = this.transform(value)

    for (const rule of this.rules) {
      const result = rule(this.value)
      if (!result) throw new Error('Validation error!')
    }

    return this.value
  }
}

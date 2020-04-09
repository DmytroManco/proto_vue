export class DemoFormModel {
  name: string;

  email: string;

  rules: Record<string, string>;

  // TODO: for demo propose
  options: string;

  additionalControls: Record<string, string | number>;

  constructor(
    demo = { name: '', email: '' },
    rules = { name: 'required|min:3', email: 'required|email' },
  ) {
    this.name = demo.name;
    this.email = demo.email;
    this.rules = rules;
    this.options = '';
    this.additionalControls = {
      age: 18,
      nickName: '',
    };
  }

  getRules(fieldName: string): string {
    return this.rules[fieldName];
  }

  setRules(fieldName: string, rules: string): void {
    this.rules[fieldName] = rules;
  }

  get formModel(): Record<string, string | number> {
    return {
      name: this.name,
      email: this.email,
      options: this.options,
      ...this.additionalControls,
    };
  }
}

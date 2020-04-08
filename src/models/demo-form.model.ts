export class DemoFormModel {
  name: string;

  email: string;

  constructor(demo = { name: '', email: '' }) {
    this.name = demo.name;
    this.email = demo.email;
  }
}

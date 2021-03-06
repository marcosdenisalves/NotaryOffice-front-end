import { Certificate } from './certificate';
export class Notary {
  constructor(
    public name: string,
    public email: string,
    public phone: string,
    public street: string,
    public city: string,
    public state: string,
    public country: string,
    public certificates: Array<Certificate>
  ) {}
}

export class Order {
  constructor(public customer: string, public destination: string, public event_name: string, public id: string,
              public item: string, public price: number, public sent_at_second: number) {

  }
}

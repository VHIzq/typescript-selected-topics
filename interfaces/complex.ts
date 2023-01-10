(() => {

  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddress(id: string): string
  }

  interface Address {
    id: number;
    zipCode: string;
    city: string;
  }

  const client: Client = {
    name: 'Raven',
    age: 22,
    address: {
      id: 554,
      zipCode: '07900',
      city: 'CDMX '
    },
    getFullAddress(id: string) {
      return this.address.city;
    }
  }

})()
export class BasketService {
    items = [
        {
          id: 1,
          name: 'Milk'
        },
        {
          id: 2,
          name: 'Banana'
        },
        {
          id: 3,
          name: 'Strawberry'
        }
      ];

      getItems(){
        return this.items;
      }
}
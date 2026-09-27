/**
 * ЗАДАЧА 2. Фабрика позиций меню.
 *
 * static create(type, data)
 *   'drink'   -> new Drink(data.name, data.price, data.size)
 *   'dessert' -> new Dessert(data.name, data.price, data.isVegan)
 *   любой другой тип -> Error с текстом «Неизвестный тип позиции: <type>»
 *
 * static createMenu(list)
 *   принимает массив объектов из src/data/menu.js
 *   и возвращает массив готовых позиций меню.
 */
import { Dessert } from './Dessert.js';
import { Drink } from './Drink.js';
export class MenuFactory {
  static create(type, data) {
    if(type === `drink`){return new Drink(data.name, data.price, data.size)}
    else if(type === `dessert`){return new Dessert(data.name, data.price, data.isVegan)}
    else
    {throw new Error(`Неизвестный тип позиции: ${type}`)}
  }

  static createMenu(list) {
    return list.map((item) => MenuFactory.create(item.type, item));
  }
}

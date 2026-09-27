/**
 * ЗАДАЧА 1. Абстрактный класс позиции меню.
 *
 * constructor(name, basePrice)
 * - прямое создание через new MenuItem(...) выбрасывает ошибку;
 * - значения записываются через сеттеры, чтобы валидация сработала сразу.
 *
 * Приватные поля: #name, #basePrice.
 *
 * name        геттер и сеттер. Непустая строка, пробелы по краям обрезаются.
 *             Иначе -- Error.
 * basePrice   геттер и сеттер. Конечное число больше 0. Иначе -- Error.
 * price       только геттер. Итоговая цена, в базовом классе равна basePrice.
 *
 * getCategory()  абстрактный метод: выбрасывает ошибку,
 *                если подкласс его не реализовал.
 * describe()     возвращает строку вида «Чизкейк — 250 руб.»
 */
export class MenuItem {
  #name
  #basePrice
  constructor(name, basePrice) {
    if(new.target === MenuItem){throw new Error('MenuItem - абстрактный класс')};
    this.name = name;
    this.basePrice = basePrice;
  }
  get price(){
    return this.#basePrice
  }
  get name(){
    return this.#name[0].toUpperCase() + this.#name.slice(1)
  }
  set name(value){
    if(typeof value !== `string` || value.trim().length < 2){throw new Error('введите корректное имя')}
    this.#name = value.trim().toLowerCase()};

  set basePrice(value){
    if(!Number.isInteger(value) || value <= 0){throw new Error('введите корректную стоимость')}
  this.#basePrice = value
  }
  get basePrice(){
    return this.#basePrice
  }
  getCategory() {
    throw new Error('Метод getCategory должен быть переопределён');
  }
  describe(){
    return `${this.#name}`
  }
}

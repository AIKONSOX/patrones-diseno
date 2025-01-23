/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

import { COLORS } from "../helpers/colors.ts";

//Interface que define los métodos que deben implementar la clase Hamburger
interface Hamburger {
  prepare(): void;
}

//Crea una hamurguesa de pollo
class ChickenHamburger implements Hamburger {
  prepare(): void {
    console.log("Preparando hamburguesa de %cPollo", COLORS.yellow);
  }
}

//Crear hamburgesa de carne
class BeefHamburger implements Hamburger {
  prepare(): void {
    console.log("Preparando hamburguesa de %cRes", COLORS.brown);
  }
}

class BeanHamburguer implements Hamburger {
  prepare(): void {
    console.log("Preparando hamburguesa de %cFrijol", COLORS.orange);
  }
}

//Crea un FactoryMethod para crear hamburguesas
abstract class Restaurant {
  protected abstract createHamburger(): Hamburger;

  orderHamburger(): void {
    const hamburger = this.createHamburger();
    hamburger.prepare();
  }
}

class ChickenRestaurante extends Restaurant {
  override createHamburger(): ChickenHamburger {
    return new ChickenHamburger();
  }
}

class BeefRestaurante extends Restaurant {
  override createHamburger(): BeefHamburger {
    return new BeefHamburger();
  }
}

class BeanRestaurante extends Restaurant {
  override createHamburger(): BeanHamburguer {
    return new BeanHamburguer();
  }
}

function main() {
  //Variables
  let restaurant: Restaurant;
  const burguerType = prompt(
    `¿Cuál tipo de hamburguesa desea?\nchicken\nbeef\nbean\n`
  );

  switch (burguerType?.toLowerCase()) {
    case "chicken":
      restaurant = new ChickenRestaurante();
      break;
    case "beef":
      restaurant = new BeefRestaurante();
      break;
    case "bean":
      restaurant = new BeanRestaurante();
      break;
    default:
      throw new Error("¡Opción no válida!");
  }

  restaurant.orderHamburger();
}
main();

/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */

import { COLORS } from "../helpers/colors.ts";

class DragonBalls {
  private static instance: DragonBalls;
  private ballsCollected: number;

  private constructor() {
    this.ballsCollected = 0;
  }

  public static getInstance(): DragonBalls {
    // Si no existe instancia, crear una nueva
    if (!DragonBalls.instance) DragonBalls.instance = new DragonBalls();
    console.log("%cLas esferas de dragon han sido creadas", COLORS.yellow);
    return DragonBalls.instance;
  }

  collectBall(): void {
    // Si no se ha recolectado todas las esferas, incrementar contador
    if (this.ballsCollected < 7) {
      this.ballsCollected++;
      console.log(`%cEsfera recolectada. Total de esferas ${this.ballsCollected}`,COLORS.orange);
      return;
    }

    // Si se ha recolectado todas las esferas, invocar Shenlong
    console.log(`Ya se han recolectado las 7 esferas del Dragón!! Invoca a ShenLong`, COLORS.red);
  }

  SummonShenLong(): void {
    // Si ya se ha invocado, no se puede invocar otra vez
    if (this.ballsCollected === 7) {
        console.log(`%cShenLong se ha invocado, pide tu deseo`, COLORS.green);
        this.ballsCollected = 0;
        return;
    }

    // Si no se ha invocado, invocar
    console.log(`%cAun faltan ${7 - this.ballsCollected} para invocar a ShenLong`, COLORS.violet);
  }
}

function main(){
    const gokuDragonBalls = DragonBalls.getInstance();

    //Recolectamos las esferas del dragon
    gokuDragonBalls.collectBall();
    gokuDragonBalls.collectBall();
    gokuDragonBalls.collectBall();

    //Invocamos a ShenLong
    gokuDragonBalls.SummonShenLong();

    //Veguetta recoleta las esferas del dragon
    const veguettaDragonBalls = DragonBalls.getInstance();
    veguettaDragonBalls.collectBall();
    veguettaDragonBalls.collectBall();
    veguettaDragonBalls.collectBall();
    veguettaDragonBalls.collectBall();

    //Invocamos a ShenLong
    gokuDragonBalls.SummonShenLong();
    
    //Pedir el deseo a ShenLong
    veguettaDragonBalls.SummonShenLong();
}
main();

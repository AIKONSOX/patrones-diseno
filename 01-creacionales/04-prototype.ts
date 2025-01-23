/**
 * ! Patrón Prototype:

 * Es un patrón de diseño creacional que nos permite copiar objetos existentes sin hacer
 * que el código dependa de sus clases.
 * 
 * * Es útil cuando queremos duplicar el contenido, 
 * * el título y el autor de un documento, por ejemplo o cualquier objeto complejo.
 * 
 * https://refactoring.guru/es/design-patterns/prototype
 */

class Document {
  public title: string;
  private content: string;
  public author: string;

  constructor(title: string, content: string, author: string) {
    this.title = title;
    this.content = content;
    this.author = author;
  }

  clone(): Document {
    return new Document(this.title, this.content, this.author);
  }

  // Método para imprimir la información del documento
  diplayInfo(): void {
    console.log(
      `Título: ${this.title}\n
      Contenido: ${this.content}\n      
      Autor: ${this.author}`
    );
  }
}

function main() {
  // Creación de un objeto Document
  const document1 = new Document("Cotizacion", "500 dlls", "Manuel Terminel");
  console.log("Document 1", document1);
  document1.diplayInfo();

  const document2 = document1.clone();
  document2.title = "Nueva Cotizacion";
  console.log("Document 2", document2);
  document2.diplayInfo();
}

main();

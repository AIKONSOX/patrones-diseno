/**
 * ! Inmutabilidad con copia
 * Aunque la inmutabilidad es una buena práctica, no siempre es posible.
 * En estos casos, se puede hacer una copia del objeto y modificar la copia.
 *
 *  * Es útil para mantener un historial de estados en aplicaciones interactivas.
 *
 */

import { COLORS } from "../helpers/colors.ts";

class CodeEditorState {
  readonly content: string;
  readonly cursorPosition: number;
  readonly unsaveChanges: boolean;

  constructor(content: string, cursorPosition: number, unsaveChanges: boolean) {
    this.content = content;
    this.cursorPosition = cursorPosition;
    this.unsaveChanges = unsaveChanges;
  }

  copyWith({
    content,
    cursorPosition,
    unsaveChanges,
  }: Partial<CodeEditorState>): CodeEditorState {
    return new CodeEditorState(
      content ?? this.content,
      cursorPosition ?? this.cursorPosition,
      unsaveChanges ?? this.unsaveChanges
    );
  }

  displayState() {
    console.log(`\n%cEstado del editor`, COLORS.green);
    console.log(`
        Contenido: ${this.content}
        Cursor Pos: ${this.cursorPosition}
        Unsaved Changes: ${this.unsaveChanges}
    `);
  }
}

class CodeEditorHistory {
  private history: CodeEditorState[] = [];
  private currenIndex: number = -1;

  // Método para guardar el estado actual del editor
  save(state: CodeEditorState): void {
    if (this.currenIndex < this.history.length - 1)
      this.history = this.history.slice(0, this.currenIndex + 1);

    this.history.push(state);
    this.currenIndex++;
  }

  // Método para deshacer el último cambio
  undo(): CodeEditorState | null {
    if (this.currenIndex > 0) {
      this.currenIndex--;
      return this.history[this.currenIndex];
    }

    return null;
  }

  // Método para rehacer el último cambio
  redo(): CodeEditorState | null {
    if (this.currenIndex < this.history.length - 1) {
      this.currenIndex++;
      return this.history[this.currenIndex];
    }

    return null;
  }
}

function main() {
  const history = new CodeEditorHistory();
  let editorState = new CodeEditorState('console.log("Hola Mundo");', 2, false);

  // Guardamos el estado inicial
  history.save(editorState);

  console.log("%Estado Inicial", COLORS.blue);
  editorState.displayState();

  // Modificamos el contenido del editor
  editorState = editorState.copyWith({
    content: 'console.log("Hola Mundo :D")',
    cursorPosition: 3,
    unsaveChanges: true,
  });
  history.save(editorState);
  editorState.displayState();

  console.log("%cDespues de mover el cursor", COLORS.pink);
  editorState = editorState.copyWith({ cursorPosition: 5 });
  history.save(editorState);
  editorState.displayState();

  console.log("%cDespues del Undo", COLORS.orange);
  editorState = history.undo() ?? editorState;
  editorState.displayState();

  console.log("%cDespues del Redo", COLORS.white);
  editorState = history.redo() ?? editorState;
  editorState.displayState();
}
main();

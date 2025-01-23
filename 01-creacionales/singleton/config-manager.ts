class ConfigManager {
  private config: Record<string, string> = {};

  // Método para establecer una configuración específica
  public setConfig(key: string, value: string): void {
    this.config[key] = value;
  }

  // Método para obtener una configuración específica
  public getConfig(key: string): string | null {
    return this.config[key];
  }

  // Método para obtener toda la configuración
  public getAllConfig(): Record<string, string> | null {
    return this.config;
  }
}

// Exportamos el objeto ConfigManager para que pueda ser usado en otros archivos
export const configManager = new ConfigManager();

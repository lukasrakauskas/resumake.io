declare module 'swiftlatex' {
  class LaTeXEngine {
    loadEngine(): Promise<void>
    closeWorker(): void
    makeMemFSFolder(folder: string): Promise<void>
    setTexliveEndpoint(url: string): Promise<void>
    writeMemFSFile(
      filename: string,
      content: ArrayBuffer | Uint8Array | string
    ): Promise<void>
    setEngineMainFile(filename: string): Promise<void>
    compileLaTeX(): Promise<{ pdf: ArrayBuffer }>
    compilePDF(): Promise<{ pdf: ArrayBuffer }>
  }

  export class PdfTeXEngine extends LaTeXEngine {}
  export class XeTeXEngine extends LaTeXEngine {}
  export class DvipdfmxEngine extends LaTeXEngine {}
}

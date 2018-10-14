export interface IDependencyProvider {
    getPiece(pieceName: string): any
    registerPiece(pieceName: string, pieceInstance: any, config?: IDependencyRegistryConfig): IDependencyRegistryResult
    getPieceCount: () => Number,
    getPieceNames(): string[]
}

export interface IDependencyRegistryConfig {
    allowReplace: boolean
}

export interface IDependencyRegistryResult {
    registered: boolean,
    errorCause?: string,
    config: IDependencyRegistryConfig
}
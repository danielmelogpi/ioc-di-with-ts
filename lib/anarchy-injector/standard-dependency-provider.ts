import { IDependencyProvider, IDependencyRegistryConfig, IDependencyRegistryResult } from "./dependency-provider";

export const standardDependencyProviderFactory = (): IDependencyProvider => {
    var dependencyMap = new Map<string, RecordedDependency>()

    const getPiece = (pieceName) => {
        const pieceRegistry:RecordedDependency = dependencyMap.get(pieceName)
        if (!pieceRegistry || !pieceRegistry.piece) {
            throw new Error(`Dep ${pieceName} was required but not previosly defined`)
        }
        return pieceRegistry.piece
    }

    const registerPiece = (pieceName: string, pieceInstance: any, config?: IDependencyRegistryConfig): IDependencyRegistryResult => {
        let piece = dependencyMap.get(pieceName)
        if ( (piece && piece.config.allowReplace) || !piece) {
            dependencyMap.set(pieceName, {
                piece: pieceInstance,
                config: config || getDefaultConfig()
            })
        } if (piece && !piece.config.allowReplace){
            return {
                config,
                registered: false,
                errorCause: `Tried to register piece as dependency with alias ${pieceName}, but it already existed and does not allow replacement`
            }
        } else {
            return {
                config,
                registered: true
            }
        }
    }
    const getPieceNames = () => {
        let names: string[] = []
        for (let i in dependencyMap.keys) {
            names.push(i)
        }
        return names
    }
    return {
        getPiece,
        registerPiece,
        getPieceNames,
        getPieceCount: () => dependencyMap.size
    }
}



const getDefaultConfig = (): IDependencyRegistryConfig => ({allowReplace: false})

interface RecordedDependency {
    piece: any
    config: IDependencyRegistryConfig
}
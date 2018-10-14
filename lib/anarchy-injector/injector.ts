import { IDependencyProvider } from "./dependency-provider";

let dependencyProviderFactory = (): IDependencyProvider => {
    console.log('A dependency provider was not configured and, yet, was invoked')
    return null
}

export function val (pieceName){
    return dependencyProviderFactory().getPiece(pieceName)
}

export const withDep = (pieces = {}) => 
    ({
        exec: (fun) => 
            (...args) => {
                let requiredPieces = Object.keys(pieces)
                let fetchedDeps = requiredPieces.map(pieceName => dependencyProviderFactory().getPiece(pieceName))
                return fun(...[...args, ...fetchedDeps])
            }
    })

export const useDependencyProvider = (depProviderFactory:  () => IDependencyProvider) => {
    dependencyProviderFactory = depProviderFactory
}
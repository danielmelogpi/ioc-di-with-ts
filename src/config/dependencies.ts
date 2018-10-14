import { IDependencyProvider } from 'anarchy-injector'
import { getWritingConfig } from "../service/config-service.ts/config-service";
import * as Dep from "./dependencies-names";

export const registerDependencies = (provider: IDependencyProvider) => {
    return new Promise((resolve, reject) => {
        registerResolution(provider, Dep.writingConfig, buildWritingConfig)
            .then(() => registerResolution(provider, 'secondDep', secoundDependency))
            .catch(error => {
                console.error('Erro registrando dependencias: ')
            })
    })
    
}

const registerResolution = (provider: IDependencyProvider, dependencyName, promisseInvokerToResolve: () => Promise<object>) => {
    return new Promise((resolve, reject) => {
        promisseInvokerToResolve()
            .then(instance => {
                provider.registerPiece(dependencyName, instance)
                resolve()
            })
            .catch(reject)
    })
    
}

const buildWritingConfig = () => new Promise((resolve, reject) => {
    resolve(getWritingConfig)
})

const secoundDependency = () => new Promise((resolve, reject) => {
    resolve({aaa1: true})
})
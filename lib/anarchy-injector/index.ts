import {val, useDependencyProvider, withDep} from './injector'
export {val} from './injector'
export {standardDependencyProviderFactory} from './standard-dependency-provider'
export {IDependencyProvider, IDependencyRegistryConfig, IDependencyRegistryResult} from './dependency-provider'
export const Injector = {
    val, useDependencyProvider, withDep
}
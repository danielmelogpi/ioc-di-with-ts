import {WritingService} from "./writing-service";
import { standardDependencyProviderFactory, Injector } from "anarchy-injector";
import * as Dep from "../../config/dependencies-names"

const standardDependencyProvider = standardDependencyProviderFactory()
standardDependencyProvider.registerPiece(Dep.writingConfig, {fontSize: '15px', useBold: 12})
Injector.useDependencyProvider(() => standardDependencyProvider)

let message = WritingService.writeWithPassion('Dear Caroline', 'Sorry to break your heart')
console.log(message)
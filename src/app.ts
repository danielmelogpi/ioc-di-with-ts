import {WritingService} from "./service/writing-service/writing-service"
import {standardDependencyProviderFactory, Injector} from "anarchy-injector"
import { registerDependencies } from "./config/dependencies"

const standardDependencyProvider = standardDependencyProviderFactory()
registerDependencies(standardDependencyProvider)
    .then(() => {
        Injector.useDependencyProvider(() => standardDependencyProvider)
        console.log(`Dependencies: `, standardDependencyProvider.getPieceNames())
        console.log(`I'm alive`)
        let writtenMessage = WritingService.writeWithPassion('Margarete, please give my dog back', 'Respectfully, go to hell')
        console.log(writtenMessage)
    })
    .catch(console.error)
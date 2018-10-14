import PenStyle from "../../lib/pen";
import { val } from "anarchy-injector";
import * as Z from "../../config/dependencies-names";

const writeWithPassionFull = (message, otherMessage, writingConfig = val(Z.writingConfig)) => {
    console.log(val(Z.writingConfig))
    console.log(writingConfig)
    return `[💝💓] ${PenStyle.ink(message)}\n${otherMessage}\n\t\t config: ${JSON.stringify(writingConfig)}`
}
const writeWithPassion = (message, otherMessage) => writeWithPassionFull(message, otherMessage)

export const WritingService = {
    writeWithPassion
}

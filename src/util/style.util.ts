import variables from "@/styles/_variables.module.scss";

export default class StyleUtil {
    static getVariable(key: string) {
        return variables[key]
    }
}
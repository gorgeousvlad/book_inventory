export function getClassName(block: string, element?:string, modifier?:string) {
    let result  = block;

    if (element) {
        result += `__${element}`
    }

    if (modifier) {
        result += `_${modifier}`
    }

    return result;
}
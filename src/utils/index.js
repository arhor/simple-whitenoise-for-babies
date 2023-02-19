/**
 * Returns an object holding property 'value' that will be lazily evaluated using provided factory function.
 * 
 * @template T
 * @param {() => T} factory 
 * @returns {{ value: T }}
 */
export function createLazy(factory) {
    return {
        get value() {
            Object.defineProperty(this, 'value', {
                value: factory(),
            });
            return this.value;
        },
    };
}

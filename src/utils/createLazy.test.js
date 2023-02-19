import { describe, expect, test, vi } from 'vitest';

import createLazy from '~/utils/createLazy';

describe('createLazy', () => {
    test('should return an object with value property calculated on demand', () => {
        // given
        const expectedValue = 'test value';

        // when
        const result = createLazy(() => expectedValue);

        // then
        expect(result.value).to.be.equal(expectedValue);
    });
});

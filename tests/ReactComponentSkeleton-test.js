/* global jest, expect, describe, it */

jest.dontMock('../src/components/ReactComponentSkeleton');

describe('ReactComponentSkeleton', function() {
    // Required modules
    let React = require('react/addons'),
        ReactComponentSkeleton = require('../src/components/ReactComponentSkeleton'),
        i18nNoop = require('ar-i18n-noop'),
        _ = require('lodash');

    let TestUtils = React.addons.TestUtils;

    it('should fail', function() {
        expect(false).toBe(true);
    });
});

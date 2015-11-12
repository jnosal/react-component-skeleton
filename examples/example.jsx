import React from 'react';
import ReactComponentSkeleton from '../.';
import i18nNoop from 'ar-i18n-noop';

React.render(
    <ReactComponentSkeleton
        i18n={ i18nNoop }
    />,
    document.getElementById('ar-react-component-skeleton-example-container')
);

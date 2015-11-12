import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import {} from 'react-bootstrap';

let ReactComponentSkeleton = React.createClass({

    /**************************************************
     * Component Specs and lifecycle                  *
     **************************************************/

    propTypes: {
        i18n: React.PropTypes.object.isRequired
    },

    /**************************************************
     * Rendering                                      *
     **************************************************/

    render() {
        return (
            <div>Component goes here</div>
        );
    }

    /**************************************************
     * Event handlers && children component callbacks *
     **************************************************/

    /**************************************************
     * Helper methods                                 *
     **************************************************/

});

export default ReactComponentSkeleton;

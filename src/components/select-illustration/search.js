// React
const { Fragment } = wp.element;

// Search element
import { createFilter } from 'react-search-input';

// Utils
import { selectNotice } from '../../blocks/utils';

// Internationalization
const { __ } = wp.i18n;

// Elements
import Item from './item';

export default ( props ) => {
    const { illustrations, search, filter, setter, setState, defaults } = props.parent;

    if( filter !== 'search' ) {
        return null;
    }

    const items = illustrations.filter( createFilter( search, [ 'label' ] ) );
    const { length } = search;

    return (
        <Fragment>
            { ( length === 0 ) && selectNotice( __( 'Type something in the search field %s', 'illustrations' ), '😊' ) }

            { ( length !== 0 && length <= 2 ) && selectNotice( __( 'More letters needed %s', 'illustrations' ), '🙃' ) }

            { ( ! items.length && length > 2 ) && selectNotice( __( 'Could not find anything %s', 'illustrations' ), '😢' ) }

            { ( length >= 3 ) && items.map( ( details, index ) => 
                <Item 
                    key={ index } 
                    details={ { ...details } } 
                    defaults={ { ...defaults } } 
                    setters={ { setter, setState } } 
                /> 
            ) }
        </Fragment>
    );
}
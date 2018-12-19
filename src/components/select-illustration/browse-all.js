// 3rd party
import InfiniteScroll from 'react-infinite-scroller';

// Components
import Item from './item';

// Utils
import { selectNotice } from '../../blocks/utils';

// Internationalization
const { __ } = wp.i18n;

// Elements
const { Fragment } = wp.element;

export default ( props ) => {
    const { illustrations, loadCount, hasMore, filter, setter, setState, defaults } = props.parent;

    const { length } = illustrations;

    if( filter !== 'browse' ) {
        return null;
    }

    const load = page => {
        let onPageCount = page * 10;

        if( onPageCount > length ) {
            setState( { 
                loadCount: onPageCount - ( onPageCount - length ),
                hasMore: false
            } );

            return true;
        }

        if( loadCount !== onPageCount ) {
            setState( { loadCount: onPageCount } )
            return true;
        }

        return false;
    }

    const display = () => {
        let items = [];

        for ( let index = 0; index <= loadCount; index++ ) {
            
            if( index === length ) break;

            items.push( 
                <Item 
                    key={ index } 
                    details={ { ...illustrations[ index ] } } 
                    defaults={ { ...defaults } } 
                    setters={ { setter, setState } }
                /> 
            );
        }
        
        return items;
    }

    return (
        <Fragment>
            <InfiniteScroll
                className='row'
                pageStart={ 1 }
                loadMore={ load }
                hasMore={ hasMore }
                useWindow={ false }
                threshold={ 100 }
                getScrollParent={ () => document.querySelector( '.illustrations-select-modal' ) }
            >
                { display() }
            </InfiniteScroll>

            { ! hasMore && selectNotice( __( '%1$s There is an end to every journey %2$s', 'illustrations' ), '😲', '😵' ) }
        </Fragment>
    );
}
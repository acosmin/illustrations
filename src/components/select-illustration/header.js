// 3rd party
import classnames from 'classnames';
import SearchInput from 'react-search-input';

// Internationalization
const { __ } = wp.i18n;

function SearchIn ( { className, parent } ) {
    const { setState, filter } = parent;

    const [ browseAriaLabel, browseActiveClass ] = filter === 'browse' ?
		// translators: ARIA label for the Document sidebar tab, selected.
		[ __( 'Browse all (selected)', 'illustrations' ), 'is-active' ] :
		// translators: ARIA label for the Document sidebar tab, not selected.
		[ __( 'Browse all', 'illustrations' ), '' ];

	const [ searchAriaLabel, searchActiveClass ] = filter  === 'search' ?
		// translators: ARIA label for the Block sidebar tab, selected.
		[ __( 'Search (selected)', 'illustrations' ), 'is-active' ] :
		// translators: ARIA label for the Block sidebar tab, not selected.
        [ __( 'Search', 'illustrations' ), '' ];
        
    const headerClasses = classnames( 
        'components-panel__header edit-post-sidebar-header edit-post-sidebar__panel-tabs', className 
    );

    return (
        <header className={ headerClasses }>
            <ul>
                
                <li>
                    <button
                        onClick={ () => setState( { filter: 'browse', search: '' } ) }
                        className={ classnames( 'edit-post-sidebar__panel-tab', browseActiveClass ) }
                        aria-label={ browseAriaLabel }
                        data-label={ __( 'Browse all', 'illustrations' ) }
                    >
                        { __( 'Browse all', 'illustrations' ) }
                    </button>
                </li>

                <li>
                    <button
                        onClick={ () => setState( { filter: 'search', hasMore: true, loadCount: 10 } ) }
                        className={ classnames( 'edit-post-sidebar__panel-tab', searchActiveClass ) }
                        aria-label={ searchAriaLabel }
                        data-label={ __( 'Search', 'illustrations' ) }
                    >
                        { __( 'Search', 'illustrations' ) }
                    </button>
                </li>

                { filter === 'search' && <li className={ 'illustrations-select-search-field' }>
                    <SearchInput 
                        placeholder={ __( '3 or more letters', 'illustrations' ) } 
                        className={ 'search-input' }
                        onChange={ search => setState( { search } ) }
                    />
                </li> }

            </ul>
        </header>
    );
}

export default SearchIn;
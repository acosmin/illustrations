// Header
import Header from './header';

// Wrapper elements
import Wrapper from './wrapper';
import SearchResults from './search';
import BrowseAll from './browse-all';

// Components
const { Button, Modal, PanelBody, PanelRow } = wp.components;

// React elements
const { RawHTML } = wp.element;

// Compose
const { withState } = wp.compose;

// Internationalization
const { __ } = wp.i18n;

const DEFAULTS = {
    selecting: false,
    filter: 'search',
    search: '',
    loadCount: 10,
    hasMore: true
}

function SelectIllustration( props ) {
    const { setState, selecting, filter, svg } = props;

    const illustrations = props.illustrations.map( illst => { 
        return { label: illst.label, component: illst.component, selected: illst.value } 
    } )

    props.illustrations = illustrations;

    const elProps = { ...props, defaults: { ...DEFAULTS } };

	const openModal = e => setState( { selecting: true } );
	
	const svgString = svg.replace( 'svg style="position:absolute"', 'svg' );

    return (
        <PanelBody title={ __( 'Illustration' ) } initialOpen={ false }>
            <Button 
                className='editor-post-featured-image__preview illustrations-svg-select' 
                onClick={ openModal } 
                aria-label={ __( 'Edit or update the image' ) }>
                    <RawHTML className='illustrations-svg-preview'>{ svgString }</RawHTML>
            </Button>
            
            <PanelRow>
                <Button isLink onClick={ openModal }>
                    { __( 'Select Illustration', 'illustrations' ) }
                </Button>
            </PanelRow>

            { selecting && <Modal
                overlayClassName='illustrations-select-overlay'
                className='illustrations-select-modal'
                title={ __( 'Select an illustration', 'illustrations' ) }
                onRequestClose={ () => setState( DEFAULTS ) }>

                    <Header parent={ { ...props } }/>

                    <Wrapper filter={ filter }>
                        <SearchResults parent={ { ...elProps } }/>
                        <BrowseAll parent={ { ...elProps } }/>
                    </Wrapper>

            </Modal> }
        </PanelBody>
    );
}

export default withState( DEFAULTS )( SelectIllustration );
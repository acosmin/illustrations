// Block attributes
const name = 'illustrations-block/illustration';
const { idAttr } = illustrationsBlock;

// Hooks
import '../hooks';

// 3rd party
import { renderToStaticMarkup } from 'react-dom/server';

// Utils
import { 
    illustrationFind, 
    createStyleNode, 
    addStyleContents, 
    removeStyleNode, 
    svgPadding,
    viewportProps,
} from '../utils';

// Lodash
const { isEqual } = lodash;

// Constants|defaults
import { SVG_DEFAULTS } from '../constants';

// React elements
const { Component, Fragment, RawHTML } = wp.element;

// Components
const { Spinner } = wp.components;

import Sidebar from './sidebar';

// Blocks
const { registerBlockType } = wp.blocks;

// Compose
const { withState, compose } = wp.compose;

// Data
const { withViewportMatch } = wp.viewport;

// Internationalization
const { __, sprintf } = wp.i18n;

// Manifest
const manifest = {
    title: 'Illustrations',
    icon: 'slides',
    description: __( 'Add a SVG illustration in your content.', 'illustrations' ),
    category: 'common',
    keywords: [ 
        __( 'svg', 'illustrations' ), 
        __( 'illustration', 'illustrations' ), 
        __( 'image', 'illustrations' ) 
    ],
    transform: [],
    useOnce: false,
    supports: {
        align: [ 'left', 'center', 'right', 'wide', 'full' ],
        html: false,
        reusable: false
    },
}

// Attributes
const attributes = {
    selected: {
        type: 'string',
        default: SVG_DEFAULTS.id
    },
    svg: {
        source: 'html',
        selector: 'figure.illustration-svg-wrap',
        default: SVG_DEFAULTS.code
    },
    primaryColor: {
        type: 'string',
        default: SVG_DEFAULTS.primaryColor
    },
    paddingBottom: {
        type: 'string',
        default: SVG_DEFAULTS.paddingBottom
    },
    size: {
        type: 'object',
        default: SVG_DEFAULTS.size
    }
};



/**
 * Illustrations Block class
 *
 * @since   1.0.0
 * @class   IllustrationsBlock
 * @extends {Component}
 */
class IllustrationsBlock extends Component {
    /**
     * Create an instance of IllustrationsBlock.
     * 
     * @since    1.0.0
     * @memberof IllustrationsBlock
     */
    constructor() {
        super( ...arguments );

        this.illustration = false;

        this.setIllustration = this.setIllustration.bind( this );
        this.setError = this.setError.bind( this );
        this.illustrationSave = this.illustrationSave.bind( this );
        this.svgMarkup = this.svgMarkup.bind( this );
    }

    /**
     * After mount
     * 
     * @since    1.0.0
     * @memberof React.Component
     */
    componentDidMount() {
        const { clientId, attributes, isMobile, isTablet, isDesktop } = this.props;

        if( this.illustration === false ) {
            this.setIllustration( this.props.attributes.selected )
        }

        createStyleNode( clientId );
        addStyleContents( clientId, attributes.size, { isMobile, isTablet, isDesktop } );
    }

    /**
     * After props update, we only need the props arg
     * 
     * @memberof React.Component
     * 
     * @since 1.0.0
     * @param {Object} prevProps Previous props 
     */
    componentDidUpdate( prevProps ) {
        const { attributes, setState, clientId } = this.props;
        const { selected, size } = attributes;
        const { selected:prevSelected, size:prevSize } = prevProps.attributes;
        const viewport = viewportProps( this.props );
        const prevViewport = viewportProps( prevProps );

        if( selected !== prevSelected ) {
            setState( {
                status: 'pending'
            }, () => this.setIllustration( selected ) )
        }

        if( ! isEqual( size, prevSize ) || ! isEqual( viewport, prevViewport ) ) {
            addStyleContents( clientId, size, viewport );
        }
    }

    /**
     * Clean-up on block remove
     *
     * @since    1.0.0
     * @memberof React.Component
     */
    componentWillUnmount() {
        removeStyleNode( this.props.clientId );
    }

    /**
     * Makes sure we import the right illustration using dynamic imports.
     * Sets the status to `done` if all goes well and and `this.illustration` to
     * the actual SVG component.
     *
     * @memberof IllustrationsBlock
     * 
     * @since   1.0.0
     * @param   {String}       selected Currently selected illustration
     * @returns {Void|Boolean}          False and status to `error` if something goes wrong
     */
    setIllustration( selected ) {
        const illustration = illustrationFind( selected );

        if( illustration === undefined ) {
            this.setError( sprintf( 
                __( 'Could not find the selected illustration: %s', 'illustrations' ),
                selected
            ) );

            return false;
        }

        import( `../../illustrations/svg/${ illustration.folder }` ).then( imported => {
            this.illustration = imported.default;
        } ).then( () => {
            this.props.setState( { status: 'done' } )
        } ).catch( this.setError );
    }

    /**
     * Sets the status to error, making sure the block doesn't break
     *
     * @memberof IllustrationsBlock
     * 
     * @since  1.0.0
     * @param  {*}    error
     * @return {Void}
     */
    setError( error ) {
        this.props.setState( { status: 'error' }, () =>
            console.error( error )
        );
	}

    /**
     * Converts SVG component to string.
     * 
     * Using `ReactDOMServer.renderToStaticMarkup` instead of `wp.element.renderToString` because
     * the latter messes up with the SVG markup
     * 
     * @memberof IllustrationsBlock
     * 
     * @since  1.0.0 
     * @param  {Object} props Component props
     * @return {String}       Static marup compiled by `renderToStaticMarkup`
     */
    svgMarkup( props = {} ) {
		let markup = renderToStaticMarkup( 
            this.illustration( props )
		);
		
		/** 
		 * Make sure the svg doesn't have padding-bottom
		 * 
		 * @since 1.0.1 
		 */
		const posAbs = '<svg style="position:absolute" ';

		if ( ! markup.includes( posAbs ) ) {
			markup = markup.replace( '<svg ', posAbs );
		}

        return markup;
    }

    /**
     * Saves the svg markup and `selected` attribute if an illustration is
     * being selected in the modal.
     *
     * @memberof IllustrationsBlock
     * 
     * @since  1.0.0
     * @param  {Function} component React component
     * @param  {String}   selected  Selected svg name
     * @return {Void}
     */
    illustrationSave( component, selected ) {
        const { primaryColor } = this.props.attributes;

        this.illustration = component;

        this.props.setAttributes( { 
            selected,
            svg: this.svgMarkup( { primaryColor } ),
            paddingBottom: svgPadding( this.svgMarkup() )
        } );
    }

    /**
     * Render our content
     * 
     * @returns  {JSX}
     * @memberof React.Component
     */
    render() {
        const { attributes, status, className } = this.props;
        const { primaryColor, paddingBottom } = attributes;

        return (
            <Fragment>
                
                <div className={ className }>
                    <div className="illustration-svg-container">
                        <figure style={ { paddingBottom, position: 'relative' } } className="illustration-svg-wrap">
                            { status !== 'pending' || ( status === 'done' && status !== 'error' ) ?  
                                this.illustration( { primaryColor } ) : <Spinner /> 
                            }
                        </figure>
                    </div>
                    { status === 'error' && 
                        <p>{ __( 'Something went wrong, please check the console', 'illustrations' ) }</p> 
                    }
                </div>

                <Sidebar { ...this } />

            </Fragment>
        );
    }
}

// Setup
const methods = {
    edit: compose( [ 
            withViewportMatch( { 
                isMobile: '< small',
                isTablet: '< large',
                isDesktop: '>= large'
            } ),
            withState( {
                status: 'pending',
            } )
        ] )( IllustrationsBlock ),
    save( props ) {
		const { itemid, paddingBottom } = props.attributes;

		/** 
		 * Make sure the svg doesn't have padding-bottom
		 * 
		 * @since 1.0.1 
		 */
		let svg = '';
		const posAbs = '<svg style="position:absolute" ';

		if ( ! props.attributes.svg.includes( posAbs ) ) {
			svg = props.attributes.svg.replace( '<svg ', posAbs );
		} else {
			svg = props.attributes.svg;
		}
		
        return (
            <div { ...{ [ idAttr ]: itemid } }>
                <div className="illustration-svg-container">
                    <figure style={ { paddingBottom, position: 'relative' } } className="illustration-svg-wrap">
                        <RawHTML>{ svg }</RawHTML>
                    </figure>
                </div>
            </div>
        );
    },
}

///////////////////////////////////////////////////////////////////

// Deprecated
const deprecated = [
	// 1.0.0
	{
		supports: { ...manifest.supports },
		attributes,
		save( props ) {
			const { svg, itemid, paddingBottom } = props.attributes;
			
			return (
				<div { ...{ [ idAttr ]: itemid } }>
					<div className="illustration-svg-container">
						<figure style={ { paddingBottom } } className="illustration-svg-wrap">
							<RawHTML>{ svg }</RawHTML>
						</figure>
					</div>
				</div>
			);
		},
	}
];

// Register the block
registerBlockType( name, { ...manifest, attributes, ...methods, deprecated } );
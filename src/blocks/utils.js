// Illustrations
import illustrations from '../illustrations';

// Internationalization
const { sprintf } = wp.i18n;

export const illustrationFind = name => illustrations.find( illstn => illstn.value === name );

export const illustration = name => illustrationFind( name ).component;

export const delayImport = ms => new Promise( resolve => setTimeout( () => resolve(), ms ) );

export const selectNotice = ( ...args ) => <div className='illustration-notice'><h1>{ sprintf( ...args ) }</h1></div>;

export const removeNewLines = text => text.replace( /[\r\n\x0B\x0C\u0085\u2028\u2029]+/g, ' ' );

export const randomID = ( prefix = 'i', length = 6 ) => prefix + Math.random().toString( 36 ).substr( 2, length ); 

export const getSizeValues = svg => {
    const matches = svg.match( / viewBox="([^"]*)"/ );

    if( ! matches ) return false;

    let sizes = {};

    matches[ 1 ].split( ' ' )
        .map( el => parseFloat( el ) )
        .filter( el => el !== 0 )
        .forEach( ( el, i ) => sizes[ i === 0 ? 'width' : 'height' ] = el );

    return sizes;
}

export const percentageHeight = ( sizes, normal = 100 ) => {
    const { width, height } = sizes;

    const roundIt = size => Math.round( size * 10 ) / 10;

    if( width === height ) {
        return normal;
    }

    if( width > height ) {
        return roundIt( ( height / width ) * normal );
    }

    if( width < height ) {
        const calc = ( width / height ) * normal;
        return roundIt( ( normal - calc ) + normal );
    }
}

export const svgPadding = svg => `${ percentageHeight( getSizeValues( svg ) ).toString() }%`;

export const createStyleID = ( clientId, hash = false ) => `${ hash ? '#' : '' }style-${ clientId }` 

export const createStyleNode = clientId => {
    const node = document.createElement( 'style' );

    node.setAttribute( 'type', 'text/css' );
    node.setAttribute( 'id', createStyleID( clientId ) );

    document.head.appendChild( node );
}

export const addStyleContents = ( clientId, values, viewport ) => {
    const element = document.querySelector( createStyleID( clientId, true ) );

    const tmpl = ( clientId, size ) => `
        #block-${ clientId }:not([data-align]) .illustration-svg-container { 
            width: ${ size }%;
        }

        #block-${ clientId }[data-align="center"] .illustration-svg-container { 
            margin: 0 auto; 
            width: ${ size }%;
        }

        #block-${ clientId }[data-align="right"] .editor-block-list__block-edit,
        #block-${ clientId }[data-align="left"] .editor-block-list__block-edit { width: ${ size }% }
        #block-${ clientId }[data-align="right"] .wp-block-illustrations-block-illustration,
        #block-${ clientId }[data-align="left"] .wp-block-illustrations-block-illustration { 
            width: 100%;
        }

        #block-${ clientId }[data-align="wide"] .illustration-svg-container,
        #block-${ clientId }[data-align="full"] .illustration-svg-container,
        #block-${ clientId }[data-align="wide"] .wp-block-illustrations-block-illustration,
        #block-${ clientId }[data-align="full"] .wp-block-illustrations-block-illustration { 
            width: 100%;
        }
    `;
    
    element.innerHTML = '';

    const breakPoints = Object.keys( viewport );
    
    if( breakPoints.filter( bp => viewport[ bp ] ).length === 2 ) {
        viewport[ 'isTablet' ] = false;
    }

    Object.keys( viewport ).forEach( vp => {
        if( viewport[ vp ] ) {
            element.innerHTML = tmpl( clientId, values[ vp.replace( 'is', '' ).toLowerCase() ] );
        }
    } );
}

export const removeStyleNode = clientId => {
    const element = document.querySelector( createStyleID( clientId, true ) );

    document.querySelector( 'head' ).removeChild( element );
}

export const viewportProps = props => {
    const { isMobile, isTablet, isDesktop } = props;
    
    return { isMobile, isTablet, isDesktop };
}

export const flattenBlocksArray = results => {
    return results.reduce( ( flat, toFlatten ) => {
        return flat.concat( Array.isArray( toFlatten ) ? flattenBlocksArray( toFlatten ) : toFlatten );
    }, [] );
}

export const getBlocksUnFlatten = ( blocks, name) => {
    let results = [];

    blocks.forEach( block => { 
        if( block.name === name ) {
            results.push( block );
        } else {
            results.push( getBlocksUnFlatten( block.innerBlocks, name ) );
        }
    } )

    return results;
}

export const getAllBlocksByName = ( blocks, name ) => {
    return flattenBlocksArray( getBlocksUnFlatten( blocks, name ) );
}
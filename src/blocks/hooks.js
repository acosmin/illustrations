// Attributes
// @todo don't duplicate these 2.
const name = 'illustrations-block/illustration';
const { idAttr } = illustrationsBlock;

// Hooks
const { addFilter } = wp.hooks; 

// Utils
import { 
    randomID,
    getAllBlocksByName
} from './utils';

/**
 * Filters registered block settings, extending attributes with a new attribute for an ID
 *
 * @since   1.0.0
 * @param   {Object} settings Original block settings.
 * @returns {Object}          Filtered block settings.
 */
const addIllustrationAttr = settings => {
    if( settings.name === name ) {
        settings.attributes = {
            ...settings.attributes,
			itemid: {
				type: 'string',
				source: 'attribute',
				attribute: idAttr,
                selector: '*',
                default: ''
			},
        };
    }

	return settings;
}

/**
 * Override props assigned to save component to inject ID.
 *
 * @todo    It currently saved the ID, the issue is with duplicates. In the current form
 *          it will refresh the id in this situation. Find a way to make sure it doesn't refresh
 *          the first id, just the duplicates.
 * 
 * @since   1.0.0
 * @param   {Object} extraProps Additional props applied to save element.
 * @param   {Object} blockType  Block type.
 * @param   {Object} attributes Current block attributes.
 * @returns {Object}            New extra props including the ID
 */
const addIllustrationID = ( extraProps, blockType, attributes ) => {
    if( blockType.name === name ) {
        const blocks = wp.data.select( 'core/editor' ).getBlocks();

        if( blocks.length && extraProps[ idAttr ] !== '' ) {
            const illstBlocks = getAllBlocksByName( blocks, name );
            const multiple = illstBlocks.filter( el => {
                if( el.name !== name ) {
                    return false;
                }

                return el.attributes.itemid === attributes.itemid
            } );
            
            if( multiple.length < 2 ) {
                return extraProps;
            } else {
                extraProps[ idAttr ] = randomID();
            }

        } else {
            extraProps[ idAttr ] = attributes.itemid === '' ? randomID() : attributes.itemid;
        }

    }

	return extraProps;
}

addFilter( 'blocks.registerBlockType', 'illustrations/itemid/attribute', addIllustrationAttr );
addFilter( 'blocks.getSaveContent.extraProps', 'illustrations/itemid/extra-props', addIllustrationID );
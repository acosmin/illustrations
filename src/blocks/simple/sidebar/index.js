// Illustrations
import illustrations from '../../../illustrations';

// Sidebar components
import IllustrationSelect from '../../../components/select-illustration';
import IllustrationColors from './colors';
import IllustrationSize from './size';

// Editor
const { InspectorControls } = wp.editor;


export default ( parent ) => {
    const { illustrationSave, props } = parent;

    return (
        props.isSelected && <InspectorControls>
            <IllustrationSelect 
                illustrations={ [ ...illustrations ] } 
                setter={ illustrationSave } 
                svg={ props.attributes.svg } 
            />
            <IllustrationColors { ...parent } />
            <IllustrationSize { ...parent } />
        </InspectorControls>
    );
}
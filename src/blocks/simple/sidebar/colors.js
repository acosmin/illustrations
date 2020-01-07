// Editor
const { PanelColorSettings } = wp.editor;

// Internationalization
const { __ } = wp.i18n;

export default ( parent ) => {
    const { attributes, setAttributes } = parent.props;
    const { primaryColor } = attributes;
    
    return (
        <PanelColorSettings
            title={ __( 'Colors', 'illustrations' ) }
            initialOpen={ false }
            colorSettings={ [
                {
                    value: primaryColor,
                    label: __( 'Main color:', 'illustrations' ),
                    onChange: ( primaryColor ) => {
                        setAttributes( { 
                            primaryColor,
                            svg: parent.svgMarkup( { primaryColor } )
                        } );
                    }
                }
            ] }
        ></PanelColorSettings>
    );
}
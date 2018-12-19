// 3rd party
import classnames from 'classnames';

// Internationalization
const { __, sprintf } = wp.i18n;

// Components
const { RangeControl, PanelBody, Dashicon } = wp.components;

export default ( parent ) => {
    const breakPoints = {
        desktop: __( 'Desktop (%)', 'illustrations' ),
        tablet: __( 'Tablet (%)', 'illustrations' ),
        mobile: __( 'Mobile (%)', 'illustrations' )
    }

    const currentlyActive = ( bp ) => {
        const { isMobile, isTablet, isDesktop } = parent.props;
        const alingment = parent.props.attributes.align;

        let msg = __( 'Viewport in use.', 'illustrations' );

        if( [ 'full', 'wide' ].find( align => align === alingment ) ) {
            msg += ' ' + sprintf( 
                __( 'The current illustration alingment (%s width) will overwrite this setting.', 'illustrations' ), 
                alingment 
            );
        }

        if( bp === 'desktop' && isDesktop && ! isTablet ) return msg;
        if( bp === 'tablet' && isTablet && ! isMobile ) return msg;
        if( bp === 'mobile' && isMobile ) return msg;

        return '';
    }

    return (
        <PanelBody title={ __( 'Size' ) } initialOpen={ false }>
            { Object.keys( breakPoints ).map( bp => {
                let icon = bp === 'mobile' ? 'smartphone' : bp;
                const active = currentlyActive( bp );

                const classes = classnames( 'illustrations-size-icon', { active } )

                return (
                    <RangeControl
                        label={ [ 
                            <Dashicon className={ classes } icon={ icon } size={ 20 }/>, 
                            breakPoints[ bp ] 
                        ] }
                        help={ active }
                        value={ parent.props.attributes.size[ bp ] }
                        onChange={ ( px ) => parent.props.setAttributes( {
                            size: {
                                ...parent.props.attributes.size,
                                [ bp ]: px
                            }
                        } ) }
                        min={ 1 }
                        max={ 100 }
                        step={ 1 }
                    />
                )
            } ) }  
        </PanelBody>
    );
}
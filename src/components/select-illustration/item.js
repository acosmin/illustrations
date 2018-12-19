// React
import { Suspense } from 'react';

// Components
const { Button, Spinner } = wp.components;

// Internationalization
const { __ } = wp.i18n;

export default ( props ) => {
    const { label, component, selected } = props.details;
    const { setState, setter } = props.setters;
    const Preview = component;

    return (
        <div className='col-xs-4'>
            <div className='illustrations-select-item'>
                <Suspense fallback={ <div className='item-loading'><Spinner /></div> }>
                    <div className='item-preview'>
                        <Preview height='230px' />
                    </div>
                    <div className='item-details'>
                        <h4>{ label }</h4>
                        <Button isPrimary isSmall onClick={ () => {
                            setState( props.defaults, () =>  
                                setter( component._result, selected )
                            )
                        } }>
                            { __( 'Select', 'illustrations' ) }
                        </Button>
                    </div>
                </Suspense>
            </div>
        </div>
    );
}
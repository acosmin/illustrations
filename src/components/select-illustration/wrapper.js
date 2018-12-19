// 3rd party
import classnames from 'classnames';

export default ( props ) => {
    const showRow = props.filter !== 'browse';
    const selectedClass = { [ `${ props.filter }-selected` ]: true  };

    return (
        <div className={ classnames( 'illustrations-select-wrap', selectedClass ) }>
            { showRow ? <div className='row'>{ props.children }</div> : props.children }
        </div>
    );
}
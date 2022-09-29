const withHeaderStyling = (BaseComponent) => (props) => (
    <BaseComponent {...props}  style={{ fontWeight: 700, color: 'green' }}/>
);

const withGeneralStyling = (BaseComponent) => (props) => (
    <BaseComponent {...props} className='general' />
);


export{
    withHeaderStyling,
    withGeneralStyling
}
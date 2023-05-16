const GridLayout = ({ children, gradient, marginTop, marginBottom, wrapper, contentClass, containerClass }) => {
    return (
        <div className={`container ${ containerClass ? containerClass : '' }`} style={{ background: gradient ? 'linear-gradient(180deg, #F5F5F5 0%, #FFFFFF 22.4%)' : '' }}>
            <div className={`content ${ contentClass ? contentClass : '' }`} style={{ marginTop: marginTop ? '180px' : 'none', marginBottom: marginBottom ? '150px' : 'none', }}>
                {
                    wrapper ? <>{ children }</> : <div className="wrapper">
                        {children}
                    </div>
                }
            </div>
        </div>
    )
}

export default GridLayout;
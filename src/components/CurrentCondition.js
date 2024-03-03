const CurrentCondition = ({currentCondition}) => {
    return(
        <>
        <div className="col-lg-4 condition">
            <img style={{width:100}} src={currentCondition.icon} />
            <h4>{currentCondition.text}</h4>
        </div>
        </>

    )
}

export default CurrentCondition;
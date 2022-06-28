const Color = (prop) => {
    const style = {
        backgroundColor: `#${prop.color}`,
        height: '200px',
        width: '200px',
        borderRadius: '10px'
    };

    return (
        <div style={style}></div>
    )

}

export default Color;
const feedMessage = (msg, statusCode, res, data)=>{
    res.status(statusCode).json({
        message : msg,
        affected_data : data || '',
        statusCode
    })
}

export default feedMessage;
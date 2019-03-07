import req from './apiSetting'

/**
 * 
 * @param {新活充电接口抛出}
 */ 

// 获取电站列表
export const getStationtList = param => { return req.get('/charge/getStationtList', param) }



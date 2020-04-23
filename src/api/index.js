//如果接口较多，可以按照模块再进行细分
import http from "../tool/http";

// 获取收款卡
export const queryCashCard = params => {
    return new Promise((resolve, reject) => {
        http.post("/api/get_bank_card.do", params).then(res => {
            if (res) {
                resolve(res)
            }
        })
    })
};

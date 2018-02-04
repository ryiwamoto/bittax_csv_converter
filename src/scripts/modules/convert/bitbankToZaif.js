const toZaifBitOrAsk = buyOrSell => buyOrSell === "buy" ? "買い" : "売り";

// bitbank:
//注文ID,取引ID,通貨ペア,売/買,数量,価格,手数料,M/T,取引日時

/**
 * bitBank type to zaif
 * @param {string} csv 
 */
export default function (csv) {
    return csv.split("\n")
        .slice(1)
        .map(_ => _.split(","))
        .map(([orderId, tradeId, pair, buyOrSell, amount, place, fee, mt, date]) => [
            pair, toZaifBitOrAsk(buyOrSell), place, amount, fee, 0, Date.parse(date), ""
        ]);
}

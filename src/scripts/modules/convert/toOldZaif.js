/**
 * 売り/買いの形式に変換する
 * @param {"bit"|"ask"|"売り"|"買い"} newBitOrAsk 
 */
const toOldBitOrAsk = newBitOrAsk => (newBitOrAsk === "ask" || newBitOrAsk === "売り") ? "売り" : "買い"; // なんで逆なのかはzaifに聞いてくれ

/**
 * to old zaif
 * "マーケット","取引種別","価格","数量","取引手数料","ボーナス円","日時","コメント"
 * @param {string} csv 
 */
export default function parseZaif(csv) {
    return csv.split("\n")
        .slice(1)
        .map(_ => _.split(",").map(_ => _.replace(/"/g, "")))
        .map(([pair, bitOrAsk, place, amount, fee, bonus, date, comment]) => [
            pair, toOldBitOrAsk(bitOrAsk), place, amount, fee, bonus, Date.parse(date), comment
        ]);
}

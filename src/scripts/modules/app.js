import toOldZaif from "./convert/toOldZaif";
import bitbankToZaif from "./convert/bitbankToZaif";
import { toZaifDate } from "./convert/zaifFormat";

const ADD = "add";
const CONVERT = "convert";

export const ExchangeType = {
    bitbank: "bitbank",
    zaif: "zaif",
};

export const initialState = {
    csv: {
        [ExchangeType.bitbank]: [],
        [ExchangeType.zaif]: [],
    },
    result: null,
    count: 0,
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD:
            const csv = {
                ...state.csv,
                [action.payload.type]: [...state.csv[action.payload.type], ...action.payload.files],
            }
            return {
                ...state,
                csv,
                count: Object.values(csv).reduce((p, c) => (p + c.length), 0)
            }
        case CONVERT:
            const result = convetToSingleZaifCsv(
                state.csv[ExchangeType.bitbank].map(_ => _.text),
                state.csv[ExchangeType.zaif].map(_ => _.text),
            );
            return {
                ...state,
                result: textToUrl(result)
            };
        default:
            return state;
    }
}

export function addFiles(type, files) {
    return {
        type: ADD,
        payload: {
            type,
            files,
        }
    };
}

export function convertCsv() {
    return {
        type: CONVERT,
    };
}

const zaifHeader = '"マーケット","取引種別","価格","数量","取引手数料","ボーナス円","日時","コメント"';
const year2018 = new Date(2018, 0, 1, 0, 0, 0, 0);

function convetToSingleZaifCsv(bitbankList, zaifList) {
    const columns = [
        ...bitbankList.map(_ => bitbankToZaif(_)).reduce((p, c) => [...p, ...c], []),
        ...zaifList.map(_ => toOldZaif(_)).reduce((p, c) => [...p, ...c], []),
    ].filter(_ => _[6] < year2018)
        .sort((a, b) => a[6] - b[6])
        .map(([pair, bitOrAsk, place, amount, fee, bonus, date, comment]) => [
            pair, bitOrAsk, place, amount, fee, bonus, toZaifDate(date), comment
        ].map(_ => _ !== "" ? `"${_}"` : ""));
    return [zaifHeader, ...columns].join("\n");
}

function textToUrl(text) {
    return URL.createObjectURL(new Blob([text], { type: "text/csv" }));
}
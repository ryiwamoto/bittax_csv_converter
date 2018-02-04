import { h } from "preact";

export default function ResultDownloadButton(props) {
    return (
        <a href={props.result} download="result-zaif.csv" class="button is-success is-large result-link" disabled={!Boolean(props.result)}>
            zaif形式のcsvをダウンロード<br/>
        </a>
    );
}

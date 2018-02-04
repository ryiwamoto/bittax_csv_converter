import { h, Component } from 'preact';
import FileDrop from "./fileDrop";
import FileInputButton from "./fileInputButton";

export default class ExchangeBox extends Component {
    constructor() {
        super();
        this.onFileDrop = this.fileDropHandle.bind(this);
        this.onFileInput = this.fileInputHandle.bind(this);
    }

    render(props) {
        return (
            <div class="column exchange-box" >
                <h2 class={`exchange-box__title exchange-box__title--${props.exchangeType}`}>{props.exchangeType}</h2>
                <div class="exchange-box__inner-box">
                    <FileInputButton className="exchange-box__file-chose-button button is-large" onAddFile={this.onFileInput} />
                    <FileDrop className="exchange-box__drag-and-drop" onFileDrop={this.onFileDrop}>
                        CSVをドラッグ・アンド・ドロップしてください
                        <br /> （複数アップロード可能）
                    </FileDrop>
                    <ul class="exchange-box__csv-list">
                        {props.csvList.map((_, i) => (<li key={i}>{_}</li>))}
                    </ul>
                </div>
            </div>
        );
    }

    fileDropHandle(type, parsedFiles) {
        this.props.onAddFiles(this.props.exchangeType, parsedFiles);
    }

    fileInputHandle(file) {
        this.props.onAddFiles(this.props.exchangeType, [file]);
    }
}

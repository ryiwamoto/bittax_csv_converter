import { h, Component } from "preact";

const CSV_PATTERN = "text/csv";

export default class FileInputButton extends Component {
    constructor() {
        super();
        this.onChange = this.changeHandle.bind(this);
    }

    render(props) {
        return (
            <label class={props.className}>
                <input class="file-input" type="file" name="resume" onChange={this.onChange} />
                ファイルを選択
            </label>
        );
    }

    changeHandle(e) {
        const input = e.currentTarget;
        if (input.value === "") {
            return;
        }
        const fileData = input.files ? input.files[0] : null;
        if (!fileData) {
            return;
        }
        const fileType = fileData.type;
        if (!fileType.match(CSV_PATTERN)) {
            input.value = "";
            return;
        }
        const reader = new FileReader();
        reader.onload = () => {
            this.props.onAddFile({
                name: fileData.name,
                text: reader.result
            });
        };
        reader.onerror = () => {
            input.value = "";
        };
        reader.readAsText(fileData);
    }
}

import { h, Component } from "preact";

export default class FileDrop extends Component {
    constructor() {
        super();
        this.onDrop = this.dropHandle.bind(this);
        this.onDragOver = this.dragOverHandle.bind(this);
    }

    render(props) {
        const { className, children, onFileDrop } = props;
        return (
            <div class={className} onDrop={this.onDrop} onDragOver={this.onDragOver}>
                {children}
            </div>
        );
    }

    async dropHandle(e) {
        e.preventDefault();
        const files = e.dataTransfer.files;
        const parsedFiles = await Promise.all(Array.from(files).map(async (_, i) => {
            const file = files.item(i);
            const text = await this.readAsFile(file);
            return {
                name: file.name,
                text,
            }
        }))
        this.props.onFileDrop(this.props.exchangeType, parsedFiles);
    }

    dragOverHandle(e) {
        e.preventDefault();
    }

    dragEndHandle(e) {
        e.dataTransfer.cleanData();
    }

    readAsFile(file) {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.addEventListener("loadend", () => resolve(reader.result));
            reader.readAsText(file);
        });
    }
}

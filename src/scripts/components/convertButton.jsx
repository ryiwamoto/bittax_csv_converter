import { h } from 'preact';

export default function ConvertButton(props) {
    return <button class="button is-large is-primary convert-button" onClick={props.onClick} disabled={props.disabled}>変換</button>;
}

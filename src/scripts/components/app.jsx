import { h, Component } from 'preact';
import ExchangeBoxContainer from "../containers/exchangeBoxContainer";
import ConvertButtonContainer from "../containers/convertButtonContainer";
import { ExchangeType } from "../modules/app";
import ResultDownloadButtonContainer from '../containers/resultDownloadButtonContainer';
import GithubLogo from "./githubLogo";

export default class App extends Component {
    render() {
        return (
            <div class="container">
                <div class="columns header">
                    <div class="column is-10">
                        bittaxで読める形式にcsvを変換するツール
                    </div>
                    <div class="column github-link-container">
                        <a href="" class="github-link" target="_blank" rel="noopener noreferrer">
                            <GithubLogo />
                        </a>
                    </div>
                </div>

                <div class="columns">
                    <ExchangeBoxContainer exchangeType={ExchangeType.bitbank} />
                    <ExchangeBoxContainer exchangeType={ExchangeType.zaif} />
                </div>

                <div class="columns">
                    <div class="column is-half is-offset-one-quarter">
                        <ConvertButtonContainer />
                        <ResultDownloadButtonContainer />
                    </div>
                </div>

                <article class="message is-warning">
                    <div class="message-header">
                        <p>注意</p>
                    </div>
                    <div class="message-body">
                        <ul>
                            <li> このツールはbittaxの公式ツールではありません。 </li>
                            <li> このツールにより発生したいかなるトラブル・損失・損害についても責任を負いません。自己責任で利用してください。 </li>
                        </ul>
                    </div>
                </article>
            </div>
        );
    }
}

import { connect } from "preact-redux";
import ResultDownloadButton from "../components/resultDownloadButton";

const stateProps = (state, ownProps) => ({
    result: state.result,
});

export default connect(stateProps)(ResultDownloadButton);

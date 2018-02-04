import { connect } from "preact-redux";
import { addFiles } from "../modules/app";
import ExchangeBox from "../components/exchangeBox.jsx";

const stateProps = (state, ownProps) => ({
    csvList: state.csv[ownProps.exchangeType].map(_ => _.name),
});

const dispatchProps = {
    onAddFiles: addFiles
}

export default connect(stateProps, dispatchProps)(ExchangeBox);

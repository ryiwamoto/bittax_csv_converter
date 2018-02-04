import { connect } from "preact-redux";
import { convertCsv } from "../modules/app";
import ConvertButton from "../components/convertButton";

const mapProps = (state) => ({
    disabled: state.count === 0,
});

const dispatchProps = {
    onClick: convertCsv,
}

export default connect(mapProps, dispatchProps)(ConvertButton);

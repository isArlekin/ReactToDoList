import {connect} from "react-redux";
import Layout from "../components/layout/layout";

function mapStateToProps (state) {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps)(Layout);
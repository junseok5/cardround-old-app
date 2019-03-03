import { connect } from 'react-redux'
import WebsitesContainer from './WebsitesContainer';

export default connect(state => ({
    websites: state.website.websites,
    listError: state.website.listError,
    page: state.website.page,
    loading: state.pender.pending["website/GET_WEBSITE_LIST"]
}))(WebsitesContainer)
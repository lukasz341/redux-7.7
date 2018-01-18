import {connect} from 'react-redux';
import Comment from './Comment';
import {ThumbUpComment} from './index'

const mapDispatchToProps = dispatch => ({
  ThumbUpComment: (id) => dispatch(ThumbUpComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);
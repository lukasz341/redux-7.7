import {connect} from 'react-redux';
import Comment from './Comment';
import {ThumbUpComment, ThumbDownComment} from './actions';

const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(ThumbUpComment(id)),
  thumbDownComment: (id) => dispatch(ThumbDownComment(id))

});

export default connect(null, mapDispatchToProps)(Comment);
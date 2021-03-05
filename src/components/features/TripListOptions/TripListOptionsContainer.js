import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {
  getAllFilters,
  changeSearchPhrase,
  changeDurationTimeFrom,
  changeDurationTimeTo,
  addTag,
  removeTag,
} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  changeDurationTimeFrom: duration => dispatch(changeDurationTimeFrom(duration)),
  changeDurationTimeTo: duration => dispatch(changeDurationTimeTo(duration)),
  addTag: tags => dispatch(addTag(tags)),
  removeTag: tags => dispatch(removeTag(tags)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
